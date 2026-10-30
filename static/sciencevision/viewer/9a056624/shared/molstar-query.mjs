const SUPPORTED_FORMATS = new Set([
  "mmcif",
  "cif",
  "pdb",
  "bcif",
  "sdf",
  "mol",
  "mol2",
  "xyz",
]);

const FORMAT_ALIAS = Object.freeze({
  mmcif: "mmcif",
  cif: "cifCore",
  pdb: "pdb",
  // Mol* receives BinaryCIF through its mmCIF loader with isBinary=true.
  bcif: "mmcif",
  sdf: "sdf",
  mol: "mol",
  mol2: "mol2",
  xyz: "xyz",
});

const MAX_STRUCTURES = 32;
const MAX_URL_LENGTH = 4096;
const CONTROL_CHARACTERS = /[\u0000-\u001F\u007F]/;

function queryValue(params, name) {
  const values = params.getAll(name);
  if (values.length > 1) {
    throw new Error(`?${name}= must be supplied at most once`);
  }
  return values.length === 1 ? values[0] : null;
}

function normalizeFormat(value, field) {
  if (typeof value !== "string" || !SUPPORTED_FORMATS.has(value)) {
    throw new Error(
      `${field} must be one of ${Array.from(SUPPORTED_FORMATS).join(", ")}`,
    );
  }
  return value;
}

function validatePathSegments(rawPath, field) {
  if (!rawPath || rawPath.includes("\\")) {
    throw new Error(`${field} must be a root-relative or same-origin URL path`);
  }

  for (const rawSegment of rawPath.split("/")) {
    if (!rawSegment) continue;
    let segment;
    try {
      segment = decodeURIComponent(rawSegment);
    } catch {
      throw new Error(`${field} contains an invalid percent escape`);
    }
    if (
      segment === "." ||
      segment === ".." ||
      segment.includes("/") ||
      segment.includes("\\") ||
      CONTROL_CHARACTERS.test(segment)
    ) {
      throw new Error(`${field} contains an unsafe path segment`);
    }
  }
}

function rawPathFor(value, field) {
  if (value.startsWith("/")) {
    if (value.startsWith("//")) {
      throw new Error(`${field} must not use a protocol-relative URL`);
    }
    return value.split(/[?#]/, 1)[0];
  }

  const schemeEnd = value.indexOf("://");
  if (schemeEnd < 1) {
    throw new Error(`${field} must be a root-relative or same-origin URL`);
  }
  const pathStart = value.indexOf("/", schemeEnd + 3);
  return pathStart < 0 ? "/" : value.slice(pathStart).split(/[?#]/, 1)[0];
}

function sameOriginAssetUrl(value, origin, field) {
  if (typeof value !== "string" || !value || value.length > MAX_URL_LENGTH) {
    throw new Error(`${field} must be a non-empty URL no longer than ${MAX_URL_LENGTH} characters`);
  }
  if (CONTROL_CHARACTERS.test(value) || value.startsWith("\\")) {
    throw new Error(`${field} contains unsafe characters`);
  }

  const originUrl = new URL(origin);
  const rawPath = rawPathFor(value, field);
  validatePathSegments(rawPath, field);

  let url;
  try {
    url = new URL(value, originUrl);
  } catch {
    throw new Error(`${field} is not a valid URL`);
  }
  if (
    url.origin !== originUrl.origin ||
    url.protocol !== originUrl.protocol ||
    url.username ||
    url.password ||
    url.hash
  ) {
    throw new Error(`${field} must be a same-origin URL without credentials or a fragment`);
  }
  return url.href;
}

function parseJsonFiles(value, fallbackFormat, origin) {
  let items;
  try {
    items = JSON.parse(value);
  } catch {
    throw new Error("?files= must be valid JSON or a legacy comma-separated list");
  }
  if (!Array.isArray(items) || !items.length || items.length > MAX_STRUCTURES) {
    throw new Error(`?files= JSON must contain 1 to ${MAX_STRUCTURES} entries`);
  }

  return items.map((item, index) => {
    const field = `files[${index}]`;
    if (typeof item === "string") {
      return {
        url: sameOriginAssetUrl(item, origin, field),
        format: fallbackFormat,
      };
    }
    if (!item || typeof item !== "object" || Array.isArray(item)) {
      throw new Error(`${field} must be a string or object`);
    }

    const allowed = new Set(["file", "path", "url", "type", "format"]);
    const unknown = Object.keys(item).filter((key) => !allowed.has(key));
    if (unknown.length) {
      throw new Error(`${field} has unsupported field(s): ${unknown.join(", ")}`);
    }

    const pathKeys = ["file", "path", "url"].filter((key) => key in item);
    if (pathKeys.length !== 1) {
      throw new Error(`${field} must contain exactly one of file, path, or url`);
    }
    const formatKeys = ["type", "format"].filter((key) => key in item);
    if (formatKeys.length > 1) {
      throw new Error(`${field} must not contain both type and format`);
    }

    return {
      url: sameOriginAssetUrl(item[pathKeys[0]], origin, `${field}.${pathKeys[0]}`),
      format: formatKeys.length
        ? normalizeFormat(item[formatKeys[0]], `${field}.${formatKeys[0]}`)
        : fallbackFormat,
    };
  });
}

function parseLegacyFiles(value, types, fallbackFormat, origin) {
  const paths = value.split(",");
  if (!paths.length || paths.length > MAX_STRUCTURES || paths.some((path) => !path)) {
    throw new Error(`legacy ?files= must contain 1 to ${MAX_STRUCTURES} non-empty paths`);
  }

  let formats = null;
  if (types !== null) {
    formats = types.split(",");
    if (formats.length !== paths.length || formats.some((format) => !format)) {
      throw new Error("legacy ?types= must have one non-empty format for every ?files= path");
    }
    formats = formats.map((format, index) => normalizeFormat(format, `types[${index}]`));
  }

  return paths.map((path, index) => ({
    url: sameOriginAssetUrl(path, origin, `files[${index}]`),
    format: formats ? formats[index] : fallbackFormat,
  }));
}

export function parseMolstarQuery(search, origin) {
  const params = new URLSearchParams(search);
  const filesValue = queryValue(params, "files");
  const type = queryValue(params, "type");
  const types = queryValue(params, "types");
  const fallbackFormat = type === null ? "mmcif" : normalizeFormat(type, "?type=");

  if (filesValue !== null) {
    const looksJson = filesValue.trim().startsWith("[");
    if (looksJson && types !== null) {
      throw new Error("?types= is only supported with legacy comma-separated ?files=");
    }
    if (!looksJson && type !== null && types !== null) {
      throw new Error("use either ?type= or legacy ?types=, not both");
    }
    const files = looksJson
      ? parseJsonFiles(filesValue, fallbackFormat, origin)
      : parseLegacyFiles(filesValue, types, fallbackFormat, origin);
    return {files, source: looksJson ? "json" : "legacy"};
  }

  if (types !== null) {
    throw new Error("?types= requires legacy ?files=");
  }
  const file = queryValue(params, "file");
  if (file === null) {
    throw new Error("No ?file= or ?files= query parameter");
  }
  return {
    files: [{url: sameOriginAssetUrl(file, origin, "?file="), format: fallbackFormat}],
    source: "single",
  };
}

export function molstarFormatFor(format) {
  return FORMAT_ALIAS[normalizeFormat(format, "format")];
}

export function molstarIsBinaryFor(format) {
  return normalizeFormat(format, "format") === "bcif";
}

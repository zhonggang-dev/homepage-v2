/**
 * Say, on the page, what this family's replay does and does not follow.
 *
 * Why this exists: a replay whose viewer follows the camera but not, say,
 * measurements leaves the panel visibly unchanged for most of a
 * measurement-heavy task. Every screenshot, tool name and argument beside it
 * still advances. A reader looking at that has no way to tell a deliberate
 * limitation from a broken panel, so the limitation has to be stated where
 * they are looking -- on the task page -- and not only in a report that does
 * not ship.
 *
 * The text comes from the adapter, so it cannot drift from what the adapter
 * actually maps. An adapter that declares no limitations gets no note.
 */

const NOTE_ID = 'sv-replay-coverage';

function list(items) {
  if (!items || !items.length) return '';
  if (items.length === 1) return items[0];
  return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
}

/**
 * What a family claims to follow, in words.
 *
 * `dimensions` is the single source of truth -- a machine-readable list the
 * checkout's browser harness enforces, key by key -- and `follows` is what the
 * page prints. Deriving the prose from the keys means the sentence on the page
 * and the thing the harness checks cannot drift apart.
 */
export function followedDimensions(declared) {
  if (!declared) return [];
  if (declared.dimensions && typeof declared.dimensions === 'object') {
    return Object.values(declared.dimensions).filter((value) => typeof value === 'string');
  }
  return Array.isArray(declared.follows) ? declared.follows : [];
}

/** Build the note's text, or null when there is nothing to declare. */
export function coverageText(viewerApi) {
  if (!viewerApi || typeof viewerApi.coverage !== 'function') return null;
  let declared = null;
  try {
    declared = viewerApi.coverage();
  } catch (error) {
    return null;
  }
  if (!declared || !Array.isArray(declared.doesNotFollow) || !declared.doesNotFollow.length) {
    return null;
  }
  const followed = followedDimensions(declared);
  const follows = followed.length ? list(followed) : 'part of each step';
  return 'Replay follows ' + follows + '. It does not follow '
    + list(declared.doesNotFollow)
    + '. A step that only changes those leaves the 3D view where the previous '
    + 'step put it -- the panel is not stuck, and the tool and arguments beside '
    + 'it are still that step\'s.';
}

/** Where the reader is: the trajectory panel that owns the timeline slider. */
function mountPoint(scope) {
  const doc = scope && scope.document;
  if (!doc || typeof doc.querySelector !== 'function') return null;
  const slider = doc.getElementById('sv-step');
  const section = slider && typeof slider.closest === 'function'
    ? slider.closest('section') : null;
  const controls = doc.querySelector('.timeline-controls');
  if (controls && controls.parentNode) return { parent: controls.parentNode, before: controls };
  if (section) return { parent: section, before: section.firstChild };
  return null;
}

/**
 * Render (or update) the note. Returns the text it rendered, or null.
 * A no-op without a document, so the driver stays testable under node.
 */
export function renderCoverage(viewerApi, scope) {
  const text = coverageText(viewerApi);
  const doc = scope && scope.document;
  if (!doc) return text;
  const existing = doc.getElementById(NOTE_ID);
  if (!text) {
    if (existing) existing.remove();
    return null;
  }
  if (existing) {
    existing.textContent = text;
    return text;
  }
  const where = mountPoint(scope);
  if (!where) return text;
  const note = doc.createElement('p');
  note.id = NOTE_ID;
  note.className = 'replay-coverage';
  note.textContent = text;
  note.style.cssText = 'color:#8b949e;font-size:12.5px;margin:0 0 10px;';
  where.parent.insertBefore(note, where.before);
  return text;
}

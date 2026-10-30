window.SV_BENCHMARK = {
 "metric": "mean answer_score on [0,1], ineligible trials counted zero",
 "denominator": "50 tasks per domain, 250 overall",
 "leaderboard": {
  "run": {
   "set": "ScienceVision",
   "generated": "2026-10-21",
   "sha256": "8d7180f845de676df410c1ac1e5b413a3e37feaa31455c8e4ca71424ad3c0569",
   "viewDigest": "b5fcc3d5d667dff2d7bbbe3036e6265a54e9af160b16428b6539771bd9531843"
  },
  "settings": [
   {
    "key": "cc-3d",
    "metric": "mean@3",
    "note": "Source access: the agent reads the source artifact and writes code to identify objects, compute measurements, or test geometric relations."
   },
   {
    "key": "cc-mcp",
    "metric": "mean@3",
    "note": "The same source access plus the inspection tools: change views, isolate structures, inspect slices, measure geometry."
   },
   {
    "key": "cc-2d-6",
    "metric": "mean@3",
    "note": "Six rendered views, three runs. Evidence has to come from the supplied images."
   }
  ],
  "groups": [
   {
    "key": "closed",
    "label": "Closed-source",
    "models": 5
   },
   {
    "key": "open",
    "label": "Open-source",
    "models": 7
   }
  ],
  "models": [
   {
    "model": "gpt-6-astra",
    "label": "GPT-6 Astra",
    "vendor": "openai",
    "vendorLabel": "OpenAI",
    "group": "closed",
    "source": "same-harness",
    "settings": {
     "cc-3d": {
      "mean": 0.5291,
      "min": 0.5219,
      "max": 0.5359,
      "runs": 3,
      "byDomain": {
       "architecture": 0.457622,
       "biology": 0.62,
       "chemistry": 0.609456,
       "mechanical-cad": 0.579996,
       "medical": 0.378334
      }
     },
     "cc-mcp": {
      "mean": 0.5282,
      "min": 0.5217,
      "max": 0.5344,
      "runs": 3,
      "byDomain": {
       "architecture": 0.435636,
       "biology": 0.677776,
       "chemistry": 0.580568,
       "mechanical-cad": 0.606668,
       "medical": 0.340558
      }
     },
     "cc-2d-6": {
      "mean": 0.2498,
      "runs": 3
     }
    },
    "rank": 1
   },
   {
    "model": "gpt-6.1-sol",
    "label": "GPT-6.1 Sol",
    "vendor": "openai",
    "vendorLabel": "OpenAI",
    "group": "closed",
    "source": "same-harness",
    "settings": {
     "cc-3d": {
      "mean": 0.4893,
      "min": 0.4785,
      "max": 0.4965,
      "runs": 3,
      "byDomain": {
       "architecture": 0.413176,
       "biology": 0.6,
       "chemistry": 0.600568,
       "mechanical-cad": 0.5,
       "medical": 0.332778
      }
     },
     "cc-mcp": {
      "mean": 0.511,
      "min": 0.498,
      "max": 0.5232,
      "runs": 3,
      "byDomain": {
       "architecture": 0.42113,
       "biology": 0.666668,
       "chemistry": 0.59112,
       "mechanical-cad": 0.54,
       "medical": 0.336112
      }
     },
     "cc-2d-6": {
      "mean": 0.2044,
      "runs": 3
     }
    },
    "rank": 2
   },
   {
    "model": "claude-fable-5-1",
    "label": "Claude Fable 5.1",
    "vendor": "anthropic",
    "vendorLabel": "Anthropic",
    "group": "closed",
    "source": "cross-source",
    "settings": {
     "cc-3d": {
      "mean": 0.4619,
      "min": 0.4443,
      "max": 0.4817,
      "runs": 3,
      "byDomain": {
       "architecture": 0.416112,
       "biology": 0.650002,
       "chemistry": 0.557228,
       "mechanical-cad": 0.359998,
       "medical": 0.326116
      }
     },
     "cc-mcp": {
      "mean": 0.4631,
      "min": 0.4447,
      "max": 0.4756,
      "runs": 3,
      "byDomain": {
       "architecture": 0.424256,
       "biology": 0.698888,
       "chemistry": 0.529454,
       "mechanical-cad": 0.353332,
       "medical": 0.309446
      }
     },
     "cc-2d-6": {
      "mean": 0.2965,
      "runs": 3
     }
    },
    "rank": 3
   },
   {
    "model": "claude-opus-5-5",
    "label": "Claude Opus 5.5",
    "vendor": "anthropic",
    "vendorLabel": "Anthropic",
    "group": "closed",
    "source": "cross-source",
    "settings": {
     "cc-3d": {
      "mean": 0.4539,
      "min": 0.4433,
      "max": 0.4623,
      "runs": 3,
      "byDomain": {
       "architecture": 0.428334,
       "biology": 0.617778,
       "chemistry": 0.563902,
       "mechanical-cad": 0.26,
       "medical": 0.399444
      }
     },
     "cc-mcp": {
      "mean": 0.4343,
      "min": 0.4298,
      "max": 0.4373,
      "runs": 3,
      "byDomain": {
       "architecture": 0.425028,
       "biology": 0.62111,
       "chemistry": 0.546676,
       "mechanical-cad": 0.233332,
       "medical": 0.345556
      }
     },
     "cc-2d-6": {
      "mean": 0.2383,
      "runs": 3
     }
    },
    "rank": 4
   },
   {
    "model": "gemini-4-argon",
    "label": "Gemini 4 Argon",
    "vendor": "google",
    "vendorLabel": "Google",
    "group": "closed",
    "source": "cross-source",
    "settings": {
     "cc-3d": {
      "mean": 0.4278,
      "min": 0.4213,
      "max": 0.6218,
      "runs": 3,
      "byDomain": {
       "architecture": 0.363832,
       "biology": 0.516668,
       "chemistry": 0.581118,
       "mechanical-cad": 0.32,
       "medical": 0.357222
      }
     },
     "cc-mcp": {
      "mean": 0.4321,
      "min": 0.4203,
      "max": 0.6229,
      "runs": 3,
      "byDomain": {
       "architecture": 0.394168,
       "biology": 0.545,
       "chemistry": 0.563896,
       "mechanical-cad": 0.320002,
       "medical": 0.337222
      }
     },
     "cc-2d-6": {
      "mean": 0.1462,
      "runs": 3
     }
    },
    "rank": 5
   },
   {
    "model": "qwen3.8-max-0902",
    "label": "Qwen3.8 Max 0902",
    "vendor": "alibaba",
    "vendorLabel": "Alibaba",
    "group": "open",
    "source": "cross-source",
    "settings": {
     "cc-3d": {
      "mean": 0.383,
      "min": 0.3783,
      "max": 0.3909,
      "runs": 3,
      "byDomain": {
       "architecture": 0.271508,
       "biology": 0.593332,
       "chemistry": 0.502784,
       "mechanical-cad": 0.22,
       "medical": 0.327224
      }
     },
     "cc-mcp": {
      "mean": 0.3736,
      "min": 0.372,
      "max": 0.3749,
      "runs": 3,
      "byDomain": {
       "architecture": 0.248026,
       "biology": 0.62889,
       "chemistry": 0.430006,
       "mechanical-cad": 0.213332,
       "medical": 0.347778
      }
     },
     "cc-2d-6": {
      "mean": 0.245,
      "runs": 3
     }
    },
    "rank": 6
   },
   {
    "model": "qwen3.8-flash",
    "label": "Qwen3.8 Flash",
    "vendor": "alibaba",
    "vendorLabel": "Alibaba",
    "group": "open",
    "source": "cross-source",
    "settings": {
     "cc-3d": {
      "mean": 0.3616,
      "min": 0.3492,
      "max": 0.3721,
      "runs": 3,
      "byDomain": {
       "architecture": 0.295914,
       "biology": 0.57889,
       "chemistry": 0.499454,
       "mechanical-cad": 0.11333,
       "medical": 0.320556
      }
     },
     "cc-mcp": {
      "mean": 0.3681,
      "min": 0.3474,
      "max": 0.3829,
      "runs": 3,
      "byDomain": {
       "architecture": 0.324236,
       "biology": 0.602224,
       "chemistry": 0.4389,
       "mechanical-cad": 0.126664,
       "medical": 0.348332
      }
     },
     "cc-2d-6": {
      "mean": 0.2468,
      "runs": 3
     }
    },
    "rank": 7
   },
   {
    "model": "kimi-k3",
    "label": "Kimi K3",
    "vendor": "moonshot",
    "vendorLabel": "Moonshot AI",
    "group": "open",
    "source": "cross-source",
    "settings": {
     "cc-3d": {
      "mean": 0.3609,
      "min": 0.3534,
      "max": 0.3708,
      "runs": 3,
      "byDomain": {
       "architecture": 0.27438,
       "biology": 0.551114,
       "chemistry": 0.499458,
       "mechanical-cad": 0.186668,
       "medical": 0.29278
      }
     },
     "cc-mcp": {
      "mean": 0.3369,
      "min": 0.3269,
      "max": 0.343,
      "runs": 3,
      "byDomain": {
       "architecture": 0.302338,
       "biology": 0.572224,
       "chemistry": 0.431118,
       "mechanical-cad": 0.146666,
       "medical": 0.232222
      }
     },
     "cc-2d-6": {
      "mean": 0.2148,
      "runs": 3
     }
    },
    "rank": 8
   },
   {
    "model": "glm-5.3-flash",
    "label": "GLM-5.3 Flash",
    "vendor": "zhipu",
    "vendorLabel": "Zhipu AI",
    "group": "open",
    "source": "same-harness",
    "settings": {
     "cc-3d": {
      "mean": 0.2846,
      "min": 0.2741,
      "max": 0.2929,
      "runs": 3,
      "byDomain": {
       "architecture": 0.217842,
       "biology": 0.455552,
       "chemistry": 0.43611,
       "mechanical-cad": 0.119994,
       "medical": 0.193334
      }
     },
     "cc-mcp": {
      "mean": 0.2858,
      "min": 0.2778,
      "max": 0.2922,
      "runs": 3,
      "byDomain": {
       "architecture": 0.221732,
       "biology": 0.46111,
       "chemistry": 0.448898,
       "mechanical-cad": 0.066662,
       "medical": 0.230554
      }
     },
     "cc-2d-6": {
      "mean": 0.1521,
      "runs": 3
     }
    },
    "rank": 9
   },
   {
    "model": "deepseek-v4-flash",
    "label": "DeepSeek V4 Flash",
    "vendor": "deepseek",
    "vendorLabel": "DeepSeek",
    "group": "open",
    "source": "same-harness",
    "settings": {
     "cc-3d": {
      "mean": 0.2652,
      "min": 0.2425,
      "max": 0.2827,
      "runs": 3,
      "byDomain": {
       "architecture": 0.200786,
       "biology": 0.451112,
       "chemistry": 0.410554,
       "mechanical-cad": 0.093332,
       "medical": 0.169996
      }
     },
     "cc-mcp": {
      "mean": 0.2678,
      "min": 0.2492,
      "max": 0.2875,
      "runs": 3,
      "byDomain": {
       "architecture": 0.16467,
       "biology": 0.45222,
       "chemistry": 0.406106,
       "mechanical-cad": 0.12666,
       "medical": 0.189444
      }
     },
     "cc-2d-6": {
      "mean": 0.1661,
      "runs": 3
     }
    },
    "rank": 10
   },
   {
    "model": "doubao-seed-evolving",
    "label": "Doubao Seed Evolving",
    "vendor": "bytedance",
    "vendorLabel": "ByteDance",
    "group": "open",
    "source": "same-harness",
    "settings": {
     "cc-3d": {
      "mean": 0.2435,
      "min": 0.2226,
      "max": 0.2592,
      "runs": 3,
      "byDomain": {
       "architecture": 0.158192,
       "biology": 0.392222,
       "chemistry": 0.32222,
       "mechanical-cad": 0.12,
       "medical": 0.225
      }
     },
     "cc-mcp": {
      "mean": 0.2527,
      "min": 0.2386,
      "max": 0.2645,
      "runs": 3,
      "byDomain": {
       "architecture": 0.175146,
       "biology": 0.391112,
       "chemistry": 0.360556,
       "mechanical-cad": 0.13333,
       "medical": 0.203334
      }
     },
     "cc-2d-6": {
      "mean": 0.1102,
      "runs": 3
     }
    },
    "rank": 11
   },
   {
    "model": "hy4-preview",
    "label": "Hunyuan-4 Preview",
    "vendor": "tencent",
    "vendorLabel": "Tencent",
    "group": "open",
    "source": "same-harness",
    "settings": {
     "cc-3d": {
      "mean": 0.1598,
      "min": 0.1403,
      "max": 0.177,
      "runs": 3,
      "byDomain": {
       "architecture": 0.095476,
       "biology": 0.306664,
       "chemistry": 0.241664,
       "mechanical-cad": 0.073334,
       "medical": 0.081666
      }
     },
     "cc-mcp": {
      "mean": 0.1738,
      "min": 0.166,
      "max": 0.1839,
      "runs": 3,
      "byDomain": {
       "architecture": 0.086958,
       "biology": 0.407778,
       "chemistry": 0.268326,
       "mechanical-cad": 0.039998,
       "medical": 0.066112
      }
     },
     "cc-2d-6": {
      "mean": 0.0824,
      "runs": 3
     }
    },
    "rank": 12
   }
  ]
 },
 "comparison": {
  "columns": [
   "Cross-domain science",
   "QA focus",
   "Visual interaction",
   "Static-image QA",
   "Deterministic scoring"
  ],
  "rows": [
   {
    "name": "DeepTumorVQA",
    "ours": false,
    "marks": [
     "no",
     "yes",
     "yes",
     "yes",
     "yes"
    ]
   },
   {
    "name": "ProtStructQA",
    "ours": false,
    "marks": [
     "no",
     "yes",
     "no",
     "no",
     "yes"
    ]
   },
   {
    "name": "OmniCAD",
    "ours": false,
    "marks": [
     "no",
     "no",
     "yes",
     "no",
     "yes"
    ]
   },
   {
    "name": "SciVisAgentBench",
    "ours": false,
    "marks": [
     "yes",
     "partial",
     "yes",
     "no",
     "partial"
    ]
   },
   {
    "name": "GLUE3D",
    "ours": false,
    "marks": [
     "no",
     "yes",
     "no",
     "yes",
     "partial"
    ]
   },
   {
    "name": "ScienceVision (ours)",
    "ours": true,
    "marks": [
     "yes",
     "yes",
     "yes",
     "yes",
     "yes"
    ]
   }
  ]
 },
 "domains": [
  {
   "key": "architecture",
   "label": "Architecture"
  },
  {
   "key": "biology",
   "label": "Biology"
  },
  {
   "key": "chemistry",
   "label": "Chemistry"
  },
  {
   "key": "mechanical-cad",
   "label": "Mechanical CAD"
  },
  {
   "key": "medical",
   "label": "Medical imaging"
  }
 ],
 "settings": [
  {
   "key": "cc-3d",
   "label": "Source access",
   "note": "The agent reads the source artifact and writes code to identify objects, compute measurements, or test geometric relations."
  },
  {
   "key": "cc-mcp",
   "label": "Source access + inspection tools",
   "note": "The same source access, plus human-oriented interfaces: change views, isolate structures, inspect slices, measure geometry."
  },
  {
   "key": "cc-2d-6",
   "label": "Six rendered views",
   "note": "Fixed 2D renderings of the source. Evidence has to come from the supplied images."
  }
 ],
 "models": [
  {
   "key": "gpt-6-astra",
   "label": "GPT-6 Astra",
   "harness": "Codex",
   "vendor": "openai"
  },
  {
   "key": "gpt-6.1-sol",
   "label": "GPT-6.1 Sol",
   "harness": "Codex",
   "vendor": "openai"
  },
  {
   "key": "claude-opus-5-5",
   "label": "Claude Opus 5.5",
   "harness": "Claude Code",
   "vendor": "anthropic"
  }
 ],
 "results": {
  "cc-3d": {
   "gpt-6-astra": {
    "architecture": 0.1392,
    "biology": 0.52,
    "chemistry": 0.5017,
    "mechanical-cad": 0.436,
    "medical": 0.09,
    "ALL": 0.3374
   },
   "gpt-6.1-sol": {
    "architecture": 0.1343,
    "biology": 0.52,
    "chemistry": 0.4733,
    "mechanical-cad": 0.28,
    "medical": 0.07,
    "ALL": 0.2955
   },
   "claude-opus-5-5": {
    "architecture": 0.1423,
    "biology": 0.55,
    "chemistry": 0.53,
    "mechanical-cad": 0.16,
    "medical": 0.11,
    "ALL": 0.2985
   }
  },
  "cc-mcp": {
   "gpt-6-astra": {
    "architecture": 0.131,
    "biology": 0.55,
    "chemistry": 0.45,
    "mechanical-cad": 0.42,
    "medical": 0.07,
    "ALL": 0.3242
   },
   "gpt-6.1-sol": {
    "architecture": 0.1333,
    "biology": 0.53,
    "chemistry": 0.4833,
    "mechanical-cad": 0.32,
    "medical": 0.07,
    "ALL": 0.3073
   },
   "claude-opus-5-5": {
    "architecture": 0.1635,
    "biology": 0.5333,
    "chemistry": 0.465,
    "mechanical-cad": 0.1,
    "medical": 0.11,
    "ALL": 0.2744
   }
  },
  "cc-2d-6": {
   "gpt-6-astra": {
    "architecture": 0.0747,
    "biology": 0.22,
    "chemistry": 0.14,
    "mechanical-cad": 0.24,
    "medical": 0.21,
    "ALL": 0.1769
   },
   "gpt-6.1-sol": {
    "architecture": 0.0714,
    "biology": 0.21,
    "chemistry": 0.1267,
    "mechanical-cad": 0.24,
    "medical": 0.15,
    "ALL": 0.1596
   },
   "claude-opus-5-5": {
    "architecture": 0.1117,
    "biology": 0.2333,
    "chemistry": 0.225,
    "mechanical-cad": 0.18,
    "medical": 0.07,
    "ALL": 0.164
   }
  }
 },
 "subdomains": [
  {
   "domain": "architecture",
   "name": "arch_alignment_and_stacking",
   "n": 12,
   "means": {
    "gpt-6-astra": 0.1354,
    "gpt-6.1-sol": 0.1354,
    "claude-opus-5-5": 0.1875
   }
  },
  {
   "domain": "architecture",
   "name": "arch_dimensional_compliance",
   "n": 16,
   "means": {
    "gpt-6-astra": 0.117,
    "gpt-6.1-sol": 0.1259,
    "claude-opus-5-5": 0.1326
   }
  },
  {
   "domain": "architecture",
   "name": "arch_interference_and_clearance",
   "n": 12,
   "means": {
    "gpt-6-astra": 0.1729,
    "gpt-6.1-sol": 0.1556,
    "claude-opus-5-5": 0.1729
   }
  },
  {
   "domain": "architecture",
   "name": "arch_object_geometry_readings",
   "n": 10,
   "means": {
    "gpt-6-astra": 0.1183,
    "gpt-6.1-sol": 0.1183,
    "claude-opus-5-5": 0.12
   }
  },
  {
   "domain": "biology",
   "name": "bio_interaction_typing",
   "n": 8,
   "means": {
    "gpt-6-astra": 0.8125,
    "gpt-6.1-sol": 0.75,
    "claude-opus-5-5": 0.8125
   }
  },
  {
   "domain": "biology",
   "name": "bio_molecular_contact",
   "n": 14,
   "means": {
    "gpt-6-astra": 0.8571,
    "gpt-6.1-sol": 0.7857,
    "claude-opus-5-5": 0.7857
   }
  },
  {
   "domain": "biology",
   "name": "bio_occluded_target_geometry",
   "n": 6,
   "means": {
    "gpt-6-astra": 0.0,
    "gpt-6.1-sol": 0.0833,
    "claude-opus-5-5": 0.1389
   }
  },
  {
   "domain": "biology",
   "name": "bio_proximity_choice",
   "n": 8,
   "means": {
    "gpt-6-astra": 0.5,
    "gpt-6.1-sol": 0.5,
    "claude-opus-5-5": 0.5625
   }
  },
  {
   "domain": "biology",
   "name": "bio_spatial_arrangement",
   "n": 14,
   "means": {
    "gpt-6-astra": 0.3036,
    "gpt-6.1-sol": 0.3393,
    "claude-opus-5-5": 0.3036
   }
  },
  {
   "domain": "chemistry",
   "name": "chem_conformation_occlusion",
   "n": 21,
   "means": {
    "gpt-6-astra": 0.6052,
    "gpt-6.1-sol": 0.5635,
    "claude-opus-5-5": 0.5516
   }
  },
  {
   "domain": "chemistry",
   "name": "chem_crystal_periodicity",
   "n": 4,
   "means": {
    "gpt-6-astra": 0.75,
    "gpt-6.1-sol": 0.7917,
    "claude-opus-5-5": 0.75
   }
  },
  {
   "domain": "chemistry",
   "name": "chem_dihedral_measurement",
   "n": 9,
   "means": {
    "gpt-6-astra": 0.25,
    "gpt-6.1-sol": 0.3056,
    "claude-opus-5-5": 0.3056
   }
  },
  {
   "domain": "chemistry",
   "name": "chem_hybridization_state",
   "n": 7,
   "means": {
    "gpt-6-astra": 0.4286,
    "gpt-6.1-sol": 0.4286,
    "claude-opus-5-5": 0.7619
   }
  },
  {
   "domain": "chemistry",
   "name": "chem_molecular_extent",
   "n": 9,
   "means": {
    "gpt-6-astra": 0.3148,
    "gpt-6.1-sol": 0.3519,
    "claude-opus-5-5": 0.2454
   }
  },
  {
   "domain": "mechanical-cad",
   "name": "cad_assembly_composition_count",
   "n": 10,
   "means": {
    "gpt-6-astra": 0.3,
    "gpt-6.1-sol": 0.2,
    "claude-opus-5-5": 0.1
   }
  },
  {
   "domain": "mechanical-cad",
   "name": "cad_mechanism_motion",
   "n": 6,
   "means": {
    "gpt-6-astra": 0.15,
    "gpt-6.1-sol": 0.1667,
    "claude-opus-5-5": 0.25
   }
  },
  {
   "domain": "mechanical-cad",
   "name": "cad_part_instance_count",
   "n": 20,
   "means": {
    "gpt-6-astra": 0.6,
    "gpt-6.1-sol": 0.3,
    "claude-opus-5-5": 0.0
   }
  },
  {
   "domain": "mechanical-cad",
   "name": "cad_part_property_identification",
   "n": 14,
   "means": {
    "gpt-6-astra": 0.3929,
    "gpt-6.1-sol": 0.4286,
    "claude-opus-5-5": 0.2857
   }
  },
  {
   "domain": "medical",
   "name": "med_anatomy_pointing",
   "n": 5,
   "means": {
    "gpt-6-astra": 0.0,
    "gpt-6.1-sol": 0.1,
    "claude-opus-5-5": 0.0
   }
  },
  {
   "domain": "medical",
   "name": "med_geometry_measurement",
   "n": 8,
   "means": {
    "gpt-6-astra": 0.0,
    "gpt-6.1-sol": 0.0,
    "claude-opus-5-5": 0.0
   }
  },
  {
   "domain": "medical",
   "name": "med_lesion_pointing",
   "n": 25,
   "means": {
    "gpt-6-astra": 0.1,
    "gpt-6.1-sol": 0.1,
    "claude-opus-5-5": 0.08
   }
  },
  {
   "domain": "medical",
   "name": "med_slice_comparison",
   "n": 12,
   "means": {
    "gpt-6-astra": 0.125,
    "gpt-6.1-sol": 0.0417,
    "claude-opus-5-5": 0.2917
   }
  }
 ],
 "answerFields": {
  "values": [
   1,
   2,
   3,
   4,
   5,
   6,
   7,
   9
  ],
  "counts": [
   143,
   35,
   45,
   11,
   5,
   8,
   2,
   1
  ],
  "single": 143,
  "multi": 107,
  "mean": 1.95,
  "singleByDomain": {
   "architecture": 6,
   "biology": 36,
   "chemistry": 12,
   "mechanical-cad": 50,
   "medical": 39
  }
 },
 "classMix": {
  "architecture": {
   "measurement": 45,
   "mixed": 1,
   "identification": 4
  },
  "biology": {
   "measurement": 34,
   "mixed": 3,
   "identification": 13
  },
  "chemistry": {
   "measurement": 20,
   "mixed": 29,
   "identification": 1
  },
  "mechanical-cad": {
   "measurement": 34,
   "mixed": 0,
   "identification": 16
  },
  "medical": {
   "measurement": 46,
   "mixed": 2,
   "identification": 2
  },
  "ALL": {
   "measurement": 179,
   "mixed": 35,
   "identification": 36
  }
 },
 "toolUse": {
  "n": 250,
  "any_tool": 173,
  "called": 83,
  "numbers_only": 135,
  "both": 40
 }
};

window.SV_VIEWER_CASES = {
  "version": "9a056624",
  "cases": [
    {
      "discipline": "Architecture",
      "task": "arch-rhl-access-al116-m07-ramp-run-between-decks",
      "viewer": "gltf.html",
      "url": "/sciencevision/viewer/9a056624/gltf.html?file=%2Fstatic%2Fsciencevision%2Fdemo%2F9a056624%2Farchitecture%2FM07_ramp_run_between_decks.glb&embed=blog",
      "poster": "/static/sciencevision/assets/traj/arch-rhl-access-al116-m07-ramp-run-between-decks/017.jpg",
      "posterAlt": "Isometric view of the ramp model with slope and run measurements overlaid.",
      "caption": "Tracing an inclined ramp run against paired slope-and-rise limits, then reading the member that carries it.",
      "questionHtml": "<p>The constraints on a ramp do not depend solely on its slope. Every compliant ramp standard pairs each slope with a corresponding rise, because the steeper the ramp run, the shorter the permitted travel distance before a level landing is required. The restriction is therefore a combination of slope ratio and run length; checking either one in isolation is meaningless. On drawings, this pairing is not visible. In plan, the ramp appears as a continuous strip with arrows, and the reader cannot reliably determine where one run ends and the next begins because these surfaces are modeled as multiple objects and exported repeatedly. In section, a ramp run appears as a single line from one elevation to another, while the intermediate connection points that determine whether a landing is required are precisely what that line conceals; the ramp slope, width, and turning radius are also often omitted. Only the model itself can reveal how many runs the ramp contains and whether any run exceeds the maximum permitted length for its slope under the applicable code.</p>\n<p>Object: the continuous ramp between the two parking levels of this building, together with the two level surfaces it connects.</p>\n<p>Question: This ramp provides the accessible route between the two parking levels of the building, climbing from the lower level to the upper level. Determine how many inclined ramp runs it consists of, whether any run has a rise that exceeds the maximum permitted rise for a single ramp run under the applicable code, and whether that run is interrupted midway by a landing. Also determine whether the ramp width, slope, or turning radius violates the relevant requirements. Report your conclusion (verdict), the ramp run(s) on which the conclusion is based (located), and the applicable provision (cited_clause). Do not report elevation differences or slopes numerically.</p>\n<p>Known conditions: The scene represents a continuous ramp connecting two parking levels in a public building in mainland China, together with the two floors it connects. The accessible route between these two levels is being evaluated under the applicable national accessibility design standard, and this ramp is the path used for that route. This task does not specify the exact applicable clause or the prescribed limit values; both must be determined based on the actual project conditions. The ramp is constructed from a series of inclined surfaces. These are separate selectable objects and have been modeled multiple times, so the number of objects under the ramp category does not equal the number of ramp runs. Determine the number and extents of the ramp runs from their geometry rather than from object counts or type names. The slope of a ramp run is the ratio of its vertical rise to its horizontal length, measured along the longitudinal direction of the travel surface within the plane of that surface. Do not derive the slope from the solid’s bounding-box extents, whose diagonal is steeper than any actual built element, and do not use chord length on a curved planar surface. The ramp runs are separated by landings. Determine from the model where the ramp’s level surfaces are located and whether any of them occur between the two connected elevations, rather than only at the ends. Report your conclusion, the run(s) on which it is based, and the applicable clause. Do not report elevation differences or slopes numerically.</p>\n<p>Measurement convention: Report coordinates and distances in Rhino model space, in millimetres, with the Z axis pointing upward (Z-up). The glTF scene loaded by the viewer uses metres and is Y-up. Convert all points exactly according to:</p>\n<p>rhino_mm = (gltf_x, -gltf_z, gltf_y) * 1000</p>",
      "size": "2.7 MB",
      "bytes": 2748344
    },
    {
      "discipline": "Biology",
      "task": "sv-biol-bio_collision_check-0019",
      "viewer": "molstar.html",
      "url": "/sciencevision/viewer/9a056624/molstar.html?file=%2Fstatic%2Fsciencevision%2Fdemo%2F9a056624%2Fbiology%2F11LB.cif&type=mmcif&embed=blog",
      "poster": "/static/sciencevision/assets/traj/sv-biol-bio_collision_check-0019/000.jpg",
      "posterAlt": "Ribbon view of the protein with the citrate ligand highlighted in orange.",
      "caption": "Isolating a citrate ligand from the solvent and ions around it, then classifying the contacts that hold it against the chain.",
      "questionHtml": "<p>A long chain carrying a citrate ligand dominates this file; a single sodium ion, a few glycerol and ethylene-glycol molecules and some acetate are the only other guests. The citrate is <code>residue FLC 712 in chain A</code>, and it is pressed against the chain it belongs to.</p>\n<p>Read model 0, keep the highest-occupancy alternate location wherever an atom is split, and leave hydrogens and solvent out. Three heavy-atom tests decide the interactions: metal_coordination when a metal ion lies within 2.8 Å of an N, O or S atom; hydrogen_bond when an N or O of one side lies within 3.5 Å of an N or O of the other; hydrophobic_contact when a carbon of one side lies within 4.0 Å of a carbon of the other.</p>\n<p>Which of the three are present between that citrate and chain A? Give them alphabetically, and return an empty list if none is.</p>",
      "size": "1.2 MB",
      "bytes": 1217553
    },
    {
      "discipline": "Chemistry",
      "task": "asset-24ac9048bb9f-crystallography-packing",
      "viewer": "molstar.html",
      "url": "/sciencevision/viewer/9a056624/molstar.html?file=%2Fstatic%2Fsciencevision%2Fdemo%2F9a056624%2Fchemistry%2Fsv3dqa_24ac9048bb9f.cif&type=cif&embed=blog",
      "poster": "/static/sciencevision/assets/traj/asset-24ac9048bb9f-crystallography-packing/004.jpg",
      "posterAlt": "Unit-cell wireframe with the molecular packing repeated across it.",
      "caption": "Reading the unit cell, then using the symmetry operation to see how the packing repeats.",
      "questionHtml": "<p><strong>1. Determine the crystal system of the unit cell.</strong></p>\n<p>Use the unit-cell edge lengths and angles reported by the viewer, according to the following rules:</p>\n<ul>\n<li>all three edges equal, with all three angles equal but not 90°: rhombohedral</li>\n<li>all three edges equal, with all three angles equal to 90°: cubic</li>\n<li>exactly two edges equal, with the angle between those two edges equal to 120°: hexagonal</li>\n<li>exactly two edges equal, with all three angles equal to 90°: tetragonal</li>\n<li>all three edges unequal, with all three angles equal to 90°: orthorhombic</li>\n<li>exactly one angle not equal to 90°: monoclinic</li>\n<li>otherwise: triclinic</li>\n</ul>\n<p>Use the numerical unit-cell angles reported by the viewer rather than estimating angles from the rendered wireframe. Under perspective projection, the displayed line lengths and angles do not directly represent the true unit-cell parameters.</p>\n<p><strong>2. Determine how many molecules of the compound are contained in one unit cell.</strong></p>\n<p>Count the complete molecules formed by all symmetry-related copies within the unit-cell wireframe, rather than the number of atoms in the asymmetric unit. If the asymmetric unit itself contains one complete molecule, this count is equal to the number of symmetry-related molecular copies filling one unit cell.</p>\n<p><strong>3. Starting from the initial unit-cell view, zoom in to 1.5× while keeping the camera orientation and target unchanged.</strong></p>\n<p>In the resulting view, identify all atoms occluded by atom N1 of instance 4. Among those atoms, select the one whose atomic centre is closest to the camera.</p>\n<p>The value of this field must be written exactly in the form:</p>\n<p>instance &lt;x&gt; &lt;atom_name&gt;</p>",
      "size": "5 KB",
      "bytes": 5375
    },
    {
      "discipline": "Mechanical CAD",
      "task": "hard-045",
      "viewer": "occt.html",
      "url": "/sciencevision/viewer/9a056624/occt.html?file=%2Fstatic%2Fsciencevision%2Fdemo%2F9a056624%2Fmechanical-cad%2Fassembly.step&embed=blog",
      "poster": "/static/sciencevision/assets/traj/hard-045/020.jpg",
      "posterAlt": "Isometric view of the forklift assembly with the repeated component highlighted.",
      "caption": "Orbiting the assembly, then separating repeated instances to count how many share one component design.",
      "questionHtml": "<p>In the forklift with overhead guard, one component design is instantiated more often than any other (identical shape, different colors mark separate instances). How many instances of that component are there? Give the integer first.</p>",
      "size": "3.0 MB",
      "bytes": 3008507
    },
    {
      "discipline": "Medical imaging",
      "task": "sv-medi-med_ct_geometry-0014",
      "viewer": "niivue.html",
      "url": "/sciencevision/viewer/9a056624/niivue.html?file=%2Fstatic%2Fsciencevision%2Fdemo%2F9a056624%2Fmedical%2Fct.nii.gz&overlay=%2Fstatic%2Fsciencevision%2Fdemo%2F9a056624%2Fmedical%2Fmask.nii.gz&embed=blog",
      "poster": "/static/sciencevision/assets/traj/sv-medi-med_ct_geometry-0014/004.jpg",
      "posterAlt": "Three orthogonal CT planes with the segmented renal lesion highlighted.",
      "caption": "Reading a renal lesion across three orthogonal planes, then converting its corners to voxel indices and millimetres.",
      "questionHtml": "<p>A contrast-enhanced CT of the upper abdomen is open in the viewer, with a small rounded focus of near-fluid density sitting in the upper pole of one kidney. The target is the region carrying mask label 3 in the segmentation supplied alongside the volume.</p>\n<p>Report the far corner of the target region in stored voxel indices, the region&#x27;s extent along each of the three stored axes, and the left-to-right offset of the region&#x27;s centroid from the mid-sagittal midline of the volume in millimetres. A centroid in voxel units is the average position of the region&#x27;s voxels, a fractional position between voxel centres rather than a voxel index, and it lies inside the bounding box. Take the offset as signed: read the sign from the viewer&#x27;s own left and right orientation markers rather than from where the region happens to sit on screen.</p>\n<p>Voxel indices count from zero and both corners are inclusive, so each corner index is itself a voxel of the target region and an extent along an axis is the difference between its two bound indices plus one. No reported value carries more than six decimal places.</p>",
      "size": "61.1 MB",
      "bytes": 61139188
    }
  ]
};

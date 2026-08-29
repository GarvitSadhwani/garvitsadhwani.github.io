# Writing images

Drop images for the Writings section here.

Reference them from `src/data/writings.js` by file name only:

- Cover:  `cover: 'fraud-graph/cover.jpg'`  (subfolders allowed)
- Inline: `{ type: 'image', src: 'fraud-graph/model.jpg', caption: '...' }`

Both resolve to `/writings/<name>` at build time. Missing images are hidden
automatically, so it's safe to reference a file before you've added it.

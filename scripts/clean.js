const fs = require('fs')
const path = require('path')
const dirs = ['.next', path.join('node_modules', '.cache')]
dirs.forEach((d) => {
  const full = path.join(process.cwd(), d)
  try {
    fs.rmSync(full, { recursive: true })
    console.log('Removed', d)
  } catch (e) {
    if (e.code !== 'ENOENT') throw e
  }
})

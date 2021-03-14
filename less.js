const fs = require('fs')
const path = require('path')

if (fs.existsSync(path.join(__dirname, './dist'))) {
  const componentsPath = path.join(process.cwd(), 'src/components')
  let componentsLessContent = ''
  // Build components in one file: dist/index.less
  fs.readdir(componentsPath, (err, files) => {
    files.forEach(file => {
      if (fs.existsSync(path.join(componentsPath, file, `${file}.less`))) {
        componentsLessContent += `@import "./${path.join(
          'components',
          `${file}.less`
        )}";\n`
      }
    })
    fs.writeFileSync(
      path.join(process.cwd(), 'dist', 'index.less'),
      componentsLessContent
    )
  })
}

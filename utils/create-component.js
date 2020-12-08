require('colors')
const fs = require('fs')
const templates = require('./templates')
const componentArgument = process.argv[2]
const { components: componentsDirectory } = require('../package.json')

if (!componentArgument) {
  console.error('Please supply a valid component name'.red)
  process.exit(1)
}

const componentName =
  componentArgument[0].toUpperCase() + componentArgument.slice(1)

console.log('Creating Component Templates with name: ' + componentName)

!fs.existsSync(componentsDirectory) && fs.mkdirSync(componentsDirectory)

const componentDirectory = `${componentsDirectory}/${componentName}`

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red)
  process.exit(1)
}

fs.mkdirSync(componentDirectory)

templates.forEach(template => {
  const { content, extension } = template(componentName)
  const filePath = extension.startsWith('.')
    ? `${componentDirectory}/${componentName}${extension}`
    : `${componentDirectory}/${extension}`

  fs.writeFileSync(filePath, content)
})

console.log('Successfully created component under: ' + componentDirectory.green)

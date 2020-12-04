require('colors')
const fs = require('fs')
const templates = require('./templates')

const componentArgument = process.argv[2]

if (!componentArgument) {
  console.error('Please supply a valid component name'.red)
  process.exit(1)
}

const componentName =
  componentArgument[0].toUppercase() + componentArgument.slice(1)

console.log('Creating Component Templates with name: ' + componentName)

const componentDirectory = `./src/${componentName}`

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red)
  process.exit(1)
}

fs.mkdirSync(componentDirectory)

templates.forEach(template => {
  const { content, extension } = template(componentName)

  fs.writeFileSync(
    `${componentDirectory}/${componentName}${extension}`,
    content
  )
})

console.log('Successfully created component under: ' + componentDirectory.green)

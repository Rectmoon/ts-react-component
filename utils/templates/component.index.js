module.exports = componentName => ({
  content: `
import ${componentName} from './${componentName}'

export * from './${componentName}.types'

export default ${componentName}
`,
  extension: `index.ts`
})

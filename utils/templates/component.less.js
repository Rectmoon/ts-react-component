module.exports = componentName => ({
  content: `
@import "../../variables.less";
@import "../../typography.less";

.foo-bar {
  .font-defaults();

  color: @harvey-green;
}
`,
  extension: `.less`
})

module.exports = (api, opts, rootOpts) => {
  api.render({
    './.editorconfig': './templates/_editorconfig'
  })
}
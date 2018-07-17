module.exports = (api, opts, rootOpts) => {
  if (opts.configType == 'basic') {
    api.render({'./.editorconfig': './templates/basic/_editorconfig'}, opts)
  }

  if (opts.configType == 'advanced') {
    api.render({'./.editorconfig': './templates/advanced/_editorconfig'}, opts)
  }
}
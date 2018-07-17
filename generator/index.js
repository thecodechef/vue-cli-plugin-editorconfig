module.exports = (api, opts, rootOpts) => {
  try {
    api.render({
      './.editorconfig': './templates/_editorconfig'
    }, opts);
  } catch(e) {
    console.log(e);
  }
}
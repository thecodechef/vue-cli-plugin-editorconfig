module.exports = {
  dest: 'public',
  title: 'VuePress',
  description: 'A Test Documentation',
  docsDir: 'docs',
  docsBranch: 'pages',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
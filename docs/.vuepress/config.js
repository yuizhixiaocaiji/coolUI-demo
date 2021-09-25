module.exports = {
  base: '/greatUI-demo/',
  title: 'greatUI',
  description: '一款简洁高效棒棒哒UI框架',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: 'GitHub', link: 'https://github.com/yuizhixiaocaiji/greatUI-demo' },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/tabs',
          '/components/popover',
          '/components/toast',
          '/components/collapse',
        ],
      }
    ],
  }
}
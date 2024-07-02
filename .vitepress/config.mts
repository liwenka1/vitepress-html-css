import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HTML&CSS",
  description: "一本 HTML&CSS 的书籍",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'HTML', link: '/html/markdown-examples' },
      { text: 'CSS', link: '/css/markdown-examples' },
      { text: 'Examples', link: '/example/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/example/markdown-examples' },
          { text: 'Runtime API Examples', link: '/example/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/liwenka1' }
    ]
  }
})

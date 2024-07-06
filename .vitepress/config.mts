import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'HTML&CSS',
  description: '一本 HTML&CSS 的书籍',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        items: [{ text: '简介', link: '/about' }]
      },
      {
        text: 'HTML',
        items: [{ text: 'html example', link: '/html/html-example' }]
      },
      {
        text: 'CSS',
        items: [{ text: 'css example', link: '/css/css-example' }]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/liwenka1' }]
  }
})

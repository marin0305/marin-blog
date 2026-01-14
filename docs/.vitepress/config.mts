import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "瑪奇朵的個人空間",
  description: "隨筆紀錄",
  base: '/',
  srcDir: 'docs',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '主頁', link: '/' },
      { text: '文章', link: '/v2rayn-howto' }
    ],

    sidebar: [
      {
        // text: '文章',
        items: [
          { text: 'v2rayN分流配置', link: '/v2rayn-howto'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/marin0305/marin-blog' }
    ]
  }
})

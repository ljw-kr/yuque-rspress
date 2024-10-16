import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  base: "/demo-docs/",
  root: path.join(__dirname, "demo-docs"),
  globalStyles: path.join(__dirname, "styles/index.css"),
  title: "Finovy",
  description: "Rspack-based Static Site Generator",
  icon: "/icon.png",
  logo: {
    light: "/logo_title.png",
    dark: "/logo_title_dark.png",
  },
  themeConfig: {
    socialLinks: [{ icon: "github", mode: "link", content: "https://github.com/finovy" }],
  },
  lang: "zh",
  locales: [
    // {
    //   lang: 'en',
    //   // 导航栏切换语言的标签
    //   label: 'English',
    // },
    {
      lang: "zh",
      // 导航栏切换语言的标签
      label: "简体中文",
    },
  ],
  head: ['<meta name="referrer" content="no-referrer">'],
});

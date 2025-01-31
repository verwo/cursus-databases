import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  plugins: [
    mdEnhancePlugin({
      // your options
      // Enable flowchart
      flowchart: true,
      mermaid: true,
      tex: true,
    }),
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebarDepth: 0,
    shouldPrefetch: true,
    sidebar: [
      // SidebarItem
      {
        text: "01-Intro",
        collapsible: false,
        prefix: '/01-databases/',
        link: '/01-databases/',
        children: ['introduction/', 'sql-language/','mysql-client/','datatypes/'],
      },
      {
        text: "02-Tables",
        collapsible: false,
        prefix: '/02-tables/',
        link: '/02-tables/',
      },
      {
        text: "03-Data",
        collapsible: false,
        prefix: '/03-data/',
        link: '/03-data/',
      },
      {
        text: "04-ER-diagrams",
        collapsible: false,
        prefix: '/04-er-diagrams/',
        link: '/04-er-diagrams/',
        children: ['index.md', 'er-model.md','erd-database.md','normaliseren.md'],
      },
      {
        text: "05-Retreiving data",
        collapsible: false,
        prefix: '/05-retrieving-data/',
        link: '/05-retrieving-data/',
        children: ['retrieving/', 'sorting/','filtering/','calculated-fields/','manipulation/','summarizing/','grouping/'],
      },
      {
        text: "06-Combining data",
        collapsible: false,
        prefix: '/06-combining-data/',
        link: '/06-combining-data/',
      },
      {
        text: "07-Users & privileges",
        collapsible: false,
        prefix: '/07-users-and-privileges/',
        link: '/07-users-and-privileges/',
      },
      {
        text: "08-Passwords",
        collapsible: false,
        prefix: '/08-passwords/',
        link: '/08-passwords/',
      },
      {
        text: "09-Applications",
        collapsible: false,
        prefix: '/09-applications/',
        link: '/09-applications/',
      },
      {
        text: "Exercises",
        collapsible: false,
        prefix: '/exercises/',
        children: ['01-software-installation/', '02-example-databases/'],
      },
    ],
  }),

  lang: 'nl-BE',
  title: 'Cursus databases',
  description: 'Just playing around',
})
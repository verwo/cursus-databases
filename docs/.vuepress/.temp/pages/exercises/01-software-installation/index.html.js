import comp from "/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/exercises/01-software-installation/index.html.vue"
const data = JSON.parse("{\"path\":\"/exercises/01-software-installation/\",\"title\":\"Software\",\"lang\":\"nl-BE\",\"frontmatter\":{\"title\":\"Software\"},\"headers\":[{\"level\":2,\"title\":\"XAMPP\",\"slug\":\"xampp\",\"link\":\"#xampp\",\"children\":[]},{\"level\":2,\"title\":\"MySQL Workbench\",\"slug\":\"mysql-workbench\",\"link\":\"#mysql-workbench\",\"children\":[]},{\"level\":2,\"title\":\"SQLite Browser\",\"slug\":\"sqlite-browser\",\"link\":\"#sqlite-browser\",\"children\":[]},{\"level\":2,\"title\":\"Lucid Chart\",\"slug\":\"lucid-chart\",\"link\":\"#lucid-chart\",\"children\":[{\"level\":3,\"title\":\"GIT\",\"slug\":\"git\",\"link\":\"#git\",\"children\":[]}]},{\"level\":2,\"title\":\"Posh-Git\",\"slug\":\"posh-git\",\"link\":\"#posh-git\",\"children\":[{\"level\":3,\"title\":\"Visual Studio Code\",\"slug\":\"visual-studio-code\",\"link\":\"#visual-studio-code\",\"children\":[]}]}],\"git\":{\"updatedTime\":1738234077000,\"contributors\":[{\"name\":\"verwo\",\"username\":\"verwo\",\"email\":\"wouter_verstraete@hotmail.com\",\"commits\":2,\"url\":\"https://github.com/verwo\"}]},\"filePathRelative\":\"exercises/01-software-installation/index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

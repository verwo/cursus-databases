import comp from "/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/09-applications/index.html.vue"
const data = JSON.parse("{\"path\":\"/09-applications/\",\"title\":\"Building Database Driven Applications\",\"lang\":\"nl-BE\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1737539116000,\"contributors\":[{\"name\":\"verwo\",\"username\":\"verwo\",\"email\":\"wouter_verstraete@hotmail.com\",\"commits\":1,\"url\":\"https://github.com/verwo\"}]},\"filePathRelative\":\"09-applications/index.md\"}")
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

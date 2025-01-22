import comp from "/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/03-data/index.html.vue"
const data = JSON.parse("{\"path\":\"/03-data/\",\"title\":\"Data\",\"lang\":\"nl-BE\",\"frontmatter\":{\"title\":\"Data\"},\"headers\":[{\"level\":2,\"title\":\"Reading Data\",\"slug\":\"reading-data\",\"link\":\"#reading-data\",\"children\":[]},{\"level\":2,\"title\":\"Creating Data\",\"slug\":\"creating-data\",\"link\":\"#creating-data\",\"children\":[{\"level\":3,\"title\":\"Inserting a single complete row\",\"slug\":\"inserting-a-single-complete-row\",\"link\":\"#inserting-a-single-complete-row\",\"children\":[]},{\"level\":3,\"title\":\"Inserting a single partial row\",\"slug\":\"inserting-a-single-partial-row\",\"link\":\"#inserting-a-single-partial-row\",\"children\":[]},{\"level\":3,\"title\":\"Inserting multiple rows\",\"slug\":\"inserting-multiple-rows\",\"link\":\"#inserting-multiple-rows\",\"children\":[]},{\"level\":3,\"title\":\"Insert the result of a query\",\"slug\":\"insert-the-result-of-a-query\",\"link\":\"#insert-the-result-of-a-query\",\"children\":[]}]},{\"level\":2,\"title\":\"Updating data\",\"slug\":\"updating-data\",\"link\":\"#updating-data\",\"children\":[{\"level\":3,\"title\":\"Updating a single field\",\"slug\":\"updating-a-single-field\",\"link\":\"#updating-a-single-field\",\"children\":[]},{\"level\":3,\"title\":\"Updating multiple fields\",\"slug\":\"updating-multiple-fields\",\"link\":\"#updating-multiple-fields\",\"children\":[]},{\"level\":3,\"title\":\"Deleting a value from a row\",\"slug\":\"deleting-a-value-from-a-row\",\"link\":\"#deleting-a-value-from-a-row\",\"children\":[]}]},{\"level\":2,\"title\":\"Deleting data\",\"slug\":\"deleting-data\",\"link\":\"#deleting-data\",\"children\":[]}],\"git\":{\"updatedTime\":1737539116000,\"contributors\":[{\"name\":\"verwo\",\"username\":\"verwo\",\"email\":\"wouter_verstraete@hotmail.com\",\"commits\":1,\"url\":\"https://github.com/verwo\"}]},\"filePathRelative\":\"03-data/index.md\"}")
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

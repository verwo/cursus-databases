export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Cursus databases"} }],
  ["/01-databases/", { loader: () => import(/* webpackChunkName: "01-databases_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/01-databases/index.html.js"), meta: {"title":"Databases"} }],
  ["/03-data/", { loader: () => import(/* webpackChunkName: "03-data_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/03-data/index.html.js"), meta: {"title":"Data"} }],
  ["/02-tables/", { loader: () => import(/* webpackChunkName: "02-tables_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/02-tables/index.html.js"), meta: {"title":"Tables"} }],
  ["/04-er-diagrams/er-model.html", { loader: () => import(/* webpackChunkName: "04-er-diagrams_er-model.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/04-er-diagrams/er-model.html.js"), meta: {"title":"Het Entiteit-Relatie Model"} }],
  ["/04-er-diagrams/erd-database.html", { loader: () => import(/* webpackChunkName: "04-er-diagrams_erd-database.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/04-er-diagrams/erd-database.html.js"), meta: {"title":"ERD-model omzetten naar databaseontwerp"} }],
  ["/04-er-diagrams/", { loader: () => import(/* webpackChunkName: "04-er-diagrams_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/04-er-diagrams/index.html.js"), meta: {"title":"Relationele Database en ER Diagrammen"} }],
  ["/04-er-diagrams/normaliseren.html", { loader: () => import(/* webpackChunkName: "04-er-diagrams_normaliseren.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/04-er-diagrams/normaliseren.html.js"), meta: {"title":"Normaliseren"} }],
  ["/05-retrieving-data/", { loader: () => import(/* webpackChunkName: "05-retrieving-data_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/05-retrieving-data/index.html.js"), meta: {"title":"Retrieving Data"} }],
  ["/06-combining-data/", { loader: () => import(/* webpackChunkName: "06-combining-data_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/06-combining-data/index.html.js"), meta: {"title":"Combining Data"} }],
  ["/07-users-and-privileges/", { loader: () => import(/* webpackChunkName: "07-users-and-privileges_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/07-users-and-privileges/index.html.js"), meta: {"title":"Users & Privileges"} }],
  ["/09-applications/", { loader: () => import(/* webpackChunkName: "09-applications_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/09-applications/index.html.js"), meta: {"title":"Building Database Driven Applications"} }],
  ["/08-passwords/", { loader: () => import(/* webpackChunkName: "08-passwords_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/08-passwords/index.html.js"), meta: {"title":"Storing Passwords"} }],
  ["/01-databases/datatypes/", { loader: () => import(/* webpackChunkName: "01-databases_datatypes_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/01-databases/datatypes/index.html.js"), meta: {"title":"Inleiding tot MySQL Datatypes"} }],
  ["/01-databases/introduction/", { loader: () => import(/* webpackChunkName: "01-databases_introduction_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/01-databases/introduction/index.html.js"), meta: {"title":"Databanken"} }],
  ["/01-databases/mysql-client/", { loader: () => import(/* webpackChunkName: "01-databases_mysql-client_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/01-databases/mysql-client/index.html.js"), meta: {"title":"MySQL Client"} }],
  ["/01-databases/sql-language/", { loader: () => import(/* webpackChunkName: "01-databases_sql-language_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/01-databases/sql-language/index.html.js"), meta: {"title":"SQL"} }],
  ["/05-retrieving-data/calculated-fields/", { loader: () => import(/* webpackChunkName: "05-retrieving-data_calculated-fields_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/05-retrieving-data/calculated-fields/index.html.js"), meta: {"title":"Calculated fields"} }],
  ["/05-retrieving-data/filtering/", { loader: () => import(/* webpackChunkName: "05-retrieving-data_filtering_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/05-retrieving-data/filtering/index.html.js"), meta: {"title":"Filtering data"} }],
  ["/05-retrieving-data/grouping/", { loader: () => import(/* webpackChunkName: "05-retrieving-data_grouping_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/05-retrieving-data/grouping/index.html.js"), meta: {"title":"Grouping data"} }],
  ["/05-retrieving-data/manipulation/", { loader: () => import(/* webpackChunkName: "05-retrieving-data_manipulation_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/05-retrieving-data/manipulation/index.html.js"), meta: {"title":"Data manipulation"} }],
  ["/05-retrieving-data/retrieving/", { loader: () => import(/* webpackChunkName: "05-retrieving-data_retrieving_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/05-retrieving-data/retrieving/index.html.js"), meta: {"title":"Retrieving data"} }],
  ["/05-retrieving-data/sorting/", { loader: () => import(/* webpackChunkName: "05-retrieving-data_sorting_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/05-retrieving-data/sorting/index.html.js"), meta: {"title":"Sorting retreived data"} }],
  ["/05-retrieving-data/summarizing/", { loader: () => import(/* webpackChunkName: "05-retrieving-data_summarizing_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/05-retrieving-data/summarizing/index.html.js"), meta: {"title":"Summarizing data"} }],
  ["/exercises/01-software-installation/", { loader: () => import(/* webpackChunkName: "exercises_01-software-installation_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/exercises/01-software-installation/index.html.js"), meta: {"title":"Software"} }],
  ["/exercises/02-example-databases/", { loader: () => import(/* webpackChunkName: "exercises_02-example-databases_index.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/exercises/02-example-databases/index.html.js"), meta: {"title":"Voorbeeld Databases Instellen"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/wouter/cursussen/cursus-databases/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

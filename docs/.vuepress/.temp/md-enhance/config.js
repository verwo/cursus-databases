import Mermaid from "/home/wouter/cursussen/cursus-databases/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";

export default {
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
  },
};

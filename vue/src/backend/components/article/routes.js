const Form = () => import("./Form.vue");
const List = () => import("./List.vue");
const Settings = () => import("./Settings.vue");
const childRoutes =[ {
          path: "list",
          component: List,
          name: "ArticleTable",
          meta: {title:"List"},
          redirect: {name:"type",params:{type:"news"}} ,
          children: [{
            path: ":type",
            name:"type",
            component: List
          }]
        },
        {
          path: "settings",
          component: Settings,
          name: "ArticleSettings",
          meta: {title:"Settings"}
        },
        {
          path: "write",
          component: Form,
          name: "WriteArticle",
          meta: {title:"Write"}
        },
        {
          path: ":id/update",
          component: Form,
          name: "UpdateArticle",
          meta: {title:"Update"}
        }];

export default childRoutes;

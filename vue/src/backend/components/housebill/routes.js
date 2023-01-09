const Form = () => import("./Form.vue");
const Table = () => import("./Table.vue");
const childRoutes =[ {
          path: "list",
          component: Table,
          name: "HousebillTable",
          meta: {title:"List"}
        },
        {
          path: "new-house-bill",
          component: Form,
          name: "AddHousebill",
          meta: {title:"Add House bill"}
        },
        {
          path: ":id/update",
          component: Form,
          name: "UpdateHousebill",
          meta: {title:"Update House bill"}
        }];

export default childRoutes;

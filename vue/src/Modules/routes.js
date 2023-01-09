// const Module = () => import("./Module.vue");
const DefaultLayout = () => import("./DefaultLayout.vue");
import GovernmentAgencies from "./GovernmentAgencies.vue";
import FinancialAssistance from "./financialassistance/FA.vue";
import FAOverview from "./financialassistance/Overview.vue";
import FARequirement from "./financialassistance/Requirements.vue";
import About from "./About.vue"

import Scholarship from "./scholarship/Scholarship.vue";
import ScholarshipOverview from "./scholarship/Overview.vue";
import ScholarshipRequirement from "./scholarship/Requirements.vue";
import Home from "./home/Home.vue";
import News from "./news/News.vue";
import Stories from "./stories/Story.vue";
import Events from "./events/Events.vue";
import Gallery from "./gallery/Gallery.vue";
import newsRoutes from "./news/news-routes";
import storyRoutes from "./stories/story-routes";
import eventsRoutes from "./events/events-routes";
import galleryRoutes from "./gallery/gallery-routes";

import NotFound from "../views/NotFound.vue";

const routes = {
    path: '/',
    // meta: {isGuest: true},
    name:  'Public',
    component: DefaultLayout,
    children: [
      {
          path: "",
          component: Home,
          name: "Home",
          meta: {
            title:'Home',
            metaTags: [
            {
              name: 'description',
              content: 'JCA for progess movement.'
            },
            {
              property: 'og:description',
              content: 'JCA for progess movement.'
            }]
          },
      },
      {
          path: "financial-assistance",
          component: FinancialAssistance,
          name: "FinancialAssistance",
          redirect:"/financial-assistance/overview",
          meta: {title:'Financial Assistance'},
          children:[{
            path:"overview",
            component: FAOverview,
            name:"FAOverview"
          },{
            path:"requirement",
            component: FARequirement,
            name:"FARequirement"
          },]
      },

      {
          path: "scholarship-program",
          component: Scholarship,
          name: "Scholarship",
          redirect:"/scholarship-program/overview",
          meta: {title:'Scholarship Program'},
          children:[{
            path:"overview",
            component: ScholarshipOverview,
            name:"ScholarshipOverview"
          },{
            path:"requirement",
            component: ScholarshipRequirement,
            name:"ScholarshipRequirement"
          },]
      },
      {
          path: "government-agencies",
          component: GovernmentAgencies,
          name: "GovernmentAgencies",
          meta: {title:'GovernmentAgencies'},
      },
      {
          path:"about",
          component: About,
          name: "About",
          meta: {title:'About'}
      },


      // newsRoutes
      {
        path: "news",
        redirect: {name:"PublicNews"}, //imported from from new-routes
        component: News,
        name: "NewsModule",
        meta: {title:'News'},
        children:newsRoutes
      },



      {
        path: "stories",
        redirect: {name:"PublicStory"}, //imported from from story-routes
        component: Stories,
        name: "StoryModule",
        meta: {title:'Stories'},
        children:storyRoutes
      },

      {
        path: "events",
        component: Events,
        name: "PublicEvents",
        meta: {title:'Events'},
        children: eventsRoutes
      },

     {
        path: "gallery",
        redirect: {name:"PublicGallery"}, //imported from from story-routes
        component: Gallery,
        name: "GalleryModule",
        meta: {title:'Gallery'},
        children:galleryRoutes
      },


      {
        path: "page-not-found",
        component: NotFound,
        meta: {title:'Page Not Found'},
        name: "NotFound"
      }
    ]
};

export default routes;

import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import ProjectsPage from "../components/ProjectsPage.vue";




const routes = [
  {
    name: "home",
    component: HomePage,
    path: "/"
  },

  {
    name: "about",
    component: AboutPage,
    path: "/about"
  },

  {
    name: "projects",
    component: ProjectsPage,
    path: "/projects"
  },
  
  
 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
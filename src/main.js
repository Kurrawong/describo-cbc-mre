import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import DescriboCrateBuilder from "@describo/crate-builder-component";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "root",
      component: App,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.use(DescriboCrateBuilder);
app.mount("#app");

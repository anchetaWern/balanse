import Vue from "vue";
import VueRouter from "vue-router";
import Entries from "../views/Entries.vue";
import AddEntry from "../views/AddEntry.vue";
import Login from "../views/Login.vue";

import Vue2Filters from "vue2-filters";
import { Table, Field, Input, Button, Radio, Loading } from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Table);
Vue.use(Field);
Vue.use(Input);
Vue.use(Button);
Vue.use(Radio);
Vue.use(Loading);
Vue.use(Vue2Filters);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/entries",
    name: "Entries",
    component: Entries,
  },
  {
    path: "/entry/new",
    name: "AddEntry",
    component: AddEntry,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

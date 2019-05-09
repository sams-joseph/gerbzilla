import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import Header from "./components/Header";
import Login from "./components/Login";

Vue.use(VueRouter);

Vue.component("page-header", Header);
Vue.component("login", Login);

const app = new Vue({
    el: "#app",
    router: new VueRouter(routes)
});

import Vue from "vue";
import VueRouter from "vue-router";
import VScrollLock from 'v-scroll-lock';
import routes from "./routes";
import Header from "./components/Header";
import Login from "./components/Login";
import Navigation from './components/Navigation';
import SubNavigation from './components/SubNavigation';

Vue.use(VueRouter);
Vue.use(VScrollLock);

Vue.component("page-header", Header);
Vue.component("login", Login);
Vue.component("navigation", Navigation);
Vue.component("sub-navigation", SubNavigation);

const app = new Vue({
    el: "#app",
    router: new VueRouter(routes)
});

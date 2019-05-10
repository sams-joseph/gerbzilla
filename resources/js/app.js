import Vue from "vue";
import VueRouter from "vue-router";
import VScrollLock from "v-scroll-lock";
import VueCookies from "vue-cookies";
import axios from "axios";

import routes from "./routes";
import Header from "./components/Header";
import LoginForm from "./components/forms/LoginForm";
import Navigation from "./components/Navigation";
import SubNavigation from "./components/SubNavigation";
import CreateUserForm from './components/forms/CreateUserForm';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import Users from './components/Users';
import SideNavigation from './components/SideNavigation';

Vue.prototype.$http = axios;

Vue.use(VueRouter);
Vue.use(VScrollLock);
Vue.use(VueCookies);

VueCookies.config("7d");

Vue.component("page-header", Header);
Vue.component("login-form", LoginForm);
Vue.component("navigation", Navigation);
Vue.component("sub-navigation", SubNavigation);
Vue.component("create-user-form", CreateUserForm);
Vue.component("tabs", Tabs);
Vue.component("tab", Tab);
Vue.component("users", Users);
Vue.component("side-navigation", SideNavigation);

let router = new VueRouter(routes);

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (VueCookies.get('laravel_token') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let role = JSON.parse(localStorage.getItem('role'));

            if (to.matched.some(record => record.meta.is_admin)) {
                if (role.id == 3) {
                    next()
                }
                else {
                    next({ name: 'overview' })
                }
            } else if (to.matched.some(record => record.meta.is_trainer)) {
                if (role.id == 3 || role.id == 2) {
                    next()
                }
                else {
                    next({ name: 'overview' })
                }
            } else {
                next()
            }
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (VueCookies.get('laravel_token') == null) {
            next()
        }
        else {
            next({ name: 'overview' })
        }
    } else {
        next()
    }
})

const app = new Vue({
    el: "#app",
    router: router,
    created() {
        if ($cookies.isKey("laravel_token")) {
            const laravelToken = $cookies.get("laravel_token");
            const token = `Bearer ${laravelToken}`;

            this.$http.defaults.headers.common["Authorization"] = token;
            this.$http
                .get("http://localhost:8000/api/user")
                .then(res => {
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    localStorage.setItem("role", JSON.stringify(res.data.role));
                })
                .catch(err => {
                    this.$cookies.remove('laravel_token');
                });
        }
    }
});

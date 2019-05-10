import Vue from "vue";
import VueRouter from "vue-router";
import VScrollLock from "v-scroll-lock";
import VueCookies from "vue-cookies";
import axios from "axios";

import routes from "./routes";
import Header from "./components/Header";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import SubNavigation from "./components/SubNavigation";

Vue.use(VueRouter);
Vue.use(VScrollLock);
Vue.use(VueCookies);

VueCookies.config("7d");

Vue.component("page-header", Header);
Vue.component("login", Login);
Vue.component("navigation", Navigation);
Vue.component("sub-navigation", SubNavigation);

const app = new Vue({
    el: "#app",
    router: new VueRouter(routes),
    created() {
        if ($cookies.isKey("laravel_token")) {
            const laravelToken = $cookies.get("laravel_token");
            const token = `Bearer ${laravelToken}`;

            axios.defaults.headers.common["Authorization"] = token;
            axios
                .get("http://gerbzilla.test/api/user")
                .then(res => {})
                .catch(err => {
                    this.$router.push("/");
                });
        }
    }
});

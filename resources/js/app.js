import Vue, { mapGetters } from "vue";
import VueRouter from "vue-router";
import VScrollLock from "v-scroll-lock";
import VueCookies from "vue-cookies";
import axios from "axios";
import moment from "moment";

import store from "./store";

import routes from "./routes";
import Header from "./components/Header";
import LoginForm from "./components/forms/LoginForm";
import Navigation from "./components/Navigation";
import SubNavigation from "./components/SubNavigation";
import CreateUserForm from "./components/forms/CreateUserForm";
import CreateExerciseForm from "./components/forms/CreateExerciseForm";
import CreateBlockForm from "./components/forms/CreateBlockForm";
import CreateWorkoutForm from "./components/forms/CreateWorkoutForm";
import DuplicateWorkoutForm from "./components/forms/DuplicateWorkoutForm";
import CreateSetForm from "./components/forms/CreateSetForm";
import EditSetForm from "./components/forms/EditSetForm";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";
import UserList from "./components/lists/UserList";
import ExerciseList from "./components/lists/ExerciseList";
import SideNavigation from "./components/SideNavigation";
import PageFooter from "./components/PageFooter";
import Block from "./components/Block";
import BlockHeader from "./components/BlockHeader";
import WorkoutItem from "./components/WorkoutItem";
import WorkoutCard from "./components/WorkoutCard";
import Snackbar from "./components/Snackbar";
import Instagram from "./components/Instagram";
import Announcement from "./components/Announcement";
import DeleteModal from "./components/DeleteModal";
import ContextMenu from "./components/ContextMenu";

import UserSkeletonLoader from "./components/UserSkeletonLoader";
import Loader from "./components/Loader";

import Construction from "./components/Construction";

Vue.prototype.$store = store;
Vue.prototype.$http = axios;
Vue.prototype.$moment = moment;

Vue.use(VueRouter);
Vue.use(VScrollLock);
Vue.use(VueCookies);

VueCookies.config("7d");

Vue.component("page-header", Header);
Vue.component("login-form", LoginForm);
Vue.component("navigation", Navigation);
Vue.component("sub-navigation", SubNavigation);
Vue.component("create-user-form", CreateUserForm);
Vue.component("create-exercise-form", CreateExerciseForm);
Vue.component("create-block-form", CreateBlockForm);
Vue.component("create-workout-form", CreateWorkoutForm);
Vue.component("create-set-form", CreateSetForm);
Vue.component("edit-set-form", EditSetForm);
Vue.component("duplicate-workout-form", DuplicateWorkoutForm);
Vue.component("tabs", Tabs);
Vue.component("tab", Tab);
Vue.component("user-list", UserList);
Vue.component("exercise-list", ExerciseList);
Vue.component("side-navigation", SideNavigation);
Vue.component("page-footer", PageFooter);
Vue.component("block", Block);
Vue.component("block-header", BlockHeader);
Vue.component("workout-item", WorkoutItem);
Vue.component("workout-card", WorkoutCard);
Vue.component("snackbar", Snackbar);
Vue.component("instagram", Instagram);
Vue.component("announcement", Announcement);
Vue.component("delete-modal", DeleteModal);
Vue.component("context-menu", ContextMenu);

Vue.component("user-skeleton-loader", UserSkeletonLoader);
Vue.component("loader", Loader);

Vue.component("construction", Construction);

let router = new VueRouter(routes);

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.authorized) {
            next({
                path: "/login",
                params: { nextUrl: to.fullPath }
            });
        } else {
            if (to.matched.some(record => record.meta.is_admin)) {
                if (store.getters.isAdmin) {
                    next();
                } else {
                    next({ name: "overview" });
                }
            } else if (to.matched.some(record => record.meta.is_trainer)) {
                if (store.getters.isTrainer || store.getters.isAdmin) {
                    next();
                } else {
                    next({ name: "overview" });
                }
            } else {
                next();
            }
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (store.getters.authorized) {
            next({ name: "overview" });
        } else {
            next();
        }
    } else {
        next();
    }
});

let handleOutsideClick;
Vue.directive("closable", {
    bind(el, binding, vnode) {
        handleOutsideClick = e => {
            e.stopPropagation();
            // Get the handler method name and the exclude array
            // from the object used in v-closable
            const { handler, exclude } = binding.value;
            // This variable indicates if the clicked element is excluded
            let clickedOnExcludedEl = false;
            exclude.forEach(refName => {
                // We only run this code if we haven't detected
                // any excluded element yet
                if (!clickedOnExcludedEl) {
                    // Get the element using the reference name
                    const excludedEl = vnode.context.$refs[refName];
                    // See if this excluded element
                    // is the same element the user just clicked on
                    clickedOnExcludedEl = excludedEl.contains(e.target);
                }
            });
            // We check to see if the clicked element is not
            // the dialog element and not excluded
            if (!el.contains(e.target) && !clickedOnExcludedEl) {
                // If the clicked element is outside the dialog
                // and not the button, then call the outside-click handler
                // from the same component this directive is used in
                vnode.context[handler]();
            }
        };
        // Register click/touchstart event listeners on the whole page
        document.addEventListener("click", handleOutsideClick);
        document.addEventListener("touchstart", handleOutsideClick);
    },
    unbind() {
        // If the element that has v-closable is removed, then
        // unbind click/touchstart listeners from the whole page
        document.removeEventListener("click", handleOutsideClick);
        document.removeEventListener("touchstart", handleOutsideClick);
    }
});

const app = new Vue({
    el: "#app",
    router: router,
    created() {
        if ($cookies.isKey("laravel_token")) {
            const laravelToken = $cookies.get("laravel_token");
            const token = `Bearer ${laravelToken}`;

            this.$http.defaults.headers.common["Authorization"] = token;
            this.$http
                .get(`${process.env.MIX_BASE_URL}/user`)
                .then(res => {
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    localStorage.setItem("role", JSON.stringify(res.data.role));
                })
                .catch(err => {
                    this.$cookies.remove("laravel_token");
                });
        }
    }
});

import Overview from "./pages/Overview";
import Workouts from "./pages/Workouts";
import Goals from "./pages/Goals";

import NotFound from "./components/NotFound";

export default {
    mode: "history",

    linkActiveClass: "font-bold",

    routes: [
        {
            path: "*",
            component: NotFound
        },
        {
            path: "/u/overview",
            component: Overview
        },
        {
            path: "/u/workouts",
            component: Workouts
        },
        {
            path: "/u/goals",
            component: Goals
        }
    ]
};

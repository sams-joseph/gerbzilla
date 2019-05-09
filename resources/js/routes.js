import Overview from "./pages/Overview";

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
            path: "/overview",
            component: Overview
        }
    ]
};

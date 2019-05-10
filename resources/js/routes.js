import Login from './pages/Login';
import Overview from "./pages/Overview";
import Workouts from "./pages/Workouts";
import Goals from "./pages/Goals";
import Users from './pages/trainer/Users';
import Exercises from './pages/trainer/Exercises';

import NotFound from "./components/NotFound";

export default {
    mode: "history",

    routes: [
        {
            path: "*",
            name: 'NotFound',
            component: NotFound
        },
        {
            path: "/login",
            name: 'login',
            component: Login,
            meta: {
                guest: true
            }
        },
        {
            path: "/u/overview",
            name: 'overview',
            component: Overview,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/u/workouts",
            name: 'workouts',
            component: Workouts,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: "/u/goals",
            name: 'goals',
            component: Goals,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: "/t/",
            redirect: {
                name: "users"
            }
        },
        {
            path: "/t/users",
            name: 'users',
            component: Users,
            meta: {
                requiresAuth: true,
                is_trainer: true,
            }
        },
        {
            path: "/t/exercises",
            name: 'exercises',
            component: Exercises,
            meta: {
                requiresAuth: true,
                is_trainer: true,
            }
        }
    ]
};

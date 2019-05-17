import Home from "./pages/Home";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Workouts from "./pages/Workouts";
import Goals from "./pages/Goals";
import Users from "./pages/trainer/Users";
import User from "./pages/trainer/User";
import Exercises from "./pages/trainer/Exercises";
import Blocks from "./pages/trainer/Blocks";
import Workout from "./pages/trainer/Workout";
import EditSet from './pages/trainer/EditSet';

import NotFound from "./components/NotFound";

export default {
    mode: "history",

    routes: [
        {
            path: "*",
            name: "NotFound",
            component: NotFound
        },
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                guest: true
            }
        },
        {
            path: "/u/overview",
            name: "overview",
            component: Overview,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/u/workouts",
            name: "workouts",
            component: Workouts,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/u/goals",
            name: "goals",
            component: Goals,
            meta: {
                requiresAuth: true
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
            name: "users",
            component: Users,
            meta: {
                requiresAuth: true,
                is_trainer: true
            }
        },
        ,
        {
            path: "/t/users/:id",
            name: "user",
            component: User,
            meta: {
                requiresAuth: true,
                is_trainer: true
            }
        },
        {
            path: "/t/exercises",
            name: "exercises",
            component: Exercises,
            meta: {
                requiresAuth: true,
                is_trainer: true
            }
        },
        {
            path: "/t/users/:user_id/blocks/:block_id",
            name: "block",
            component: Blocks,
            meta: {
                requiresAuth: true,
                is_trainer: true
            }
        },
        {
            path: "/t/users/:user_id/blocks/:block_id/workouts/:workout_id",
            name: "workout",
            component: Workout,
            meta: {
                requiresAuth: true,
                is_trainer: true
            }
        },
        {
            path: "/t/users/:user_id/blocks/:block_id/workouts/:workout_id/sets/:set_id",
            name: "edit-set",
            component: EditSet,
            meta: {
                requiresAuth: true,
                is_trainer: true
            }
        }
    ]
};

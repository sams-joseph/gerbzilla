import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: "",
        token: $cookies.get("laravel_token") || "",
        user: JSON.parse(localStorage.getItem("user")) || {},
        role: JSON.parse(localStorage.getItem("role")) || {},
        msg: { type: "", message: "", show: false }
    },
    mutations: {
        auth_request(state) {
            state.status = "loading";
        },
        auth_success(state, payload) {
            state.status = "success";
            state.token = payload.token;
            state.user = payload.user;
            state.role = payload.role;
        },
        auth_error(state) {
            state.status = "error";
        },
        logout(state) {
            state.status = "";
            state.token = "";
            state.user = {};
            state.role = {};
        },
        add_message(state, payload) {
            state.status = "add-message";
            state.msg = payload;
        },
        remove_message(state) {
            state.status = "remove-message";
            state.msg = { type: "", message: "", show: false };
        }
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit("auth_request");
                axios({
                    url: `${process.env.MIX_BASE_URL}/login`,
                    data: user,
                    method: "POST"
                })
                    .then(res => {
                        const token = res.data.access_token;
                        $cookies.set("laravel_token", token);
                        axios.defaults.headers.common[
                            "Authorization"
                        ] = `Bearer ${token}`;

                        axios({
                            url: `${process.env.MIX_BASE_URL}/user`,
                            method: "GET"
                        })
                            .then(resp => {
                                const user = resp.data.user;
                                const role = resp.data.role;
                                localStorage.setItem(
                                    "user",
                                    JSON.stringify(user)
                                );
                                localStorage.setItem(
                                    "role",
                                    JSON.stringify(role)
                                );
                                commit("auth_success", { token, user, role });
                                resolve(resp);
                            })
                            .catch(err => {
                                commit("auth_error");
                                $cookies.remove("laravel_token");
                                localStorage.removeItem("user");
                                localStorage.removeItem("role");
                                reject(err);
                            });
                    })
                    .catch(error => {
                        commit("auth_error");
                        $cookies.remove("laravel_token");
                        localStorage.removeItem("user");
                        localStorage.removeItem("role");
                        reject(error);
                    });
            });
        },

        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit("logout");
                $cookies.remove("laravel_token");
                localStorage.removeItem("user");
                localStorage.removeItem("role");
                delete axios.defaults.headers.common["Authorization"];
                resolve();
            });
        },

        add({ commit }, message) {
            commit("add_message", message);
            setTimeout(() => {
                commit("remove_message");
            }, 4000);
        },

        remove({ commit }) {
            return new Promise((resolve, reject) => {
                commit("remove_message");
                resolve();
            });
        }
    },
    getters: {
        authorized: state => !!state.token,
        authStatus: state => state.status,
        isTrainer: state =>
            state.role
                ? state.role.name === "trainer" || state.role.name === "admin"
                : false,
        isAdmin: state => (state.role ? state.role.name === "admin" : false),
        user: state => {
            return state.user;
        },
        role: state => {
            return state.role;
        },
        isActive: state => !!state.user.is_active,
        getMsg: state => state.msg
    }
});

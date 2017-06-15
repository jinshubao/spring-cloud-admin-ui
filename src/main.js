import Vue from "vue";
import Vuex from "vuex";
import store from "./vuex/store";
import VueRouter from "vue-router";
import Iview from "iview";
import "iview/dist/styles/iview.css";
import routes from "./routes";
import App from "./App.vue";
import Mock from "./mock";
Mock.bootstrap();
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Iview);


const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
        next({path: '/login'})
    } else {
        next()
    }
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


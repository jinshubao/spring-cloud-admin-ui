import Vue from 'vue'
import Iview from 'iview'
import 'iview/dist/styles/iview.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
import Mock from './mock'
Mock.bootstrap();


Vue.use(Iview)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
    routes
})

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
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


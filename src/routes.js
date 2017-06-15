import Login from "./views/Login.vue";
import NotFound from "./views/404.vue";
// import Table from "./views/nav1/Table.vue";
import Form from "./views/nav1/Form.vue";
import user from "./views/nav1/user.vue";
import Page4 from "./views/nav2/Page4.vue";
// import Page5 from "./views/nav2/Page5.vue";
import echarts from "./views/charts/echarts.vue";
import Environment from "./views/Environment.vue";
import Application from "./views/Application.vue";

let routes = [
    {
        path: '/form',
        component: Form,
        name: 'form'
    },
    {
        path: '/user',
        component: user,
        name: '列表'
    },
    {
        path: '/page4',
        component: Page4,
        name: '页面4'
    },
    {
        path: '/echarts',
        component: echarts,
        name: 'echarts'
    },
    {
        path: '/environment',
        component: Environment,
        name: '环境变量'
    },
    {
        path: '/application',
        component: Application,
        name: '应用程序'
    },
    {
        path: '/login',
        component: Login,
        name: '登陆',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '404',
        hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: {path: '/404'}
    }
];

export default routes;
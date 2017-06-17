import Login from "./views/Login.vue";
import NotFound from "./views/404.vue";
import Table from "./views/nav1/Table.vue";
import Form from "./views/nav1/Form.vue";
import user from "./views/nav1/user.vue";
import Page4 from "./views/nav2/Page4.vue";
import Page5 from "./views/nav2/Page5.vue";
import echarts from "./views/charts/echarts.vue";
import Environment from "./views/Environment.vue";
import Application from "./views/Application.vue";

let routes = [
    {
        path: '/table',
        component: Table,
        name: 'Table'
    },
    {
        path: '/form',
        component: Form,
        name: 'Form'
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
        path: '/page5',
        component: Page5,
        name: '页面5'
    },

    {
        path: '/echarts',
        component: echarts,
        name: 'echarts'
    },
    {
        path: '/environment',
        component: Environment,
        name: 'Environments'
    },
    {
        path: '/application',
        component: Application,
        name: 'Applications'
    },
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: {path: '/404'}
    }
];

export default routes;
<template>
    <div class="layout">
        <Menu mode="horizontal"
              theme="dark"
              active-name="1"
              @on-select="menuSelect">
            <Menu-item :name="item.path" :index="item.path" v-for="(item,index) in $router.options.routes" v-if="!item.hidden"
                       :key="item.path">
                <Icon :type="item.iconCls"></Icon>
                {{item.name}}
            </Menu-item>
        </Menu>
        <div class="layout-content">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    //import HeaderBar from './views/HeaderBar.vue'
    //import FooterBar from './views/FooterBar.vue'
    export default {
        //components: { HeaderBar, MainContainer,FooterBar},
        data() {
            return {}
        },
        methods: {
            menuSelect: function (name) {
                this.$router.push(name);
            }
        },
        mounted() {
            console.info('App mounted');
        }

    }
</script>
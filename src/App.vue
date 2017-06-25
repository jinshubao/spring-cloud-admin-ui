<template>
    <div id="app">
        <header-bar></header-bar>
        <menu-bar>
            <section slot="content">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </section>
        </menu-bar>
        <!--<footer-bar></footer-bar>-->
    </div>
</template>

<script>
    import HeaderBar from './views/HeaderBar.vue'
    import MenuBar from './views/MenuBar.vue'
    import FooterBar from './views/FooterBar.vue'
    import ElRow from "element-ui/packages/row/src/row";
    export default {
        components: {
            ElRow,
            HeaderBar, MenuBar, FooterBar
        },
        data() {
            return {}
        },
        methods: {},
        mounted() {
            console.info('App mounted');
        }
    }
</script>
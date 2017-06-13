<template>
    <el-row class="container">
        <header-bar></header-bar>
        <!--<footer-bar></footer-bar>-->
        <main-container></main-container>
    </el-row>
</template>

<script>
    import HeaderBar from './HeaderBar.vue'
    import MainContainer from './MainContainer.vue'
    import FooterBar from './FooterBar.vue'
    export default {
        components: { HeaderBar, MainContainer,FooterBar},
        data() {
            return {
            }
        },
        methods: {},
        mounted() {
            console.info("=============")
            console.info($router.options.routes)
        }
    }

</script>

<style scoped lang="scss">
    @import '~scss_vars';

    .container {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
    }
</style>
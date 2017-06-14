<template>
	<el-row id="app" class="container">
		<header-bar></header-bar>
		<main-container></main-container>
	</el-row>
</template>

<script>
    import HeaderBar from './views/HeaderBar.vue'
    import MainContainer from './views/MainContainer.vue'
    import FooterBar from './views/FooterBar.vue'
    export default {
        components: { HeaderBar, MainContainer,FooterBar},
        data() {
            return {
            }
        },
        methods: {},
        mounted() {
            console.info('App mounted');
        }

    }

</script>
<template>
    <section>
        <search-bar @search="getApplication" ></search-bar>
            {{applications}}
    </section>
</template>
<script>
    import { getApplications } from '../api/api';
    import SearchBar from './../components/SearchBar.vue'
    export default {
        components: {SearchBar},
        data() {
            return {
                applications:[]
            }
        },
        methods: {
            getApplication (name) {
                let param = {
                    name: name
                };
                console.log("param", param);
                this.loading = true;
                getApplications(param).then((res) => {
                    this.applications = res.data.result;
                    this.loading = false;
                });
            }
        },
        mounted() {
            this.getApplication()
        }
    }
</script>
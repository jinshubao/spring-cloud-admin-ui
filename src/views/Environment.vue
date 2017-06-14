<template>
    <section>
        <search-bar @search="searchByKeyword"></search-bar>
        <property-sheet v-for="(item, index) in envs" :title="item.title" :properties="item.properties" :key="index"></property-sheet>
    </section>
</template>
<script>
    import SearchBar from './../components/SearchBar.vue'
    import PropertySheet from './../components/PropertySheet.vue'
    import {getEnvironments} from '../api/api';
    export default {
        components: {SearchBar, PropertySheet},
        data() {
            return {
                envs: []
            }
        },
        methods: {
            handleEdit(index, row){

            },
            handleDelete(index, row){

            },
            searchByKeyword(keyword){
                console.info("keyword", keyword)
            },
            getEnvironment(name) {
                let param = {
                    name: name
                };
                this.loading = true;
                getEnvironments(param).then((res) => {
                    let result = res.data.result;
                    // 向控制台输出对象的可枚举属性

                    for (let key of Object.keys(result)) {
                        let items = result[key];
                        let properties = [];
                        for (let item of Object.keys(items)) {
                            properties.push({name: item, value: items[item]})
                        }
                        this.envs.push({title: key, properties: properties});
                    }
                    this.loading = false;
                });
            }

        },
        mounted() {
            console.info('Environment mounted');
            this.getEnvironment()
        }
    }
</script>
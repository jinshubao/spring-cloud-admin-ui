<template>
    <section>
        <search-bar @search="searchByKeyword"></search-bar>
        <el-table v-for="(env, index) in envs" :key="index"
                  :data="env"
                  stripe
                  border row-key="name">
            <el-table-column
                    prop="name"
                    label="Property name">
            </el-table-column>
            <el-table-column
                    prop="value">
            </el-table-column>
            <el-table-column>
                <template scope="scope">
                    <el-button
                            size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </section>
</template>
<script>
    import SearchBar from './../components/SearchBar.vue'
    export default {
        components: {SearchBar},
        data() {
            return {
                envs: [
                    [{name: 'system', value: 'IOS'}, {name: 'system', value: 'IOS'}],
                    [{name: 'system', value: 'IOS'}, {name: 'system', value: 'IOS'}, {name: 'system', value: 'IOS'}]
                ]
            }
        },
        methods: {
            handleEdit(index, row){

            },
            handleDelete(index, row){

            },
            searchByKeyword(keyword){
                console.info("keyword", keyword)
            }

        },
        mounted() {

        }
    }
</script>
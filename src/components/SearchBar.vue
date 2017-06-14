<template>
    <el-row class="toolbar">
        <el-form :inline="true">
            <el-form-item>
                <el-input v-model="keyword" placeholder="关键字"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="searchByKeyword(keyword)">查询</el-button>
            </el-form-item>
        </el-form>
    </el-row>
</template>
<script>
    export default {
        data() {
            return {
                keyword: ''
            }
        },
        methods: {
            searchByKeyword(keyword){
                this.$emit('search', keyword)
            },
            searchInput(value){
                this.$emit("searchInput", value)
            }
        },
        mounted() {
        }
    }
</script>
<style scoped>
    .toolbar {
        padding-top: 20px;
        padding-bottom: 0;
    }
</style>
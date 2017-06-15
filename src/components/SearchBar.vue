<template>
    <Row :gutter="16">
        <Col span="12">
            <Input v-model="keyword" placeholder="关键字"></Input>
        </Col>
        <Col span="12">
            <Button type="primary" shape="circle" icon="ios-search" @click="searchByKeyword(keyword)">搜索</Button>
        </Col>
    </Row>
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
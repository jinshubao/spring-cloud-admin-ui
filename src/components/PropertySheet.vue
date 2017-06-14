<template>
    <section>

        <el-table :data="properties"
                  stripe
                  highlight-current-row
                  empty-text="暂无数据"
                  border row-key="name">
            <el-table-column
                    prop="name"
                    :label="title">
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
    export default {
        props: ['title', 'properties'],
        data() {
            return {
            }
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style scoped>
    .bg-purple-dark {
        background: #99a9bf;
    }

    .grid-content {
        min-height: 36px;
    }
</style>
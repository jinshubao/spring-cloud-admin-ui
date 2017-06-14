<template>
    <el-card class="box-card">
        <span style="line-height: 36px;">{{title}}</span>
        <el-table :data="properties"
                  :stripe="true"
                  :show-header="false"
                  @cell-mouse-enter="cellMouseEnter"
                  @cell-mouse-leave="cellMouseLeave"
                  highlight-current-row
                  empty-text="暂无数据"
                  border row-key="name">
            <el-table-column
                    prop="name">
            </el-table-column>
            <el-table-column
                    prop="value">
            </el-table-column>
            <el-table-column>
                <template scope="scope">
                    <el-button v-show="mouseEnterRow == scope.row"
                               size="small"
                               @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button v-show="mouseEnterRow == scope.row"
                               size="small"
                               type="danger"
                               @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :title="currentRow.title" :visible.sync="dialogFormVisible">
            <el-form :model="currentRow">
                <el-form-item :label="currentRow.name">
                    <el-input type="textarea" placeholder="" v-model="currentRow.value"
                              :autosize="{ minRows: 1, maxRows: 20}"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="editCommit(currentRow)">确 定</el-button>
            </div>
        </el-dialog>
    </el-card>
</template>
<script>
    export default {
        props: ['title', 'properties'],
        data() {
            return {
                dialogFormVisible: false,
                currentRow: {},
                mouseEnterRow: {}
            }
        },
        methods: {
            cellMouseEnter(row, column, cell, event){
                this.mouseEnterRow = row;
            },
            cellMouseLeave(row, column, cell, event){
                this.mouseEnterRow = {};
            },
            handleEdit(index, row){
                this.currentRow = JSON.parse(JSON.stringify({title: this.title, name: row.name, value: row.value}));
                this.dialogFormVisible = true;
            },
            editCommit(row){
                this.dialogFormVisible = false;
                this.$emit('editProperty', {title: this.title, name: row.name, value: row.value})
            },
            handleDelete(index, row){
                this.$confirm('确认删除' + row.name + '吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$emit('deleteProperty', {title: this.title, name: row.name, value: row.value})
                }).catch(() => {

                });
            }
        },
        mounted() {

        }
    }
</script>

<template>
    <section>
        <search-bar @search="searchByKeyword"></search-bar>
        <property-sheet v-for="(item, index) in envs"
                        :title="item.title"
                        :properties="item.properties"
                        :key="index"
                        @editProperty="editProperty"
                        @deleteProperty="deleteProperty">
        </property-sheet>
        <el-dialog :title="currEditProperty.title"
                   :visible.sync="dialogFormVisible"
                   :close-on-click-modal="false">
            <el-form :model="currEditProperty">
                <el-form-item :label="currEditProperty.name">
                    <el-input type="textarea" placeholder="" v-model="currEditProperty.value"
                              :autosize="{ minRows: 1, maxRows: 20}"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="editCommit(currEditProperty)" :loading="isEdit">确 定</el-button>
            </div>
        </el-dialog>
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
                envs: [],
                isEdit: false,
                dialogFormVisible: false,
                currEditProperty: {}
            }
        },
        methods: {
            searchByKeyword: function (keyword) {
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
            },

            deleteProperty: function (property) {
                this.$confirm('确认删除' + property.name + '吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    setTimeout(() => {
                        console.info("delete success")
                    }, 2000);
                }).catch(() => {

                });

            },

            editProperty: function (property) {
                this.currEditProperty = property;
                this.dialogFormVisible = true;

            },
            editCommit: function (property) {
                this.isEdit = true;
                setTimeout(() => {
                    this.isEdit = false;
                    this.dialogFormVisible = false;
                    console.info("edit success")
                }, 2000);
            }

        },
        mounted() {
            console.info('Environment mounted');
            this.getEnvironment()
        }
    }
</script>
<template>
    <Card>
        <p slot="title">{{title}}</p>
        <Table stripe border :columns="columns" :data="properties" no-data-text="暂无数据" :show-header="false"></Table>
    </Card>
</template>
<script>
    export default {
        props: ['title', 'properties'],
        data() {
            return {
                dialogFormVisible: false,
                currentRow: {},
                mouseEnterRow: {},
                columns:[
                    {
                        title: 'name',
                        key: 'name'
                    },
                    {
                        title: 'value',
                        key: 'value'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.editProperty(params)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ]
            }
        },
        methods: {
            editProperty(row){
                this.$emit('editProperty', {title: this.title, name: row.name, value: row.value})
            },
            deleteProperty(row){
                this.$emit('deleteProperty', {title: this.title, name: row.name, value: row.value})
            }
        },
        mounted() {

        }
    }
</script>

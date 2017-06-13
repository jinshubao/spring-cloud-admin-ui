<template>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item :index="item.path" v-for="(item,index) in $router.options.routes" :key="item.path">
            <i :class="item.iconCls"></i>{{item.name}}
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '0'
            }
        },
        methods: {

        },
        mounted() {
        }
    }
</script>

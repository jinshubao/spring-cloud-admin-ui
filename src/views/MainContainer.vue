<template>
    <el-row>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </el-row>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods() {

        },
        mounted() {

        }
    }
</script>
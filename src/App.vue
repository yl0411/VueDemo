<template>
    <div id="app">
        <div class="menu_wrap">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :unique-opened="true" :router="true" @open="handleOpen" @close="handleClose">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">组件</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">Basic</span>
                        <el-menu-item index="/icon">Icon 图标</el-menu-item>
                        <el-menu-item index="/button">Button 按钮</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <span slot="title">Form</span>
                        <el-menu-item index="/radio">Radio 单选框</el-menu-item>
                        <el-menu-item index="/checkbox">Checkbox 多选框</el-menu-item>
                        <el-menu-item index="/input">Input 输入框</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/alert">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Alert 警告</span>
                </el-menu-item>
                <el-menu-item index="dialog">
                    <i class="el-icon-document"></i>
                    <span slot="title">Dialog 对话框</span>
                </el-menu-item>
                <el-menu-item index="/banner">
                    <i class="el-icon-setting"></i>
                    <span slot="title">Carousel 走马灯</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-news"></i>
                        <span slot="title">基础</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/for">列表渲染</el-menu-item>
                        <!-- <el-menu-item index="vuex2">核心</el-menu-item> -->
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-news"></i>
                        <span slot="title">路由</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item @click="goRouter(4)" index="">路由传参</el-menu-item>
                        <el-menu-item index="/router">路由守望</el-menu-item>
                        <!-- <el-menu-item index="vuex2">核心</el-menu-item> -->
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-upload"></i>
                        <span slot="title">Vuex</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/vuex1">入门</el-menu-item>
                        <!-- <el-menu-item index="vuex2">核心</el-menu-item> -->
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <!-- router插座 -->
        <transition>
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data () {
            return {
                isCollapse: true
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            goRouter(ID){
                this.$router.push({
                    path: '/router1/' + ID
                })
            }
        }
    }
</script>

<style>
    body,html{
        margin: 0;
        padding: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 1400px;
        margin: 0 auto;
        position: relative;
    }
    .menu_wrap{
        position: absolute;
        top: 0;
        left: 0;
    }
    .menu_wrap{
        width: 201px;
        display: inline-block;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
        max-width: 200px;
    }
    .body_content{
        width: 1180px;
        max-width: 1180px;
        display: inline-block;
        margin-left: 210px;
        height: auto;
    }
</style>

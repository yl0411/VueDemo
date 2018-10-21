<template>
    <div class="body_content">
        <el-row>
            <el-button icon="el-icon-plus" circle @click="vuex"></el-button>
            <el-tag>{{number}}</el-tag>
            <el-button icon="el-icon-minus" circle @click="vuexs"></el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Vuex1',
        data() {
            return {
                number: 1
            }
        },
        methods: {
            vuex: function(){
                this.$store.commit('add')
                this.$data.number = this.$store.state.num;
            },
            vuexs: function(){
                this.$store.commit('jian')
                this.$data.number = this.$store.state.num;
            }
        },
        mounted(){
        }
    }
</script>

<style scoped>
</style>

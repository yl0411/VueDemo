<template>
    <div class="body_content">
        <el-button @click="getParams">获取参数</el-button>
    </div>
</template>

<script>
	export default {
		name: 'Routers1',
		data() {
			return {

			}
		},
		methods: {
            getParams: function(){
                console.log(this.$router.history.current.params.id);
            }
		}
	}
</script>

<style scoped>
</style>

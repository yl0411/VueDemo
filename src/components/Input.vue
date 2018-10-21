<template>
    <div class="body_content">
		<el-input
		    placeholder="请输入内容"
		    v-model="input10"
		    clearable>
		</el-input>
    </div>
</template>

<script>
export default {
    name: 'Input',
	data() {
  		return {
        	input10: ''
      	}
    }
}
</script>

<style scoped>
</style>

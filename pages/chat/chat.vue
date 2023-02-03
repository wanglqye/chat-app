<template>
	<comtarbar class="comtarbar">
		<template #center>
			<view class="title">
				孙小果
			</view>
		  </template>
		  <template #right>
			  <image src="../../static/images/more.png" mode=""></image>
		  </template>
	</comtarbar>
</template>

<script setup>
	import { onMounted,getCurrentInstance, ref } from "vue";
    import comtarbar from '../../components/comtarbar.vue'
	
	let userId = ref('')
	
	onMounted(()=>{
		let options = getCurrentInstance()
		userId.value = options.attrs.id
	})
</script>

<style lang="scss">
.comtarbar{
	background: #f4f4f4;
	.title{
		text-align: center;
		line-height: 88rpx;
		font-size: 40rpx;
	}
	image{
		width: 52rpx;
		height: 12rpx;
	}
}
</style>

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
	import comtarbar from '../../components/comtarbar.vue'
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

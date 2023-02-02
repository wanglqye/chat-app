<template>
	<view class="top-bar">
		<view class="left-content"><slot name="left"></slot></view>
		<view class="right-content">
			<image src="../static/images/search.png" mode=""></image>
			<image src="../static/images/add.png" mode=""></image>
		</view>
	</view>
</template>

<script setup>
	import { defineProps }  from 'vue'
</script>

<style lang="scss">
	.top-bar {
		display: flex;
		padding: 20rpx;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid ;
		border-color: $uni-border-color;
		.left-content{
		}
		.right-content{
			image{
				width: 38rpx;
				height: 38rpx;
				margin-right: 20rpx;
			}
		}
	}
</style>
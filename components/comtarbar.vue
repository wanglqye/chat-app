<template>
	<view class="combox">
		<view class="left" @tap="goback"><image src="../static/images/common/back.png" mode="widthFix"></image></view>
		<view class="center"><slot name="center"></slot></view>
		<view class="right"><slot name="right"></slot></view>
	</view>
</template>

<script setup>
	const goback = () => {
		uni.navigateBack(1)
	}
</script>

<style lang="scss">
.combox {
	height: 88rpx;
	width: 100%;
	display: flex;
	.left {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		image {
			width: 24rpx;
			height: 24rpx;
		}
	}
	.center {
		flex: 7;
	}
	.right {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>

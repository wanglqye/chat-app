<template>
	<view class="top-bar">
		<view class="main-bar">
			<view class="left-content"><slot name="left"></slot></view>
			<view class="right-content">
				<image src="../static/images/new_search.png" mode="" @tap="gotoSearch"></image>
				<image src="../static/images/add.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script setup>
	
	function gotoSearch(){
		uni.navigateTo({
			url:'/pages/search/search'
		})
	}
</script>

<style lang="scss">
	.top-bar {
		display: flex;
		width: 100%;
		align-items: center;
		border-bottom: 1px solid ;
		border-color: $uni-border-color;
		.main-bar{
			display: flex;
			flex:1;
			justify-content: space-between;
			align-items: center;
			padding: 0 20rpx;
		}
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
<template>
	<view class="content">
		<view class="top-bar">
			
		</view>
		<view class="main-content">
			<view class="cont-img">
				<image src="../../static/images/chat.png" mode=""></image>
			</view>
			<view class="cont-main">
				<text class="cont-title">登录</text>
				<text class="cont-desc">您好，欢迎来到CHat ~</text>
				<view class="cont-inparea">
					<input v-model="state.username"  type="text" class="cont-inp" placeholder="用户名/邮箱">
					<input v-model="state.pwd"  type="text" class="cont-inp" placeholder="密码">
				</view>
				<view class="cont-button">
					<view class="btn-style" @tap="submit">登录</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive,inject } from "vue";
import {request} from '../../api/http.js'
	
	
	const state = reactive({
		username:'王野',
		pwd:'123456'
	})
	
	const submit = async () => {
		console.log('??')
	  let res = await request({
			url:'/login',
			data:state,
			method:"POST"
		})
		console.log(res)
		if(res.status == 200){
			uni.switchTab({
				url:'/pages/index/index'
			})
		}
	}

	
</script>

<style lang="scss">
.top-bar{
	width: 100%;
	height: 88rpx;
	background-color: palegreen;
}
.main-content{
	margin-top: 88rpx;
	.cont-img{
		text-align: center;
	}
	.cont-main{
		display: flex;
		flex-direction: column;
		margin: 30rpx 60rpx;
		.cont-title{
			font-size: 56rpx;
			color: #272832;
			font-weight: bold;
		}
		.cont-desc{
			font-size: 40rpx;
			margin: 26rpx 0;
			color: $uni-text-color-disable;
		}
		.cont-inparea{
			.cont-inp{
				padding: 26rpx 10rpx 26rpx 0;
				border-bottom: 1px solid $uni-border-color;
			}
		}
		.cont-button{
			display: flex;
			justify-content: center;
			margin-top: 60rpx;
			.btn-style{
				width: 520rpx;
				height: 96rpx;
				background-color: $uni-color-primary;
				text-align: center;
				line-height: 96rpx;
				color: #272832;
				border-radius: $uni-border-radius-lg;
			}
		}
	}
	image{
		width: 100rpx;
		height: 100rpx;
	}
}
</style>

<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-content">
				<view class="top-bar-left">
					<image src="../../static/images/avatar.png" mode=""></image>
				</view>
				<view class="top-bar-text">
					<text>聊天</text>
				</view>
				<view class="top-bar-right">
					<image src="../../static/images/new_search.png" mode="" class="first-img"></image>
					<image src="../../static/images/add.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="main-content">
			<view class="msg-item">
				<view class="item-avatar item-adduser">
					<image src="../../static/images/add-user.png" mode=""></image>
				</view>
				<view class="item-textarea">
					<view class="item-name">
						好友请求
					</view>
					<view class="item-msg">
						
					</view>
				</view>
				<view class="item-time">
					上午7:45
				</view>
			</view>
			<view class="msg-list">
				
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted,ref } from "vue";
	const msgList = ref([])
	
	onMounted(() => {
		msgList.value = [
			{
				avator:'https://www.apizl.com/uploads/apizl/image/2017/12/12/1513058537415773.jpg',
				username:'陆柒柒',
				recentMsg:'就是你的那稍等万阿萨德,哈哈',
				time:'11:20',
				msgNum:'8'
			},
			{
				avator:'https://www.apizl.com/uploads/apizl/image/2017/12/12/1513058537415773.jpg',
				username:'陆柒柒',
				recentMsg:'就是你的那稍等万阿萨德,哈哈',
				time:'11:20',
				msgNum:'8'
			},
			{
				avator:'https://www.apizl.com/uploads/apizl/image/2017/12/12/1513058537415773.jpg',
				username:'陆柒柒',
				recentMsg:'就是你的那稍等万阿萨德,哈哈',
				time:'11:20',
				msgNum:'8'
			},
			{
				avator:'https://www.apizl.com/uploads/apizl/image/2017/12/12/1513058537415773.jpg',
				username:'陆柒柒',
				recentMsg:'就是你的那稍等万阿萨德,哈哈',
				time:'11:20',
				msgNum:'8'
			},
		]
		console.log(msgList.value)
	})
	
</script>

<style lang="scss">
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.top-bar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 88rpx;
		box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.1);
		.top-bar-content{
			display: flex;
			height: 88rpx;
			align-items: center;
			padding: 0 10px;
		}
		.top-bar-left{
			width: 120rpx;
			image{
				width: 68rpx;
				height: 68rpx;
				border-radius: 16rpx;
			}
		}
		.top-bar-text{
			flex:1;
			text-align: center;
			text{
				color: 	$uni-color-primary;
				font-size: 34rpx;
			} 
		}
		.top-bar-right{
			display: flex;
			width: 120rpx;
			justify-content: flex-end;
			image{
				width: 26px;
				height: 26px;
			}
			.first-img{
				margin-right: 26rpx;
			}
		}
	}
	.main-content{
		margin-top: 88rpx;
		padding: 30rpx 30rpx;
		.msg-item{
			display: flex;
			background-color: palegreen;
			.item-avatar{
				width: 96rpx;
				height: 96rpx;
				border-radius: $uni-border-radius-base;
				background-color: $uni-color-primary;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 60%;
					height: 60%;
				}
			}
		}
	}
</style>

<template>
	<view class="content">
		<!-- <NavHeader/ > -->
		<view class="top-bar">
			<view class="top-bar-content">
				<view class="top-bar-left">
					<image src="https://www.apizl.com/uploads/apizl/image/2017/12/12/1513058537415773.jpg" mode=""></image>
				</view>
				<view class="top-bar-text">
					<text class="bar-title">CHat</text>
				</view>
				<view class="top-bar-right">
					<image src="../../static/images/new_search.png" mode="" class="first-img" @click="gotoSearch"></image>
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
						就是你的那额，不用点开始速就是你的那额，不用点开始速就是你的那额，不用点开始速
					</view>
				</view>
				<view class="item-time">
					上午7:45
				</view>
			</view>
			<view class="msg-list" v-for="item in msgList" :key="item.username">
				<view class="msg-item">
					<view class="item-avatar">
						<image :src="item.avator" ></image>
					</view>
					<view class="item-textarea">
						<view class="item-name">
							{{item.username}}
						</view>
						<view class="item-msg">
							{{item.recentMsg}}
						</view>
					</view>
					<view class="item-time">
						{{item.time}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted,ref } from "vue";

// import NavHeader from '../../components/navHeader.vue'
	const msgList = ref([])
	
	const gotoSearch = () => {
		uni.navigateTo({
			url:'/pages/search/search'
		})
	}
	
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
		.bar-title{
			font-weight: bold;
		}
		.top-bar-content{
			display: flex;
			height: 88rpx;
			align-items: center;
			padding: 0rpx 20rpx;
		}
		.top-bar-left{
			width: 120rpx;
			image{
				width: 56rpx;
				height: 56rpx;
				border-radius: 16rpx;
			}
		}
		.top-bar-text{
			flex:1;
			text-align: center;
			text{
				color: 	#000;
				font-size: 34rpx;
			} 
		}
		.top-bar-right{
			display: flex;
			width: 120rpx;
			justify-content: flex-end;
			image{
				width: 38rpx;
				height: 38rpx;
			}
			.first-img{
				margin-right: 26rpx;
			}
		}
	}
	.main-content{
		margin-top: 88rpx;
		flex:1;
		width: 100%;
		.msg-item{
			display: flex;
			padding: 32rpx 32rpx 10rpx;
			.item-avatar{
				width: 96rpx;
				height: 96rpx;
				margin-right: 32rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: $uni-border-radius-base;
				}
			}
			.item-adduser{
				width: 96rpx;
				height: 96rpx;
				margin-right: 32rpx;
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
			.item-textarea{
				flex:1;
				width: 0;
				overflow: hidden;
				.item-name{
					font-size: 36rpx;
					color: #272832;
				}
				.item-msg{
					color: $uni-text-color-grey;
					font-size: 28rpx;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
			}
			.item-time{
				font-size: 24rpx;
				color: $uni-text-color-disable;
			}
		}
	}
</style>

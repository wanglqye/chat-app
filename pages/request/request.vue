<template>
	<view>
		<comtarbar class="comtarbar">
			<template #center>
				<view class="title">好友请求</view>
			</template>
		</comtarbar>
		<view class="main">
			<template  v-if="applyList.length>0">
				<view class="request-item" v-for="item in applyList" :key="item.applyId">
					<view class="r_imgbox"><image :src="item.avatars" mode="aspectFill"></image></view>
					<view class="r_top">
						<view class="refused" @tap="deal(item,'Refused')">拒绝</view>
						<view class="agree" @tap="deal(item,'agree')">同意</view>
					</view>
					<view class="r_middle">
						<view class="r_name">{{item.name}}</view>
						<!-- <view class="r_time">{{item.time| dateFormat}}</view> -->
						<view class="r_time">{{$filters.dateFormat(item.time)}}</view>
					</view>
					<view class="r_bottom">备注：{{item.note==""?"没有备注信息":item.note}}</view>
				</view>
			</template>
			<template v-else>
				<view class="no_request">暂无好友申请</view>
			</template>
		</view>
	</view>
</template>

<script setup>
	import { onMounted, ref } from 'vue'
	import { useStore } from 'vuex'
	import comtarbar from '../../components/comtarbar.vue';
	import {request} from '../../api/http.js'
	const applyList = ref([])
	const store = useStore()
	// 获取请求
	const getAcquire = async () => {
		let res = await request({
			url:'/friend/getFriendApply',
			data:{ type:'details'}
		})
		if(res.status == 200) {
			console.log(res);
			applyList.value = res.addRequire.applyList
		}
	}
	// 处理请求
	const deal = async (item,operation) => {
		let res = await request({
			url:'/friend/deal',
			data:{
				applyId:item.applyId,
				nickName:item.name,
				operation,
			},
			method:"POST"
		})
		console.log(res);
		if(res.status){
			uni.showToast({
				title:res.msg,
				duration:2000
			})
			store.dispatch("dealFriend",{applyId:item.applyId,operation,token:uni.getStorageSync("token")})
			getAcquire()
			store.dispatch("getFriends")
			store.dispatch("getAcquire")
		}
	}
	onMounted(() => {
		getAcquire()
	})
</script>

<style lang="scss" scoped>
.comtarbar {
	border-bottom: 2rpx solid #ccc;
	background: white;
	.title {
		line-height: 88rpx;
		padding: 0rpx 20rpx;
	}
}
.main .request-item:first-child {
	margin-top: 100rpx;
}
.main {
	padding-top: 88rpx;
	.request-item {
		position: relative;
		background: white;
		margin: 10rpx 30rpx;
		margin-bottom: 100rpx;
		box-shadow: 0 -1px 8px -1px rgba(0, 0, 0, 0.5);
		border-radius: 10rpx;
		padding-bottom: 30rpx;
		.r_imgbox {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%, -50%);
			height: 144rpx;
			width: 144rpx;
			border-radius: 50%;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.r_top {
			width: 90%;
			margin: 0rpx 5%;
			display: flex;
			justify-content: space-between;
			// background: red;
			view {
				width: 160rpx;
				height: 64rpx;
				line-height: 64rpx;
				font-size: 32rpx;
				text-align: center;
				border-radius: 32rpx;
				margin-top: 40rpx;
			}
			.refused {
				color: rgba(255, 93, 91, 1);
				background: rgba(255, 93, 91, 0.1);
			}
			.agree {
				color: rgba(39, 40, 50, 1);
				background: rgba(255, 228, 49, 1);
			}
		}
		.r_middle {
			width: 90%;
			margin: 0 5%;
			margin-top: 10rpx;
			.r_name {
				font-size: 36rpx;
				text-align: center;
			}
			.r_time {
				font-size: 24rpx;
				text-align: center;
				color: rgba(39, 40, 50, 0.4);
			}
		}
		.r_bottom {
			width: 90%;
			margin: 0rpx 5%;
			margin-top: 30rpx;
			background: rgba(243, 244, 246, 1);
			border-radius: 10rpx;
			box-sizing: border-box;
			padding: 20rpx 15rpx;
			color: rgba(39, 40, 50, 0.8);
			font-size: 28rpx;
		}
	}
}
.no_request{
	color: #ccc;
	font-size: 34rpx;
	text-align: center;
	height: 40vh;
	line-height: 40vh;
}
/* #ifdef APP-PLUS */
	.main{
		padding-top: 140rpx;
	}
/* #endif */
</style>

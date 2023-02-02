<template>
	<view class="content">
		<view class="search-area">
			<view class="inp-area">
				<input type="text" class="search-inp" v-model="searchval">
				<image src="../../static/images/search.png" @tap="search"></image>
			</view>
			<text @tap="cancle">取消</text>
		</view>
		<view class="main-content" v-if="data.length > 0">
			<view class="main-user">
				<text class="main-title">用户</text>
				<view class="user-list" v-for="item in data">
					<view class="user-content">
						<!-- <image :src="item.avator" mode=""></image> -->
						<image src="https://www.apizl.com/uploads/apizl/image/2017/12/12/1513058537415773.jpg" mode=""></image>
						<text>{{item.name}}</text>
						<view class="list-btn" :class="[item.status == 0 ? 'isFriend':'']">{{item.status == 0 ? '发消息' : '加好友'}}</view>
					</view> 
				</view>
			</view>
			<!-- <view class="main-user">
				<text class="main-title">群组</text>
				<view class="user-list" v-for="item in data">
					<view class="user-content">
						<image :src="item.avator" mode=""></image>
						<text>{{item.username}}</text>
						<view class="list-btn" :class="[item.status == 0 ? 'isFriend':'']">{{item.status == 0 ? '发消息' : '加群'}}</view>
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script setup>
	import { ref, watch } from 'vue';
	import { request } from '../../api/http';
	const searchval = ref('')
	const data = ref([])
	watch(searchval,(newval,oldval)=>{
		console.log('old',oldval)
		console.log('new',newval)
	})
	const cancle = () => {
		// 清空搜索并返回上一页
		searchval.value = ''
		uni.navigateBack(1)
	}
	const search = async () => {
		console.log('???',searchval.value)
		let res = await  request({
			url:"/user/find",
			data:{
				searchval:searchval.value
			},
			method:"get"
		})
		console.log(res)
		if(res.status && res.data && res.data.length > 0){
			data.value = res.data
		}
	}
	// const data = [
	// 	{
	// 		avator:'https://www.apizl.com/uploads/apizl/image/2017/12/12/1513058537415773.jpg',
	// 		username:'陆柒柒',
	// 		status:0
	// 	},
	// 	{
	// 		avator:'https://www.apizl.com/uploads/apizl/image/2017/12/12/1513058537415773.jpg',
	// 		username:'张三',
	// 		status:0
	// 	},
	// 	{
	// 		avator:'https://www.apizl.com/uploads/apizl/image/2017/12/12/1513058537415773.jpg',
	// 		username:'小王',
	// 		status:0
	// 	},
	// 	{
	// 		avator:'https://www.apizl.com/uploads/apizl/image/2017/12/12/1513058537415773.jpg',
	// 		username:'小红',
	// 		status:1
	// 	},
	// ]
</script>

<style lang="scss">
.search-area{
	padding:14rpx 32rpx;
	display: flex;
	align-items: center;
	border-bottom: 1px solid $uni-border-color;
	.inp-area{
		width: 80%;
		background-color: aliceblue;
		padding: 12rpx;
		margin-right: 30rpx;
		position: relative;
		.search-inp{
			padding-right: 60rpx;
		}
		image{
			position: absolute;
			right: 20rpx;
			width: 40rpx;
			height:40rpx;
			top: 10rpx;
		}
	}
	text{
		font-size: 28rpx;
		flex:1;
		text-align: center;
	}
}
.main-content{
	padding: 32rpx;
	.main-user{
		margin-bottom: 60rpx;
		.main-title{
			font-size: 38rpx;
			font-weight: bold;
		}
	}
	.list-btn{
		background-color: rgba(74,170,255,0.10);;
		color:#4AAAFF ;
	}
	.isFriend{
		background-color: $uni-color-primary;
		color: #272832;
	}
	.user-content{
		display: flex;
		align-items: center;
		margin: 20rpx 0;
		image{
			width: 80rpx;
			height: 80rpx;
			border-radius: $uni-border-radius-base;
			margin-right: 32rpx;
		}
		text{
			flex:1;
			font-size: 32rpx;
		}
		.list-btn{
			padding: 8rpx 26rpx;
			border-radius: $uni-border-radius-base;
			font-size: 24rpx;
			width: 80rpx;
			text-align: center;
		}
	}
}
</style>

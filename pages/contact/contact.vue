<template>
	<view class="content">
		<navHeader class="top-bar">
			<template #left>
				<text class="title-text">通讯录</text>
			</template>
		</navHeader>
		<scroll-view class="main-content">
			<template v-for="(value,key,index) in friends">
				<view class="ground" v-if="value.length> 0">
					<view class="ground-item" :id="key">{{ key }}</view>
					<view class="item" v-for="(item,index) in value" @tap="goInfo(item._id)">
						<view class="item-left">
							<view class="imgbox"><image :src="item.user.avatars || 'https://www.apizl.com/uploads/apizl/image/2017/12/12/1513058537415773.jpg'" mode="aspectFill"></image></view>
						</view>
						<view class="item-right">{{ item.nickName }}</view>
					</view>
				</view>
			</template>
			<view class="total">共有 {{friendsTotal}} 位好友</view>
			<!-- <view style="height: 8000rpx;background-color: pink"></view> -->
		</scroll-view>
		<view class="alnavbar" @tap="clickAlnavbar">
			<view class="al-item" data-value="top">↑</view>
			<view class="al-item" v-for="(item, index) in alphabet" :key="index" :data-value="item">{{ item }}</view>
		</view>
	</view>
</template>

<script setup>
	import navHeader from '../../components/navHeader.vue'
	import { useStore } from 'vuex'
	import { ref,onMounted,computed,watch } from "vue";
	import { request } from '../../api/http'
	
	const store = useStore()
	const friend_list = store.state.friend_list
	// const friends = computed(() => store.getters.getFriends)
	const friends = computed(()=>store.getters.getFriends)
	const friendsTotal = computed(()=>store.getters.getTotal)
	// const friendsTotal = store.state.friendsTotal
	const alphabet = ref()
	
	// 生成右侧导航条数据
	const getAlphabet = () => {
		let arr = []
		for(let key in friends._value){
			if(friends.value[key].length > 0) {
				arr.push(key)
			}
		}
		console.log('arr获取咯',arr)
		alphabet.value = arr
	} 
	// 点击字母导航进行跳转对应锚点
	function clickAlnavbar(e){
		uni.pageScrollTo({
			duration: 0,
			scrollTop: 0
		});
		const target = e.target.dataset.value
		if (target == 'top') {
			return;
		}
		let id = '#' + target;
		console.log('??????',uni.createSelectorQuery().select(id).boundingClientRect())
		uni.createSelectorQuery().select(id).boundingClientRect((res,err) => {
			if(res) {
				let top = res.top;
				// #ifdef APP-PLUS
				uni.pageScrollTo({
					duration: 0,
					scrollTop: top - 68
				});
				// #endif
				// #ifdef H5
				uni.pageScrollTo({
					duration: 0,
					scrollTop: top - 48
				});
				// #endif
			}
		}).exec()
		// const query = uni.createSelectorQuery().in(this);
		// console.log(query)
		// query.select('#L').boundingClientRect(data => {
		//   console.log("得到布局位置信息" + JSON.stringify(data));
		//   console.log("节点离页面顶部的距离为" + data.top);
		// }).exec();
		
		console.log('??!!!',target)
	}
	
	// 跳转详情页
	function goInfo(id){
		console.log(id)
		uni.navigateTo({
			url:'../chat/chat?id='+ id
		})
	}
	
	
	onMounted(()=>{
		store.dispatch('getFriends')
		getAlphabet() 
	})
	watch(friends,(newValue,oldValue)=>{
		console.log('oldValue',oldValue)
		console.log('newVale',newValue)
		getAlphabet()
	},{deep:true})
</script>

<style lang="scss">
.top-bar{
	position: fixed;
	z-index: 1001;
	top: 0;
	left: 0;
	height: 88rpx;
	background: rgba(255, 255, 255, 1);
}
.title-text{
	color: #000;
	font-size: 36rpx;
}
.main-content {
	padding-bottom: 0rpx !important; 
	padding-top: 104rpx;
	padding-bottom: $uni-spacing-col-base;
	.item {
		display: flex;
		height: 88rpx;
		margin: 10rpx 10rpx;
		position: relative;
		.item-left {
			flex: 2;
			display: flex;
			justify-content: center;
			.imgbox {
				height: 76rpx;
				margin: 6rpx;
				width: 76rpx;
				border-radius: 10rpx;
				overflow: hidden;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
		.item-right {
			flex: 8;
			height: 88rpx;
			line-height: 88rpx;
			font-size: 30rpx;
		}
		.tip {
			background: red;
			padding: 10rpx;
			line-height: 26rpx;
			position: absolute;
			right: 40rpx;
			top: 20rpx;
			font-size: 26rpx;
			color: white;
			border-radius: 20rpx;
		}
	}
	.ground-item {
		background: rgb(240, 240, 240);
		height: 50rpx;
		color: rgb(99, 99, 99);
		font-size: 26rpx;
		line-height: 50rpx;
		text-indent: 46rpx;
	}
}
.main .ground .item:not(:last-child) .item-right {
	border-bottom: 2rpx solid rgb(223, 223, 223);
}
.total{
	background: rgb(240, 240, 240);
	padding: 16rpx 0rpx;
	text-align: center;
	color: #7a7a7a;
	font-size: 28rpx;
}
.alnavbar {
	position: fixed;
	top: 50%;
	right: 20rpx;
	transform: translateY(-50%);
	z-index: 990;
	color: rgb(120, 120, 120);
	font-size: 24rpx;
	text-align: center;
	.al-item {
		margin: 4rpx 0rpx;
	}
}
</style>

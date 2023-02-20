<template>
	<view class="panel">
		<view class="panel-top">
			<view class="panel-left">
				<view class="sound">
					<image src="../static/images/voice.png" lazy-load mode="widthFix"></image>
				</view>
				<!-- <view class="sound">
					<image src="../static/images/keypress.png" lazy-load mode="widthFix"></image>
				</view> -->
			</view>
			<view class="panel-center">
				<view class="inputbox">
					<textarea class="c_input" v-model="content" auto-height="true"></textarea>
				</view>
				<!-- <view class="inputbox s_btn">
					按住说话
				</view> -->
			</view>
			<view class="panel-right">
				<view class="emoji"  @tap="show('emoji')"><image src="../static/images/chat/emoji.png" mode="widthFix"></image></view>
				<view class="add" @tap="show('model')"><image src="../static/images/chat/add.png" mode="widthFix"></image></view>
				<view class="send"  @tap="sendMsg"><view class="btnbox">发送</view></view>
			</view>
		</view>
		<view class="panel-bottom" :animation="state.animationData">
			<emoji @emotion="emotion" v-show="state.type == 'emoji'"></emoji>
			<view class="bottom-box" v-show="state.type == 'model'">
				<view class="module" @tap="selectImg">
					<view class="module-item"><image lazy-load src="../static/images/chat/photo.png" mode="widthFix"></image></view>
					<view class="module-title">照片</view>
				</view>
				<view class="module">
					<view class="module-item"><image lazy-load src="../static/images/chat/camera.png" mode="widthFix"></image></view>
					<view class="module-title">拍摄</view>
				</view>
				<view class="module" @tap="chooseLocation">
					<view class="module-item"><image lazy-load src="../static/images/chat/position.png" mode="widthFix"></image></view>
					<view class="module-title">位置</view>
				</view>
				<view class="module">
					<view class="module-item"><image lazy-load src="../static/images/chat/video.png" mode="widthFix"></image></view>
					<view class="module-title">视频</view>
				</view>
				<view class="module">
					<view class="module-item"><image lazy-load src="../static/images/chat/file.png" mode="widthFix"></image></view>
					<view class="module-title">文件</view>
				</view>
				<!-- <view class="module" @tap="money">
					<view class="module-item"><image class="hongbao" lazy-load src="../static/images/chat/hongbao.png" mode="widthFix"></image></view>
					<view class="module-title">红包</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref,reactive,onMounted } from 'vue';
	import emoji from './emoji.vue'
	const state = reactive({
		type:'emoji',
		isShow:false,
		height:0,
		animationData:{}
	})
	onMounted(() => {
		getMeasureHeight()
	})
	
	const emit = defineEmits(['measure'])
	
	function getMeasureHeight(){
		const query = uni.createSelectorQuery().in(this)
		query.select('.panel').boundingClientRect(data => {
				state.height = data.height;
				setTimeout(()=> {
					emit('measure',data.height)
				})
		}).exec()
	}
	 
	// 动画
	const show = (type) => {
		console.log('??')
		if(type == state.type){
			state.isShow = !state.isShow
		}else{
			state.type = type
			console.log(state.type);
			if(!state.isShow){
				state.isShow = !state.isShow
			}else{
				return;
			}
		}
		let animation = uni.createAnimation({
			duration:1000,
			timingFunction:'ease'
		})
		if (state.isShow) {
			animation.height('380rpx').step();
		} else {
			animation.height('0rpx').step();
		}
		setTimeout(() => {
			const query = uni.createSelectorQuery().in(this);
			query
			.select('.panel')
			.boundingClientRect(data => {
			emit('measure', data.height);
			})
			.exec();
		}, 20);
		state.animationData = animation.export()
	}
	// 选择表情
	function emotion(emoji){
		console.log('emojo',emoji);
	}
</script>

<style lang="scss" scoped>
.panel{
	z-index:1999;
	position: fixed;
	width:100%;
	bottom: 0;
	left: 0;
	padding-bottom:  env(safe-area-inset-bottom);
	.panel-top{
		display: flex;
		overflow: hidden;
		background: #f4f4f4;
		.panel-left {
			width: 80rpx;
			.sound {
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: flex-end;
				image {
					width: 70%;
					height: 70%;
					margin-bottom: 24rpx;
				}
			}
		}
		.panel-center {
			flex: 1;
			.inputbox {
				max-height: 158rpx;
				margin: 14rpx;
				border-radius: 10rpx;
				background: rgba(252, 253, 255, 1);
				box-sizing: border-box;
				padding: 20rpx 24rpx;
				overflow: hidden;
				textarea {
					width: 100%;
					font-size: 32rpx;
				}
			}
			.s_btn {
				height: 80rpx;
		
				font-size: 32rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #b3b3b3;
			}
			.touch {
				background: #43d305;
				color: white;
			}
		}
		.panel-right {
			display: flex;
			.emoji {
				width: 80rpx;
				display: flex;
				justify-content: center;
				align-items: flex-end;
				margin-right: 4rpx;
				image {
					width: 70%;
					height: 70%;
					margin-bottom: 24rpx;
				}
			}
			.add {
				width: 80rpx;
				display: flex;
				justify-content: center;
				margin-right: 4rpx;
				align-items: flex-end;
				image {
					width: 70%;
					height: 70%;
					margin-bottom: 24rpx;
				}
			}
			.send {
				width: 120rpx;
				display: flex;
				justify-content: center;
				align-items: flex-end;
				.btnbox {
					height: 56rpx;
					line-height: 56rpx;
					color: white;
					border-radius: 10rpx;
					width: 90%;
					margin-right: 10%;
					font-size: 30rpx;
					background: rgb(4, 179, 4);
					text-align: center;
					margin-bottom: 24rpx;
				}
			}
		}
	}
	.panel-bottom {
		background: #ecedee;
		height: 0rpx;
		overflow: hidden;
		.bottom-box {
			margin: 30rpx;
			width: calc(100vw - 60rpx);
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			.module {
				width: 25%;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				margin-bottom: 30rpx;
				.module-item {
					width: 100rpx;
					height: 100rpx;
					border-radius: 10rpx;
					background: white;
					display: flex;
					justify-content: center;
					align-items: center;
					image {
						width: 60%;
						height: 60%;
					}
					.hongbao {
						width: 70%;
						height: 70%;
					}
				}
				.module-title {
					width: 100%;
					font-size: 24rpx;
					color: rgba(39, 40, 50, 0.5);
					height: 60rpx;
					line-height: 60rpx;
					text-align: center;
				}
			}
			.emoji {
				margin-top: 30rpx;
			}
		}
	}
}
</style>
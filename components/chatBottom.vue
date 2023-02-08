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
				<view class="emoji"><image src="../static/images/chat/emoji.png" mode="widthFix"></image></view>
				<view class="add" @tap="show('model')"><image src="../static/images/chat/add.png" mode="widthFix"></image></view>
				<view class="send"  @tap="sendMsg"><view class="btnbox">发送</view></view>
			</view>
		</view>
	</view>
</template>

<script setup>
	
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
}
</style>
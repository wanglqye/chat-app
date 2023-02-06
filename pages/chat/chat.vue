<template>
	<view class="content">
		<comtarbar class="comtarbar">
			<template #center>
				<view class="title">
					11
				</view>
			  </template>
			  <template #right>
				  <image src="../../static/images/more.png" mode=""></image>
			  </template>
		</comtarbar>
		<view class="messagebox">
			<scroll-view scroll-y="true" class="scroll-y" show-scrollbar="true" :scroll-top="contentHeight">
				<view class="contentbox" v-if="type == 'private'">
					<!-- <template> -->
						<view class="othermsg">
							<view class="o_imgbox">
								<image lazy-load="" src="https://www.apizl.com/uploads/apizl/image/2017/12/12/1513058537415773.jpg" mode="aspectFill"></image>
							</view>
							<rich-text class="o_msgbox" nodes="哈哈哈哈哈市大傻逼会计系哈哈哈哈哈市大傻逼会计系"></rich-text>
						</view>
					<!-- </template> -->
					<view class="mymsg">
						<view class="m_imgbox" >
							<image lazy-load  src="https://www.apizl.com/uploads/apizl/image/2017/12/12/1513058537415773.jpg" mode="aspectFill"></image>
						</view>
						<rich-text class="m_msgbox" nodes="哈哈哈哈哈市大傻逼会计系哈哈哈哈哈市大傻逼会计系"></rich-text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
	import { onMounted,getCurrentInstance, ref,computed } from "vue";
    import comtarbar from '../../components/comtarbar.vue'
	import {useStore} from "vuex"
	
	const store = useStore()
	let userId = ref('')
	const type = ref('private')
	const contentHeight = ref(0)
	
	
	const getName = computed(()=>store.getters.getName)
	
	console.log('getname,',getName)
	
	onMounted(()=>{
		let options = getCurrentInstance()
		userId.value = options.attrs.id
		store.commit("changeChatId", options.attrs.id) 
		
	})
</script>

<style lang="scss">
.comtarbar{
	background: #f4f4f4;
	height: 88rpx;
	.title{
		text-align: center;
		line-height: 88rpx;
		font-size: 40rpx;
	}
	image{
		width: 40rpx;
		height: 8rpx;
	}
}
.messagebox {
	// margin-top: 88rpx;
	background: white;
	position: relative;
	box-sizing: border-box;
	padding-bottom: 10rpx;
	background-color: papayawhip;
	height: 1500rpx;
	.scroll-y{
		height: 100%;
		.contentbox {
			display: inline-block;
			width: 100vw;
			padding-bottom: 20rpx;
			box-sizing: border-box;
			.othermsg{
				width: 100%;
				padding: 0 20rpx;
				padding-top: 20rpx;
				padding-bottom: 10rpx;
				float: left;
				view{
					float: left;
				}
				.msgbox {
					max-width: 60%;
					position: relative;
				}
				.o_msgbox {
					float: left;
					margin-left: 40rpx;
					border-radius: 10rpx;
					padding: 16rpx 10rpx;
					max-width: 60%;
					background: peachpuff;
					font-size: 28rpx;
					min-height: 40rpx;
					line-height: 40rpx;
					position: relative;
					div {
						display: inline-block !important;
					}
					image {
						display: inline-block !important;
					}
				}
				.o_imgbox {
					width: 80rpx;
					height: 80rpx;
					overflow: hidden;
					border-radius: 10rpx;
					image {
						height: 100%;
						width: 100%;
					}
				}
				/* 箭头 */
				.o_msgbox:after {
					content: '';
					width: 0;
					height: 0;
					position: absolute;
					left: -14rpx;
					top: 12px;
					border-top: solid 16rpx transparent;
					border-right: solid 16rpx peachpuff;
					border-bottom: solid 16rpx transparent;
				}
			}
			.mymsg{
				width: 100%;
				padding: 0 20rpx;
				padding-top: 20rpx;
				padding-bottom: 10rpx;
				float: right;
				view {
					float: right;
				}
				.msgbox {
					max-width: 60%;
					position: relative;
				}
				.m_imgbox {
					width: 80rpx;
					height: 80rpx;
					overflow: hidden;
					border-radius: 10rpx;
					image {
						height: 100%;
						width: 100%;
					}
				}
				.m_msgbox {
					float: right;
					margin-right: 40rpx;
					border-radius: 10rpx;
					padding: 16rpx 10rpx;
					max-width: 60%;
					background: paleturquoise;
					font-size: 30rpx;
					min-height: 40rpx;
					line-height: 40rpx;
					position: relative;
				}
				.m_msgbox::after{
					content:'';
					position: absolute;
					right: -14rpx;
					top:12rpx;
					width: 0;
					height: 0;
					border-top: solid 16rpx transparent;
					border-left: solid 16rpx paleturquoise;
					border-bottom: solid 16rpx transparent;
				}
			}
			
		}
		
	}
}
</style>

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
		<chatBottom class="chat-bottom" @measure="measure" :chatType="type" :id="userId"/>
	</view>
</template>

<script setup>
	import { onMounted,getCurrentInstance, ref,computed,reactive } from "vue";
    import comtarbar from '../../components/comtarbar.vue';
	import chatBottom from '../../components/chatBottom.vue';
	import {useStore} from "vuex"
	
	const store = useStore()
	let userId = ref('')
	const type = ref('private')
	const contentHeight = ref(0) 
	const state = reactive({
		scrHeight:0, //屏幕高度
		ctbHeight:0,  // 头部组件高度
		scrollHeight:0,  //滚动区域的视口高度
		panelHeight:0, //底部组件高度
		contentHeight:0  //聊天区域高度
 	})
	
	
	const getName = computed(()=>store.getters.getName)
	
	
	onMounted(()=>{
		getHeight() 
		let options = getCurrentInstance()
		userId.value = options.attrs.id
		console.log('userid.value',userId.value)
		type.value = options.attrs.type || 'private'
		store.commit("changeChatId", options.attrs.id) 
		
	}) 
	
	// 接收子组件高度
	const measure = (height) =>{
		console.log('子组件高度',height);
	}
	
	const getHeight = () => {
		const query = uni.createSelectorQuery().in(this)
		uni.getSystemInfo({
			success: res =>{
				state.scrHeight = res.windowHeight;
				console.log('?')
				query.select('.comtarbar').boundingClientRect(data => {
					state.ctbHeight = data.height
					state.scrollHeight = state.scrHeight - state.ctbHeight - state.panelHeight
				}).exec()
			}
		})
		console.log('queyr',query)
	}
	
	// 获取聊天区域的高度
	function getConent(){
		const query = uni.createSelectorQuery().in(this)
		query.select('.content').boundingClientRect(data => {
			if(data){
				state.contentHeight = data.height
			}
		}).exec()
	}
	
</script>

<style lang="scss">
.content{
	box-sizing: border-box;
	padding-top: var(--status-bar-height);
	background: white;
	height: 100vh;
	overflow: hidden;
	position: relative;
}
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
	// flex:1;
	height: 1300rpx;
	background: white;
	position: relative;
	box-sizing: border-box;
	padding-bottom: 10rpx;
	background-color: papayawhip;
	overflow:hidden;
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
					background: #fff;
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
					border-right: solid 16rpx #fff;
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
					background: $uni-color-primary;
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
					border-left: solid 16rpx $uni-color-primary;
					border-bottom: solid 16rpx transparent;
				}
			}
			
		}
		
	}
}
.chat-bottom{
	// width:300rpx;
	// height: 300rpx;
	background-color: pink;
}
</style>

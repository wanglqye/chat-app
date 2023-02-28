import {request} from "../api/http.js"
import io from '../js_sdk/socket-io/socket.io'
const actions = {
	connect(context,data){
		let { state } = context
		// 服务器地址
		state.socket = io.connect("ws://localhost:3008");
		console.log('链接成功',state.socket)
		let socket = state.socket;
		socket.on("news",data =>{
			console.log('data',data)
			socket.emit("qiata",{my:"data"})
		})
		// 更新新动态通知表
		socket.on("getDyNotify", () => {
			console.log("新动态")
			this.dispatch("getDyNotify")
		})
		// 登录
		// socket.emit("submit", data)
	},
	// 获取用户信息
	async getUserInfo(context) {
		let {
			state
		} = context
		let result = await request({
			url: '/user/info',
		});
		console.log('用户信息',result)
		state.user = result.data
	},
	// 获取好友列表
	async getFriends(context){
		console.log('context',context)
		let { state } = context
		let res = await request({ url:'/friend/getFriendsList'})
		state.friends = res.data;
		state.friend_list = res.friend_list
		state.friend_total = res.total
		console.log('好友列表',res)
	},
	// 获取动态通知表
	async getDyNotify(context){
		console.log('?')
		let { state } = context
		let res = await request({url:'/notify/notice'})
		console.log('············',res)
		// this.commit('changeDyNotify',res[1].data)
	},
	// 获取好友请求数量
	async getAcquire(context){
		let { state } = context
		let res = await request({url:'/friend/getFriendApply'})
		// this.commit('changeAcquire',res.data.applyList.length)
	},
	// 处理好友请求
	dealFriend(context, data) {
		let {
			state
		} = context
		state.socket.emit("deal", data)
	},
	// 发送消息
	async sendMsg(context,data){
		let { state } = context
		console.log(context,'state')
		state.socket.emit('sendMsg',data)
		if(state.chatType == 'private'){
			this.commit('updateChatMsg',{ belong:state.user._id,date:new Date(),message:data.message,type:data.type})
		}else{
			this.commit('updateChatMsg',
			{ 
				belong: state.user._id,
				user:{
					name:state.user.name,
					avatars:state.user.avatars,
					}, 
				date: new Date(), 
				message:data.message, 
				type: data.type ,
			});
		}
	}
	
}

export default actions
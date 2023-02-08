import {request} from "../api/http.js"
import socket from '../utils/socket.js'
const actions = {
	connectSocket(context,data){
		socket.connect(context,data)
	},
	// 获取用户信息
	// async getUserInfo(context) {
	// 	let {
	// 		state
	// 	} = context
	// 	let result = await request({
	// 		url: '/user/info',
	// 	});
	// 	console.log(result)
	// 	// state.user = result[1].data.user;
	// },
	// 获取好友列表
	async getFriends(context){
		console.log('context',context)
		let { state } = context
		let res = await request({ url:'/friend/getFriendsList'})
		state.friends = res.data;
		state.friend_list = res.friend_list
		state.friend_total = res.total
		console.log('好友列表',res)
	}
	
}

export default actions
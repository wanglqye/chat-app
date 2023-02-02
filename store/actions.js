import {request} from "../api/http.js"
const actions = {
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
		let res = await request({ url:'friend/friends'})
		console.log('好友列表',res)
	}
	
}

export default actions
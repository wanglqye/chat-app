import {request} from "../api/http.js"
const getters = {
	// 好友
	getFriends: state => {
		return state.friends
	},
	// 好友数量
	getTotal: state => {
		return state.friend_total
	},
	// 获取聊天用户的名称
	getName: state => {
		return state.name
	},
}

export default getters
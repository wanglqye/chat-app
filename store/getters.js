import {request} from "../api/http.js"
const getters = {
	// 获取单个通知
	getSingleNotifi: state => {
		if (state.notification.length >= 1) {
			return state.notification[state.notification.length - 1]
		} else {
			return {}
		}
	},
	// 获取所有通知
	getNotify: state => {
		return state.notification
	},
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
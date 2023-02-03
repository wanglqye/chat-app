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
}

export default getters
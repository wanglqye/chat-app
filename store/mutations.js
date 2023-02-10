import {request} from "../api/http.js"
const mutations = {
	// 修改聊天id
	changeChatId(state, id) {
		console.log('进来没',id)
		state.chatId = id
	},
	// 修改聊天的用户名（群名）
	changeChatName(state, name) {
		state.name = name
	},
	// 动态通知表
	changeDyNotify(state, array) {
		state.dyNotify = array
		this.commit("prompt")
	},
}

export default mutations
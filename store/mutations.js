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
	changeAcquire(state, number) {
		state.acquire = number;
		this.commit("prompt")
	},
	// 更新聊天信息（本地添加，减少请求）
	updateChatMsg(state,data){
		let msg_list = state.chatHistory.msg_list
		console.log('msg_list',msg_list)
		if(msg_list && msg_list.length > 0) {
			let lastItem = msg_list[msg_list.length -1]
			let time = new Date(lastItem.date).getTime()
			let current = new Date(data.date).getTime()
			let distant = (curent -time )/ 1000 / 60
			distant >= 10 ? "" : data.date = ""
			state.chatHistory.msg_list.push(data)
		}
	}
}

export default mutations
// import io from '../js_sdk/socket-io/weapp.socket.io.js'
// import io from "../js_sdk/socket-io/weapp.socket.io.js"
import io from '../js_sdk/socket-io/socket.io'

const socket = {
	// store actions
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
		// 登录
		// socket.emit("submit", data)
	}
}
export default socket
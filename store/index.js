import { createStore } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations'

const store =  createStore({
	state:{
		socket: null,              //socket.io对象
		user:null,                 //用户信息
		notification: [],          //通知
		chatHistory: {},           //聊天记录,
		chatCount:0,               //聊天信息的总数量
		name: "",                  //正在聊天的用户名称，在聊天页面的tarbar展示
		isLoading:false,		   //聊天页面加载更多动画的展示标识
		dialogueList: [],          //聊天列表，
		friends:{} ,               //好友分组列表
		friend_list:[],            //好友列表
		friend_total:0,                   //好友的数量
		groupList:{},              //群列表
		groupInfo:{},              //群详情
		g_nickName:"",			   //群内的昵称
		chatType:"",			   //聊天类型  private(私聊)  group(群聊)
		chatId:"",				   //正在聊天的用户id
		newMsgCount:0,             //新消息数量
		dyNotify:[],			   //新动态通知表
		comNotify:[],			   //评论通知表
		visitors:[], 			   //访客数组
		visi_count:0,              //访客的总数量
		visi_page:1,               //访客分页
		visi_limit:30,             //每页访客的条数
		messNotify:[],			   //留言通知表
		
		messCount:0,			   //未读留言通知的数量
		notifySum: 0,              //通知数量
		acquire: 0,                //好友请求的数量
		dialogueUnRead:0,          //统计聊天列表未读信息的数量
		newVisitor:0,			   //新访客
		count:0,				   //未读的评论数
	},
	getters,
	mutations,
	actions
})


export default store
export default {
	//首页列表
	frineds: function() {
		let friendarr = [{
				id: 1,
				imgurl: 'four.png',
				tip: 2234,
				name: '大海',
				email: 'dahai@163.com',
				time: new Date(),
				news: ' TOP 常常遇到文章标题列表布局排版时候,有的标题比较长显示不完,这个时候即又不想换行...',
			},
			{
				id: 2,
				imgurl: 'one.png',
				tip: 0,
				name: '山川',
				email: 'shanchuan@163.com',
				time: new Date(),
				news: '版时候,有的标题比较长显示不完,这个时候即又不想换',
			},
			{
				id: 3,
				imgurl: 'two.png',
				tip: 2,
				name: '河流',
				email: 'heliu@163.com',
				time: new Date(),
				news: ' 有的标题比较长显示不完,这个时',
			},
			{
				id: 4,
				imgurl: 'three.png',
				tip: 12,
				name: '溪水',
				email: 'xishui@163.com',
				time: new Date(),
				news: ' 到文章标题列表布局排版时候,有的标题比较长显示不完,这个时候即又不想换行...',
			},
			{
				id: 5,
				imgurl: 'four.png',
				tip: 2,
				name: '森林',
				email: 'senglin@163.com',
				time: new Date(),
				news: ' TOP 常常遇到文章标题列表布局排版时候,有的标题比较长显示不完,这个时候即又不想换行...',
			},
			{
				id: 6,
				imgurl: 'one.png',
				tip: 0,
				name: '湖泊',
				email: 'hupo@163.com',
				time: new Date(),
				news: '版时候,有的标题比较长显示不完,这个时候即又不想换',
			},
			{
				id: 7,
				imgurl: 'two.png',
				tip: 2,
				name: '冰川',
				email: 'bingchuan@123.com',
				time: new Date(),
				news: ' 有的标题比较长显示不完,这个时',
			},
			{
				id: 8,
				imgurl: 'three.png',
				tip: 12,
				name: '风叶',
				email: 'fengye@163.com',
				time: new Date(),
				news: ' 到文章标题列表布局排版时候,有的标题比较长显示不完,这个时候即又不想换行...',
			},
			{
				id: 9,
				imgurl: 'four.png',
				tip: 2,
				name: '风车',
				email: 'fengche@163.com',
				time: new Date(),
				news: ' TOP 常常遇到文章标题列表布局排版时候,有的标题比较长显示不完,这个时候即又不想换行...',
			},
			{
				id: 10,
				imgurl: 'one.png',
				tip: 0,
				name: '大厦',
				email: 'dasha@163.com',
				time: new Date(),
				news: '版时候,有的标题比较长显示不完,这个时候即又不想换',
			},
			{
				id: 11,
				imgurl: 'two.png',
				tip: 2,
				name: '木屋',
				email: '5434323@qq.com',
				time: new Date(),
				news: ' 有的标题比较长显示不完,这个时',
			},
			{
				id: 12,
				imgurl: 'three.png',
				tip: 12,
				name: '大海',
				email: '123234@qq.com',
				time: new Date(),
				news: ' 到文章标题列表布局排版时候,有的标题比较长显示不完,这个时候即又不想换行...',
			},

		];
		return friendarr;
	},
	//好友关系
	isFriend: function() {
		let isfriend = [{
				userid: 1,
				friend: 2,
			},
			{
				userid: 1,
				friend: 5,
			},
			{
				userid: 1,
				friend: 6,
			},
			{
				userid: 1,
				friend: 8,
			},
		];
		return isfriend;
	},

	chats: {
		"_id": {
			"$oid": "5efb01311876d426888d07d2"
		},
		"msg_list": [{
			"msg": "fsadfsa",
			"type": "text",
			"belong": "friend",
			"date": {
				"$date": "2020-06-30T09:09:05.235Z"
			}
		}, {
			"msg": "/static/images/img/one.png",
			"type": "image",
			"belong": "my",
			"date": {
				"$date": "2020-06-30T09:09:17.176Z"
			}
		}, {
			"msg": "阿卡垃圾水电费",
			"type": "text",
			"belong": "my",
			"date": {
				"$date": "2020-06-30T09:09:37.940Z"
			}
		}, {
			"msg": "我想你了",
			"type": "text",
			"belong": "friend",
			"date": {
				"$date": "2020-06-30T09:09:47.597Z"
			}
		}, {
			"msg": "阿斯顿发三大",
			"type": "text",
			"belong": "my",
			"date": {
				"$date": "2020-06-30T09:09:52.112Z"
			}
		}, {
			"msg": "所发生的",
			"type": "text",
			"belong": "my",
			"date": {
				"$date": "2020-06-30T09:09:53.911Z"
			}
		}, {
			"msg": "阿萨法士大夫",
			"type": "text",
			"belong": "friend",
			"date": {
				"$date": "2020-06-30T09:09:57.509Z"
			}
		}, {
			"msg": "大发送到",
			"type": "text",
			"belong": "friend",
			"date": {
				"$date": "2020-06-30T09:10:00.130Z"
			}
		}, {
			"msg": "啥大发送到",
			"type": "text",
			"belong": "friend",
			"date": {
				"$date": "2020-06-30T09:10:02.783Z"
			}
		}, {
			"msg": "/static/images/img/four.png",
			"type": "image",
			"belong": "friend",
			"date": {
				"$date": "2020-06-30T09:10:14.670Z"
			}
		}, {
			"msg": "啊大发送到",
			"type": "text",
			"belong": "my",
			"date": {
				"$date": "2020-06-30T10:06:17.848Z"
			}
		}, {
			"msg": "阿斯顿发三大",
			"type": "text",
			"belong": "my",
			"date": {
				"$date": "2020-06-30T10:06:31.189Z"
			}
		}, {
			"msg": "阿发大厦",
			"type": "text",
			"belong": "my",
			"date": {
				"$date": "2020-06-30T10:06:54.973Z"
			}
		}, {
			"msg": "暗示法撒旦",
			"type": "text",
			"belong": "my",
			"date": {
				"$date": "2020-06-30T10:06:57.996Z"
			}
		}, {
			"msg": "阿斯顿发",
			"type": "text",
			"belong": "my",
			"date": {
				"$date": "2020-06-30T10:07:03.192Z"
			}
		}, {
			"msg": "阿斯顿发",
			"type": "text",
			"belong": "my",
			"date": {
				"$date": "2020-06-30T10:07:49.855Z"
			}
		}, {
			"msg": "阿士大夫撒",
			"type": "text",
			"belong": "my",
			"date": {
				"$date": "2020-06-30T10:09:18.270Z"
			}
		}, {
			"msg": "碍事法师大",
			"type": "text",
			"belong": "my",
			"date": {
				"$date": "2020-06-30T10:09:20.172Z"
			}
		},
		{
			"msg": "/static/images/img/two.png",
			"type": "image",
			"belong": "my",
			"date": {
				"$date": "2020-06-30T10:10:20.275Z"
			}
		},{
			"msg": "/static/images/img/three.png",
			"type": "image",
			"belong": "my",
			"date": "2020-06-30T10:18:10.116Z"
		}, {
			"msg": "大所发生的卡拉啥的教法就大解放路卡交水电费记录卡家得福分类捡垃圾的分类记录卡家得福了数控刀具方法了解爱丽丝的方法记录卡打飞机阿看拉时代峰峻",
			"type": "text",
			"belong": "my",
			"date":"2020-06-30T13:11:38.608Z"
		}, {
			"msg": "三大",
			"type": "text",
			"belong": "my",
			"date": "2020-06-30T13:16:03.136Z"
		},
		{
			"msg": "三大",
			"type": "text",
			"belong": "my",
			"date": "2020-06-30T13:16:03.136Z"
		},
		{
			"msg": "/static/mp3/2.wav",
			"type": "sound",
			"belong": "my",
			"duration":46,
			"date": "2020-06-30T13:16:03.136Z"
		},
		{
			"msg": "/static/mp3/14.mp3",
			"type": "sound",
			"belong": "friend",
			"duration":60,
			"date": "2020-06-30T13:16:03.136Z"
		},
		
		{
			"msg": "/static/mp3/1.wav",
			"type": "sound",
			"belong": "friend",
			"duration":50,
			"date": "2020-06-30T13:16:03.136Z"
		},{
			"msg": "/static/mp3/13.mp3",
			"type": "sound",
			"belong": "my",
			"duration":56,
			"date": "2020-06-30T13:16:03.136Z"
		}],
		"fromUser": {
			"$oid": "5ee4bd5bff3af343004f224c"
		},
		"toUser": {
			"$oid": "5ee4bcedff3af343004f224a"
		},
		"__v": 0
	}

}

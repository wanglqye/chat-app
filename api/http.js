// export default function(options){
// 	let baseUrl = 'http://localhost:3000/'
// 	return uni.request({
// 		url: baseUrl + options.url,
// 		method: options.method || 'POST',
// 		data: options.data ||  {},
// 	});
// }



// const BASEURL = '/api'
const BASEURL = 'http://localhost:3008'

export const request = (options) => {
	return new Promise((resolve,reject) => {
		uni.request({
			url:BASEURL + options.url,
			method:options.method || "GET",
			header:{
				'Authorization':uni.getStorageSync('token') ||  ''
				// token:uni.getStorageSync('user') ? uni.getStorageSync('user').token : ''
			},
			data:options.data || {},
			success: (res) => {
				const data = res.data
				if(data.status !== 200){
					uni.showToast({
						icon:"error",
						title: data.error ||  "操作有误"
					})
				}
				resolve(data)
			},
			fail: (err) => {
				uni.showToast({
					icon:'error',
					title:'系统内部错误'
				})
				reject(err)
			}
		})
	})
}
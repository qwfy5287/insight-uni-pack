import Request from 'luch-request'

/**
 * 转换返回的结果格式 for 工业大数据平台
 * @param {*} res response.data
 */
// const transformResForMains = (res) => {
//   if (res) {
//     res.code = res.success === true ? '20000' : res.errorCode
//   }
// }

const service = new Request()
// 拦截器
// 请求
// service.interceptors.request.use(
//   config => {
//     // 可使用async await 做异步操作
//     config.header = {
//       ...config.header,
//       a: 1, // 演示拦截器header加参
//     }
//     // 演示custom 用处
//     // if (config.custom.auth) {
//     //   config.header.token = 'token'
//     // }
//     // if (config.custom.loading) {
//     //  uni.showLoading()
//     // }
//     /**
//      /* 演示
//      if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
//         return Promise.reject(config)
//       }
//      **/
//     return config
//   },
//   config => {
//     // 可使用async await 做异步操作
//     return Promise.reject(config)
//   }
// )
// 响应
service.interceptors.response.use(
  (response) => {
    const res = response.data

    // transformResForMains(res)

    if (res.code !== '20000') {
      uni.showToast({
        title: '内部异常。',
        icon: 'none',
        mask: true,
      })
      console.error('response code error')
    } else {
      return res
    }

    /* 对响应成功做点什么 可使用async await 做异步操作*/
    //  if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
    //    return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
    // if (response.config.custom.verification) { // 演示自定义参数的作用
    //   return response.data
    // }
    // console.log(response)
    // return response
  },
  (response) => {
    /*  对响应错误做点什么 （statusCode !== 200）*/
    console.log(response)
    return Promise.reject(response)
  }
)

export default service

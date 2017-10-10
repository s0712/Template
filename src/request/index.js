import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios);

var el = new Vue({ data: { message: 'Hello Vue!' } });


// 添加一个响应拦截器
axios.interceptors.response.use(function(response) {
  // Do something with response data
  // console.log(response)
  let returnCode = _.get(response, 'data.returnCode');
  if (returnCode == 1) {
    return _.get(response, 'data', {});
  } else {
    // console.log(response.data.returnContent)
    el.$confirm(response.data.returnContent, '提示', {
      confirmButtonText: '确定',
      showCancelButton: false,
      type: 'warning'
    }).then(() => {}).catch(() => {});
    return _.get(response, 'data', {});
    throw '服务器端错误请联系:15157122161,寻求帮助';
  }

}, function(error) {
  // Do something with response error
  throw '连接失败,请拨打15157122161,寻求帮助';
  // return Promise.reject(error);
});

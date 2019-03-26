import axios from 'axios';
const http = axios.create();

http.defaults.timeout = 20000;
http.defaults.baseURL = 'http://localhost:8080';

// 请求的拦截
http.interceptors.request.use(config => {
  //针对一些需要做验证的请求，加上自定义的请求头
  // console.log(config);
  config.headers['x-token'] = localStorage.getItem('token');
  return config;
})
// 响应拦截
http.interceptors.response.use(response => {
  var data = response.data;
  return data;
})
export default http;

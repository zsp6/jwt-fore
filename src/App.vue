<template>
  <div id="app">
    <input type="text" placeholder="用户名" v-model="userName"/>
    <input type="text" placeholder="密码" v-model="passWord" />
    <button @click="handleLogin">登录</button>
    <button @click="handleMoney">获取余额</button>
  </div>
</template>

<script>
import http from './utils/http.js';
export default {
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  methods: {
    handleLogin () {
      http.get('/login', {
        params: {
          userName: this.userName,
          passWord: this.passWord
        }
      }).then((res) => {
        // console.log(res);
        // 前端需要主动保存拿到的token
        // res.token
        localStorage.setItem('token', res.data.token);
      })
    },
    handleMoney () {
      http.get('/yue').then(res => {
        // console.log(res)
      })
    }
  }
}
</script>

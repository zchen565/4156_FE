<template>
  <div>
    <button @click="getData()">获取api数据</button>
    {{msg}}
  </div>
</template>

<script>
//1、引入 axios 模块
import axios from 'axios'
export default {
  data() {
    return {
      msg: "主页"
    }
  },
  methods:{
    getData(){
      // var api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      // var api="http://20.127.204.67:30005/Hello"
      // //2.使用axios 进行get请求
      // axios.get(api).then((res)=>{
      //   //请求成功的回调函数
      //   this.msg = res.data
      //   console.log(res)
      // }).catch((err)=>{
      //   //请求失败的回调函数
      //   console.log(err)
      // })
      var api = "https://reqres.in/api/articles"
      
      axios.post(api,{'title': "Vue POST Request Example" }).then((res)=>{
        //请求成功的回调函数
        this.msg = res.data
        console.log(res)
      }).catch((err)=>{
        //请求失败的回调函数
        console.log(err)
      })
   }

  }
};
</script>
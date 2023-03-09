<template>
  <div class="container">
    <div class="left">
      <p>Counter-strike Global Offensive</p>
    </div>
    <div class="right">
      <div class="username">
        欢迎您， {{ user.info.userName }}
      </div>
      <div class="img"> <el-avatar :size="60" :src="user.info.avatar" /></div>
      <div class="btn"> <el-button :icon="SwitchButton" @click="logout" plain round /></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, reactive, getCurrentInstance, onMounted } from "vue";
import { ElMessage, ElMessageBox } from 'element-plus'
import { SwitchButton } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
name: "Header";
const router = useRouter()
const { proxy }: any = getCurrentInstance()
const user: any = reactive({
  info: {

  }
}
)
init();

const logout = () => {
  proxy.$http.post("/myapi/users/logout").then(res => {
    ElMessage({
      message: '退出登录成功',
      type: 'success'
    })
    router.push('/index/login');
    localStorage.removeItem('userInfo')
  })
}
function init() {
  let obj = JSON.parse(localStorage.getItem('userInfo'))
  user.info.userId = obj.userId
  proxy.$http.get("/myapi/users/getUserInfoById", {
    userId: user.info.userId
  }).then(res => {
    user.info.avatar = res.data.avatar
    user.info.userName = res.data.userName
  })
}
</script>

<style lang="less" scoped>
.container {
  display: flex;

  .left {
    display: inline-block;
    width: 75%;
    font-size: 28px;


    .more {
      margin-left: 20px;
      font-size: 16px;
    }
  }

  .right {
    display: inline-block;
    width: 25%;

    .username {
      display: inline-block;
      vertical-align: top;
      width: 40%;
      font-size: 12px;
      line-height: 98.8px;
    }

    .img {
      box-sizing: border-box;
      display: inline-block;
      width: 30%;
      height: 100%;
      text-align: center;
      padding-top: 20px;
      //padding-left: 30%;
    }

    .btn {
      box-sizing: border-box;
      vertical-align: top;
      display: inline-block;
      width: 30%;
      padding-left: 30px;
      line-height: 98.8px;
    }
  }
}
</style>

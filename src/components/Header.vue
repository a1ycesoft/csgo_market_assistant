<template>
  <div class="container">
    <div class="left">
      <p>Counter-strike Global Offensive<span class="more">——by a1ycesoft</span></p>
    </div>

    <div class="right">
      <div class="username">A1yCE</div>
      <el-avatar class="img" :size="50" :src="circleUrl" style="margin-left: 20px;" />
      <div class="btn"> <el-button :icon="SwitchButton" plain round /></div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, toRefs, reactive } from "vue";
import { SwitchButton } from "@element-plus/icons-vue";
name: "Header";
const state = reactive({
  circleUrl: 'https://i.328888.xyz/2023/03/04/GppiV.jpeg',
})

const { circleUrl } = toRefs(state)
</script>

<style lang="less" scoped>
.container {
  display: flex;

  .left {
    width: 80%;
    font-size: 28px;

    .more {
      margin-left: 20px;
      font-size: 16px;
    }
  }

  .right {
    display: flex;
    margin: auto 0 auto 30px;


    .username {
      margin: auto 5px auto 20px;
      font-size: 12px;
    }

    .btn {
      margin: auto 0px auto 15px;
    }
  }
}
</style>

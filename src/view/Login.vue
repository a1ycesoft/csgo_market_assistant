<template>
  <el-button type="primary" @click="toHome">Login</el-button>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import router from '@/router/router'
name: "Login";
const toHome = () => {
  router.push('/home/ranking');
}
</script>

<style lang="less" scoped></style>

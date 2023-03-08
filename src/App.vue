<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import Home from "./view/Home.vue";
import Login from "./view/Index.vue";
const isLogin = ref(false)
name: "App";
</script>

<style lang="less" scoped></style>

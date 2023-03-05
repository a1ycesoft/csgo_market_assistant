<template>
  <el-menu class="el-menu-vertical-demo" router>
    <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-sub-menu index="1-1">
        <template #title><span>group1</span></template>
        <el-menu-item index="1-1-1">item 1</el-menu-item>
        <el-menu-item index="1-1-2">item 2</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1-2">
        <template #title><span>group2</span></template>
        <el-menu-item index="1-2-1">item 1</el-menu-item>
        <el-menu-item index="1-2-2">item 2</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
    <el-menu-item index="/home/ranking">
      <el-icon>
        <TrendCharts />
      </el-icon>
      <template #title>趋势榜单</template>
    </el-menu-item>
    <el-sub-menu>
      <template #title>
        <el-icon>
          <Search />
        </el-icon>
        <span>查找饰品</span>
      </template>
      <el-menu-item index="/home/searchbyname">按名称搜索</el-menu-item>
      <el-menu-item index="/home/searchbycategory">按类型检索</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/home/concern">
      <el-icon>
        <View />
      </el-icon>
      <template #title>我的关注</template>
    </el-menu-item>
    <el-menu-item index="/home/setting">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>账号管理</template>
    </el-menu-item>
  </el-menu>
</template>


<script lang="ts" setup>
import { ref } from "vue";
import router from '@/router/router'
import {
  TrendCharts,
  View,
  Search,
  Setting,
} from "@element-plus/icons-vue";
name: "Aside";
// const handleSelect = (key: string) => {
//   switch (key) {
//     case '2-1':
//       router.push('/home/searchbyname')
//       break;
//     case '2-2':
//       router.push('/home/searchbycategory')
//       break;
//   }
// }
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
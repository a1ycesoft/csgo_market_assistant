<template>
  <el-table :data="state.tableData" style="width: 100%">
    <el-table-column label="饰品" width="100px">
      <template #default="scope">
        <el-image style="width: 60px; height: 60px" fit="cover" :src="scope.row.iconSrc" />
      </template>
    </el-table-column>
    <el-table-column label="名称" prop="fullName" width="500px" />
    <el-table-column label="参考价格￥(BUFF)" prop="sellMinPrice" />
    <el-table-column label="参考价格￥(Steam)" prop="steamPriceCny" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="large" placeholder="Type to search" clearable @change="searchByName" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="toDetails(scope.$index, scope.row)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="page">
    <el-pagination v-model:current-page="currentPage" layout="prev, pager, next" :total="totalGoods"
      @current-change="searchByName" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, getCurrentInstance, reactive } from 'vue'
import router from '@/router/router'
name: 'SearchByName'
interface goods {
  buyMaxPrice: number,
  exterior: string,
  fullName: string,
  iconSrc: string,
  id: number,
  rarity: string,
  sellMinPrice: number,
  shortName: string,
  steamPrice: number,
  steamPriceCny: number,
  steamUrl: string,
  type: string
}

const search = ref('')
const currentPage = ref('1')
const totalGoods = ref('5')
const instance: any = getCurrentInstance();
const state = reactive({
  tableData: []
});

const searchByName = () => {
  instance.proxy.$http.get('/goods/page?page=' + currentPage.value + '&pageSize=10&name=' + encodeURIComponent(search.value)).then(res => {
    console.log(res)
    state.tableData = res.data.data.records;
    totalGoods.value = res.data.data.total;
  }).catch(err => {
    console.log(err)
  })
}

const toDetails = (index: number, row: goods) => {
  console.log(index, row)
  router.push('/home/details')
}



</script>
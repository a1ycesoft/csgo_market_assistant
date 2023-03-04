<template>
  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column label="饰品" prop="src">
      <template #default="scope">
        <el-image style="width: 60px; height: 60px" fit="cover" :src="scope.row.src" />
      </template>
    </el-table-column>
    <el-table-column label="名称" prop="name" />
    <el-table-column label="参考价格" prop="address" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="large" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="toDetails(scope.$index, scope.row)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import router from '@/router/router'
name: 'SearchByName'
interface User {
  src: string
  date: string
  name: string
  address: string
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const toDetails = (index: number, row: User) => {
  console.log(index, row)
  router.push('/home/details')
}


const tableData: User[] = [
  {
    src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    src: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
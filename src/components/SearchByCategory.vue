<template>
  <div class="checker">
    <h3>匕首</h3>
    <el-check-tag v-for="item, index in goodsList.knifeList" :key="item.id" class="tag" :checked="item.choosed"
      @change="handleChange(item)">{{
        item.name }}</el-check-tag>
  </div>
  <div class="checker">
    <h3>手枪</h3>
    <el-check-tag v-for="item, index in goodsList.handgunList" :key="item.id" class="tag" :checked="item.choosed"
      @change="handleChange(item)">{{
        item.name }}</el-check-tag>
  </div>
  <div class="checker"></div>
  <div class="checker"></div>
  <div class="checker"></div>
  <div class="checker"></div>
  <div class="checker"></div>
  <el-button type="primary" style="margin-top: 20px;" plain>确认</el-button>
  <div style="margin-top: 20px;">
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="饰品" prop="src">
        <template #default="scope">
          <el-image style="width: 60px; height: 60px" fit="cover" :src="scope.row.src" />
        </template>
      </el-table-column>
      <el-table-column label="名称" prop="name" />
      <el-table-column label="参考价格" prop="address" />
      <el-table-column align="right">
        <template #default="scope">
          <el-button size="small" @click="toDetails(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>

    </el-table>
    <div class="page">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 15, 20]"
        layout="sizes, prev, pager, next" :total="100" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router/router'
import {
  Check,
} from '@element-plus/icons-vue'
import { defineComponent, ref, reactive, computed } from "vue";
name: "SearchByCategory";
const currentPage = ref(1)
const pageSize = ref(10)
const goodsList = reactive({
  knifeList: [{ name: "鲍伊猎刀", id: "1001", choosed: true }, { name: "蝴蝶刀", id: "1002", choosed: false }, { name: "弯刀", id: "1003", choosed: false }],
  handgunList: [{ name: "P2000", id: "1101", choosed: false }, { name: "USP消音版", id: "1102", choosed: false }, { name: "格洛克18型", id: "1103", choosed: false }],
})
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const handleChange = (item) => {
  item.choosed = !item.choosed;
}
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

<style lang="less" scoped>
.tag {
  margin-right: 10px;
  margin-bottom: 5px;
  height: 10px;
  text-align: center;
  line-height: 10px;
  font-size: 5px;
}

.page {
  padding-left: 30%;
  margin-top: 20px;

}
</style>
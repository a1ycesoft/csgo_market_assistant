<template>
  <div class="detail-header black" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="detail-pic">

      <div style="width:269px" class="t_Center"> <img :src="imgUrl" style="max-width:269px;max-height:176px;"> </div>

    </div>
    <div class="detail-cont">
      <div>
        <div class="detail-fav">
        </div>
        <h1>{{ name }}</h1>
      </div>
      <p> <span><label>稀有度 |</label>{{ rarity }}</span> <span><label>类别 |</label>{{ quality }}</span> <span><label>类型
            |</label>{{ type }}</span> </p>
      <div class="blank20"></div>
      <div class="line"></div>
      <div class="blank20"></div>
      <div class="detail-summ">
        <span>
          <label>参考价格 |</label>
          <el-link :href="buffUrl" target="_blank" type="warning">
            BUFF: {{ buffPrice ? "￥" + buffPrice : "暂无价格" }}
          </el-link>
          <el-link :href="steamUrl" target="_blank" type="info" style="margin-left: 20px;">
            Steam: {{ steamPriceCny ? "￥" + steamPriceCny : "暂无价格" }}
          </el-link>
          <el-switch v-model="isConcerned" class="mb-2" size="large" inline-prompt active-text="已关注" inactive-text="未关注"
            style="margin-left: 35px;" @change="concernChange" />
        </span>
      </div>
    </div>
  </div>
  <div class="radio">
    <div v-if="exterior == '无涂装'">
      <el-radio-group v-model="exterior" size="large">
        <el-radio label="无涂装" />
      </el-radio-group>

    </div>
    <div v-else>
      <el-radio-group v-model="exterior" size="large" @change="toElse">
        <el-radio v-for="item in btnState.list" :key="item.exterior" :label="item.exterior" :disabled="item.state" />
      </el-radio-group>

    </div>

  </div>
  <div style="margin-top: 10px;" v-if="isConcerned">
    <!-- <div class="picker">
      <el-switch v-model="buff_steam" class="mb-2" active-text="BUFF" inactive-text="Steam"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949;margin-right: 100px ;" />

    </div> -->
    <div id="history">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance, reactive, onUpdated } from "vue";
import * as echarts from "echarts";
import { useRoute, useRouter } from 'vue-router'
import { ElLoading } from 'element-plus'
import axios from "axios";
import { ElMessage, ElMessageBox } from 'element-plus'
name: "Details";
const route = useRoute()
const router = useRouter()
const isConcerned = ref(false)
// const buff_steam = ref(true)
const goodsId = ref(route.params.id)
const { proxy }: any = getCurrentInstance();
const name = ref('')
const shortname = ref('')
const steamUrl = ref('')
const buffUrl = ref('')
const fullscreenLoading = ref(true)
const sameGoods = reactive({
  list: []
})
const btnState = reactive({
  list: [
    { exterior: "崭新出厂", state: true },
    { exterior: "略有磨损", state: true },
    { exterior: "久经沙场", state: true },
    { exterior: "破损不堪", state: true },
    { exterior: "战痕累累", state: true },
  ]
})
const imgUrl = ref('')
const buffPrice = ref('')
const steamPriceCny = ref('')
const type = ref('')
const rarity = ref('')
const quality = ref('')
const exterior = ref('')

const historyData = reactive({
  list: []
})
//const loadingInstance = ElLoading.service()
info_init(goodsId.value)
concern()
getHistory()
onMounted(
  () => {
    //echarts_init()
  }
)
const toElse = (toExterior) => {
  let id = 1;
  sameGoods.list.forEach(x => {
    if (x.exterior == toExterior)
      id = x.id;
  })
  if (id == 1)
    return
  router.push({ path: `/home/details/${id}` })
  setTimeout(function () {
    window.location.reload();
  }, 100);
}
const concernChange = () => {
  if (isConcerned.value) {
    proxy.$http.post("/myapi/concern/add", {
      userId: 10000,
      goodsId: goodsId.value
    }).then(res => {
      //  console.log(res);
      ElMessage({
        message: '关注成功',
        type: 'success',
      })
    })
  }
  else {
    proxy.$http.post("/myapi/concern/delete", {
      userId: 10000,
      goodsId: goodsId.value
    }).then(res => {
      //  console.log(res);

      ElMessage({
        message: '取关成功',
        type: 'success',
      })
    })
  }
}
function info_init(id) {
  console.log(id)
  buffUrl.value = "https://buff.163.com/goods/" + id;
  const time = new Date().getTime()
  axios.get('/buff/api/market/goods/sell_order?game=csgo&goods_id=' + id + '&page_num=1&sort_by=default&mode=&allow_tradable_cooldown=1&_=' + time).then(res => {
    imgUrl.value = Object.values(res.data.data.goods_infos)[0].icon_url
    name.value = Object.values(res.data.data.goods_infos)[0].name
    shortname.value = Object.values(res.data.data.goods_infos)[0].short_name
    steamPriceCny.value = Object.values(res.data.data.goods_infos)[0].steam_price_cny
    type.value = Object.values(res.data.data.goods_infos)[0].tags.type.localized_name
    rarity.value = Object.values(res.data.data.goods_infos)[0].tags.rarity.localized_name
    quality.value = Object.values(res.data.data.goods_infos)[0].tags.quality.localized_name
    buffPrice.value = res.data.data.items[0].price
    exterior.value = Object.values(res.data.data.goods_infos)[0].tags.exterior.localized_name
  }).then(() => {
    console.log(shortname.value);
    proxy.$http.get('/myapi/goods/getRelativeGoods', {
      name: shortname.value
    }).then(res => {
      // console.log(res);
      sameGoods.list = res.data
      sameGoods.list.forEach(x => {
        btnState.list.forEach(y => {
          if (y.exterior == x.exterior)
            y.state = false;
        })
      })
      sameGoods.list.forEach(x => {
        if (x.exterior == exterior.value)
          steamUrl.value = x.steamUrl;
      })
      fullscreenLoading.value = false
    })
  })

}
function concern() {
  proxy.$http.get("/myapi/concern/concerned", {
    userId: 10000,
    goodsId: goodsId.value
  }).then(res => {
    isConcerned.value = res.data
  })
}
function getHistory() {
  proxy.$http.get("/myapi/history", {
    goodsId: goodsId.value,
    source: "buff"
  }).then(res => {
    console.log(res);
    res.data.forEach(x => {
      let arr = []
      arr.push(Number(x.time))
      arr.push(x.price)
      historyData.list.push(arr)
    })

  })
}
function timestampToTime(timestamp) {
  var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return Y + M + D + h + m + s;
}
function echarts_init() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('history'));
  window.addEventListener('resize', function () {
    myChart.resize();
  });
  // 指定图表的配置项和数据
  var option = {
    title: {},
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {},
    // 时间
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: function (e) {
          return timestampToTime(e);
        },
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'line',
        data: historyData.list
      }
    ]
  };
  myChart.setOption(option);

}
</script>

<style lang="less" scoped>
.detail-header {
  width: 100%;
  height: 194px;
  border-radius: 2px;

  .detail-pic {
    float: left;
    position: relative;
    padding: 9px px;

    .t_Center {
      text-align: center;
    }

  }

  .detail-cont {
    margin-left: 310px;
    padding: 0px 30px 0 0;
    font-size: 12px;

    label {
      color: #90969C;
      margin-right: 9px;
      cursor: default;
    }

    h1 {
      font-size: 24px;
      line-height: 24px;
      color: black;
    }

    p span {
      color: #c6cad0;
      margin: 0 24px 0 0;
    }

    .detail-summ {
      .f_Strong {
        font-size: 14px;
        color: #eea20e;

        small {
          color: #45536C;
          font-size: 12px;
          margin-left: 6px;
        }
      }
    }

    .line {
      height: 1px;
      font-size: 0;
      overflow: hidden;
      background-image: linear-gradient(-90deg, rgba(250, 250, 250, 0) 0, #eea20e 49%, rgba(250, 250, 250, 0) 100%);
      *background: #544B35;
    }

    .detail-fav {
      font-size: 14px;
      cursor: pointer;
      color: #E4E8EE;
      position: relative;
    }

    .blank20 {
      height: 20px;
      overflow: hidden;
      font-size: 0;
      line-height: 0;
    }
  }
}

.switch-btn {
  margin-left: 30px;
}

.black {
  color: #9a9b9e;
}

#history {
  width: 100%;
  height: 400px;
  background-color: #fff;
  margin-top: 5px;
}

.picker {
  margin-left: 31%;
}

.radio {
  margin-left: 40px;

}
</style>

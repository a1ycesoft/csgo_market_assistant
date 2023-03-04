<template>
  <div class="detail-header black">
    <div class="detail-pic">
      <div style="width:269px" class="t_Center"> <img
          src="https://g.fp.ps.netease.com/market/file/5aa0c2f769b21ae0f25da300W8ER6ycS"
          style="max-width:269px;max-height:176px;"> </div>

    </div>
    <div class="detail-cont">
      <div>
        <div class="detail-fav">
        </div>
        <h1>AK-47 | 红线 (久经沙场) </h1>
      </div>
      <p> <span><label>品质 |</label>保密</span> <span><label>类别 |</label>普通</span> <span><label>类型 |</label>步枪</span> </p>
      <div class="blank20"></div>
      <div class="line"></div>
      <div class="blank20"></div>
      <div class="detail-summ">
        <span>
          <label>参考价格 |</label>
          <strong class="f_Strong">
            BUFF:¥ <big>127</big>.99
          </strong>
          <strong class="f_Strong" style="color: rgb(58,133,207);margin-left: 20px;">
            IGXE:¥ <big>126</big>.99
          </strong>
          <strong class="f_Strong" style="color:gray;margin-left: 20px;">
            Steam:¥ <big>126</big>.99
          </strong>
        </span>
      </div>
    </div>
  </div>
  <div>
    <el-button type="primary" plain class="switch-btn" size="large" disabled>崭新出厂</el-button>
    <el-button type="primary" plain class="switch-btn" size="large">略有磨损</el-button>
    <el-button type="primary" plain class="switch-btn" size="large">久经沙场</el-button>
    <el-button type="primary" plain class="switch-btn" size="large">破损不堪</el-button>
    <el-button type="primary" plain class="switch-btn" size="large">战痕累累</el-button>
    <el-button type="primary" plain class="switch-btn" size="large">
      <el-icon>
        <Switch />
      </el-icon>&nbsp;StatTrak™</el-button>
  </div>
  <div style="margin-top: 10px;">
    <div class="picker">
      <el-switch v-model="value1" class="mb-2" active-text="BUFF" inactive-text="Steam"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949;margin-right: 100px ;" />
      <el-select v-model="value" class="m-2" placeholder="Select" size="small">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div id="history">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, onMounted } from "vue";
import * as echarts from "echarts";
name: "Details";
onMounted(
  () => {
    init()
  }
)
const value = ref('1')
const value1 = ref(true)
const options = [
  {
    value: '1',
    label: '近七天',
  },
  {
    value: '2',
    label: '近一个月',
  },
  {
    value: '3',
    label: '近三个月',
  },
  {
    value: '4',
    label: '近六个月',
  },
  {
    value: '5',
    label: '近一年',
  },
]
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

function init() {
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
      min: 1677254400000,
      max: 1677927600000,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'line',
        data: [
          [
            1677254400000,
            6287.5
          ],
          [
            1677258000000,
            7400
          ],
          [
            1677261600000,
            7625
          ],
          [
            1677265200000,
            24000
          ],
          [
            1677272400000,
            7472
          ],
          [
            1677279600000,
            8666
          ],
          [
            1677283200000,
            6052.2
          ],
          [
            1677286800000,
            35500
          ],
          [
            1677290400000,
            7443.6
          ],
          [
            1677294000000,
            24700
          ],
          [
            1677297600000,
            6374.5
          ],
          [
            1677301200000,
            7379.83
          ],
          [
            1677304800000,
            14473.14
          ],
          [
            1677308400000,
            35650
          ],
          [
            1677312000000,
            14916.86
          ],
          [
            1677315600000,
            7660
          ],
          [
            1677319200000,
            18334
          ],
          [
            1677322800000,
            6669.97
          ],
          [
            1677326400000,
            7700.6
          ],
          [
            1677330000000,
            6786
          ],
          [
            1677333600000,
            24238.5
          ],
          [
            1677337200000,
            7059.75
          ],
          [
            1677340800000,
            17017.93
          ],
          [
            1677344400000,
            12576.33
          ],
          [
            1677348000000,
            28766.33
          ],
          [
            1677351600000,
            7274.83
          ],
          [
            1677358800000,
            6339.5
          ],
          [
            1677369600000,
            24600
          ],
          [
            1677373200000,
            6100
          ],
          [
            1677380400000,
            8277.5
          ],
          [
            1677384000000,
            8675
          ],
          [
            1677387600000,
            6508.75
          ],
          [
            1677391200000,
            6390
          ],
          [
            1677394800000,
            7470.79
          ],
          [
            1677398400000,
            7272
          ],
          [
            1677402000000,
            7517
          ],
          [
            1677405600000,
            7528.75
          ],
          [
            1677409200000,
            31005
          ],
          [
            1677412800000,
            7363
          ],
          [
            1677416400000,
            8250
          ],
          [
            1677420000000,
            16456
          ],
          [
            1677423600000,
            13726.48
          ],
          [
            1677430800000,
            6139.25
          ],
          [
            1677434400000,
            6809.33
          ],
          [
            1677448800000,
            6420
          ],
          [
            1677456000000,
            8088
          ],
          [
            1677459600000,
            9999
          ],
          [
            1677463200000,
            7124.75
          ],
          [
            1677470400000,
            15010.8
          ],
          [
            1677477600000,
            7599.5
          ],
          [
            1677481200000,
            6650
          ],
          [
            1677484800000,
            19308.33
          ],
          [
            1677488400000,
            17034.6
          ],
          [
            1677492000000,
            6606.36
          ],
          [
            1677495600000,
            7332.5
          ],
          [
            1677499200000,
            6994.83
          ],
          [
            1677502800000,
            6180.61
          ],
          [
            1677506400000,
            16335.2
          ],
          [
            1677510000000,
            13524.67
          ],
          [
            1677513600000,
            6637
          ],
          [
            1677524400000,
            6419
          ],
          [
            1677542400000,
            7960
          ],
          [
            1677546000000,
            6050
          ],
          [
            1677549600000,
            7228.33
          ],
          [
            1677553200000,
            8199
          ],
          [
            1677556800000,
            7544
          ],
          [
            1677560400000,
            6819
          ],
          [
            1677564000000,
            7243
          ],
          [
            1677567600000,
            9639.6
          ],
          [
            1677571200000,
            8534
          ],
          [
            1677574800000,
            6552.25
          ],
          [
            1677578400000,
            7568.1
          ],
          [
            1677582000000,
            6668.4
          ],
          [
            1677585600000,
            15733.33
          ],
          [
            1677589200000,
            19827.5
          ],
          [
            1677592800000,
            6416.67
          ],
          [
            1677596400000,
            18306
          ],
          [
            1677600000000,
            25376
          ],
          [
            1677603600000,
            7950
          ],
          [
            1677607200000,
            8500
          ],
          [
            1677614400000,
            8200
          ],
          [
            1677618000000,
            6781.67
          ],
          [
            1677621600000,
            7533.33
          ],
          [
            1677625200000,
            6095
          ],
          [
            1677628800000,
            6946.4
          ],
          [
            1677636000000,
            7449.83
          ],
          [
            1677639600000,
            8400
          ],
          [
            1677646800000,
            27025
          ],
          [
            1677654000000,
            33180
          ],
          [
            1677657600000,
            25594.63
          ],
          [
            1677661200000,
            6999.17
          ],
          [
            1677664800000,
            6360
          ],
          [
            1677668400000,
            17277.83
          ],
          [
            1677672000000,
            7516.67
          ],
          [
            1677675600000,
            6489.8
          ],
          [
            1677679200000,
            7735.96
          ],
          [
            1677682800000,
            8048.5
          ],
          [
            1677686400000,
            12496.57
          ],
          [
            1677697200000,
            69000
          ],
          [
            1677700800000,
            6045
          ],
          [
            1677711600000,
            7280
          ],
          [
            1677715200000,
            7328.5
          ],
          [
            1677718800000,
            7400
          ],
          [
            1677722400000,
            6099.5
          ],
          [
            1677726000000,
            36269
          ],
          [
            1677729600000,
            7028.33
          ],
          [
            1677733200000,
            6350.83
          ],
          [
            1677736800000,
            15785.25
          ],
          [
            1677740400000,
            8145
          ],
          [
            1677744000000,
            6567.8
          ],
          [
            1677747600000,
            6904.67
          ],
          [
            1677751200000,
            7553.33
          ],
          [
            1677754800000,
            9269
          ],
          [
            1677758400000,
            7951.6
          ],
          [
            1677762000000,
            6774.67
          ],
          [
            1677765600000,
            43000
          ],
          [
            1677769200000,
            6729.88
          ],
          [
            1677772800000,
            36996
          ],
          [
            1677776400000,
            6088
          ],
          [
            1677783600000,
            7213.33
          ],
          [
            1677787200000,
            30050
          ],
          [
            1677801600000,
            8100
          ],
          [
            1677805200000,
            15325
          ],
          [
            1677808800000,
            30800
          ],
          [
            1677812400000,
            8050
          ],
          [
            1677816000000,
            16092.75
          ],
          [
            1677819600000,
            17290.89
          ],
          [
            1677823200000,
            7350
          ],
          [
            1677826800000,
            6837.33
          ],
          [
            1677830400000,
            8400
          ],
          [
            1677834000000,
            14265.21
          ],
          [
            1677837600000,
            16427.5
          ],
          [
            1677841200000,
            6139
          ],
          [
            1677844800000,
            6839.33
          ],
          [
            1677848400000,
            6847.14
          ],
          [
            1677852000000,
            23425.63
          ],
          [
            1677855600000,
            7237
          ],
          [
            1677859200000,
            6527.5
          ],
          [
            1677862800000,
            16067.5
          ],
          [
            1677866400000,
            8388
          ],
          [
            1677870000000,
            64500
          ],
          [
            1677880800000,
            8500
          ],
          [
            1677888000000,
            6649.5
          ],
          [
            1677891600000,
            6350
          ],
          [
            1677895200000,
            6270.48
          ],
          [
            1677898800000,
            8300
          ],
          [
            1677902400000,
            14065.2
          ],
          [
            1677906000000,
            13544.06
          ],
          [
            1677909600000,
            14289.8
          ],
          [
            1677913200000,
            7000
          ],
          [
            1677916800000,
            7353.32
          ],
          [
            1677920400000,
            6986.5
          ],
          [
            1677924000000,
            7118
          ],
          [
            1677927600000,
            25513.55
          ]
        ]
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
</style>

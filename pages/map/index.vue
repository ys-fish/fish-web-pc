<template>
  <div>
    <div style="height: 64px"></div>

    <div class="mapBox">
      <v-navigation-drawer
        width="400"
        v-model="mapclick"
        temporary
        location="right"
        color="#0f0f0f"
        style="box-sizing: border-box; padding: 20px"
      >
        <div style="font-size: 18px">湖南省</div>
        <v-divider style="margin: 15px 0px" color="#80683c"></v-divider>
        <div class="provinceDocs">
          湖南溪流原生鱼较少，最为出名的为虾虎种类，其中以神农虾虎为首，主要是分布在各地河流之中
        </div>
        <v-divider style="margin: 15px 0px" color="#80683c"></v-divider>
        <div class="provinceFish">
          <div class="provincFishName">主要分布鱼类</div>
          <div class="provinceFishBox">
            <div class="provinceFishBoxItem">
              <v-img
                width="60px"
                height="60px"
                cover
                src="../../public/yl.jpg"
              >
              </v-img>
            </div>
            <div class="provinceFishBoxItem">
              <v-img width="60px" height="60px" cover src="../../public/yl.jpg">
              </v-img>
            </div>
          </div>
        </div>
        <div></div>
      </v-navigation-drawer>
      <div id="outer-box">
        <div
          id="container"
          style="width: 100%; height: calc(100vh - 64px)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LabelsData } from "./map";
const NuxtApp: any = useNuxtApp();
const mapclick = ref<boolean>(false);

var colors = [
  "#3366cc",
  "#dc3912",
  "#ff9900",
  "#109618",
  "#990099",
  "#0099c6",
  "#dd4477",
  "#66aa00",
  "#b82e2e",
  "#316395",
  "#994499",
  "#22aa99",
  "#aaaa11",
  "#6633cc",
  "#e67300",
  "#8b0707",
  "#651067",
  "#329262",
  "#5574a6",
  "#3b3eac",
];

function generateRandomNumbers(count: any, max: any) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * max);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

// 地图联动
const city = ref<string>("广东");
const mapIndex = ref<number>(5);
const maplnglat = ref(null);
// const map

function initMap() {
  NuxtApp.$Map()
    .load({
      key: "2f71fc9ffaf7a3b5711acf14162672c1",
      version: "2.0",
      plugins: [
        "AMap.AutoComplete",
        "AMap.PlaceSearch",
        "AMap.Geolocation",
        "AMap.Geocoder",
        "AMap.DistrictLayer",
        "AMap.Scale",
        "AMap.ToolBar",
      ], //
     
    })
    .then((AMap: any) => {
      // getAddress();
      var SOC: any = "CHN";
      var colors: any = {};
      var GDPSpeed: any = {
        "520000": 10, //贵州
        "540000": 10, //西藏
        "530000": 8.5, //云南
        "500000": 8.5, //重庆
        "360000": 8.5, //江西
        "340000": 8.0, //安徽
        "510000": 7.5, //四川
        "350000": 8.5, //福建
        "430000": 8.0, //湖南
        "420000": 7.5, //湖北
        "410000": 7.5, //河南
        "330000": 7.0, //浙江
        "640000": 7.5, //宁夏
        "650000": 7.0, //新疆
        "440000": 7.0, //广东
        "370000": 7.0, //山东
        "450000": 7.3, //广西
        "630000": 7.0, //青海
        "320000": 7.0, //江苏
        "140000": 6.5, //山西
        "460000": 7, // 海南
        "310000": 6.5, //上海
        "110000": 6.5, // 北京
        "130000": 6.5, // 河北
        "230000": 6, // 黑龙江
        "220000": 6, // 吉林
        "210000": 6.5, //辽宁
        "150000": 6.5, //内蒙古
        "120000": 5, // 天津
        "620000": 6, // 甘肃
        "610000": 8.5, // 甘肃
        "710000": 2.64, //台湾
        "810000": 3.0, //香港
        "820000": 4.7, //澳门
      };
      var getColorByDGP = function (adcode: any) {
        if (!colors[adcode]) {
          var gdp = (GDPSpeed as any)[adcode];
          if (!gdp) {
            colors[adcode] = "rgb(227,227,227)";
          } else {
            var r = 3;
            var g = 140;
            var b = 230;
            var a = gdp / 10;
            colors[adcode] = "rgba(" + r + "," + g + "," + b + "," + a + ")";
          }
        }
        return colors[adcode];
      };
      var disCountry = new AMap.DistrictLayer.Country({
        zIndex: 10,
        SOC: "CHN",
        depth: 1,
        styles: {
          "nation-stroke": "#ff0000",
          "coastline-stroke": "#80683c",
          "province-stroke": "#80683c",
          fill: function (props: any) {
            return getColorByDGP(props.adcode_pro);
          },
        },
      });

      let map = new AMap.Map("container", {
        zooms: [4, 8],
        center: [106.122082, 33.719192],
        zoom: 5,
        isHotspot: false,
        defaultCursor: "pointer",
        layers: [disCountry],
        viewMode: "2D",
        resizeEnable: true,
        mapStyle: "amap://styles/darkblue",
      });

      var tipMarker = new AMap.Marker({
        content: `<div class="tip">xa12312321</div>`,
        offset: new AMap.Pixel(0, 0),
        bubble: true,
      });

      var districtLayer = new AMap.DistrictLayer.Province({
        zIndex: 10,
        strokeColor: "#FF33FF", // 默认描边颜色
        strokeWeight: 2, // 默认描边宽度
        fillColor: "rgba(255,255,255,0.5)",
        levels: ["province"],
      });

      districtLayer.on("mouseover", function (e: any) {});

      // map.add(dist);
      var geocoder = new AMap.Geocoder({
        city: "全国", // 城市默认为全国
      });
      map.on("complete", function () {
        var layer = new AMap.LabelsLayer({
          // 开启标注避让，默认为开启，v1.4.15 新增属性
          collision: false,
          // 开启标注淡入动画，默认为开启，v1.4.15 新增属性
          animation: true,
        });
        for (var i = 0; i < LabelsData.length; i++) {
          var labelsMarker = new AMap.LabelMarker(LabelsData[i]);
          layer.add(labelsMarker);
        }
        map.add(layer);
        document.getElementsByClassName("amap-mcode")[0].innerHTML =
          "-GS(2021)648号";
      });

      map.on("click", function (ev: any) {
        mapIndex.value++;
        mapclick.value = true;
        //触发事件的对象
        var target = ev.target;
        var lnglat = ev.lnglat;
        var pixel = ev.pixel;
        // mapclick.value = true;
        geocoder.getAddress(lnglat, function (status: any, result: any) {
          if (status === "complete" && result.info === "OK") {
            var addressComponent = result.regeocode.addressComponent;
            console.log("省:", addressComponent.province);
            console.log("市:", addressComponent.city);
            console.log("区:", addressComponent.district);
            console.log("详细地址:", result.regeocode.formattedAddress);
          } else {
            console.error("逆地理编码失败:", result.info);
          }
        });
        // 跳转到目标点并设置缩放级别
        // map.setCenter(lnglat);
        // map.setZoom(mapIndex.value);
      });
    })
    .catch((e: any) => {
      console.error(e);
    });
}

onMounted(() => {
  if (window) {
    (window as any)._AMapSecurityConfig = {
      securityJsCode: "e334e80adc3b66732f256e0871126562", // 应用生成的秘钥
    };
    initMap();
  }

  // initMap();
});
</script>

<style lang="scss">
.mapBox {
  height: calc(100vh - 64px);
  background: black;
}
#container {
  position: relative;
  z-index: 11;
}

.tip {
  height: 40px;
  width: 50px;
  background: black;
}

.provinceDocs {
  font-size: 12px;
}
.provinceFish {
  .provincFishName {
    font-size: 14px;
  }
  .provinceFishBox {
    display: flex;
    margin-top: 10px;
    gap: 10px;
    .provinceFishBoxItem {
      border-radius: 10px;
      overflow: hidden;
      border: 1px white solid;
    }
  }
}
</style>

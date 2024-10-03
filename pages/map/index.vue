<template>
  <div>
    <div style="height: 64px"></div>
    <v-navigation-drawer v-model="mapclick" temporary>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-forum"
          title="About"
          value="about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="mapBox">
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
      ], //
      AMapUI: {
        // 是否加载 AMapUI，缺省不加载
        version: "1.1", // AMapUI 缺省 1.1
        plugins: ["overlay/SimpleMarker", "geo/DistrictExplorer"],
      },
    })
    .then((AMap: any) => {
      // getAddress();
      let map = new AMap.Map("container", {
        zoom: 4,
        // mapStyle: "amap://styles/grey",
        center: [105, 38],
      });

      var tipMarker = new AMap.Marker({
        content: `<div class="tip">xa12312321</div>`,
        offset: new AMap.Pixel(0, 0),
        bubble: true,
      });

      const tipMakerCreate = (name: string, x: number, y: number) => {
        tipMarker.setOffset(new AMap.Pixel(x, y));
        map.add(tipMarker);
      };

      // var dist = new AMap.DistrictLayer({
      //   zIndex: 10, //设置图层层级
      //   zooms: [2, 15], //设置图层显示范围
      // });

      // dist.setStyles({
      //   "stroke-width": 1, //描边线宽
      //   fill: function (data: any) {
      //     const randomNumber = Math.floor(Math.random() * 20);
      //     return colors[randomNumber];
      //   },
      // });

      // map.add(dist);
      var geocoder = new AMap.Geocoder({
        city: "全国", // 城市默认为全国
      });

      map.on("click", function (ev: any) {
        mapIndex.value++;

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
        map.setCenter(lnglat);
        map.setZoom(mapIndex.value);
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
</style>

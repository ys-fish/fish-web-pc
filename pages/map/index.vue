<template>
  <div>
    <div style="height: 64px"></div>
    <div class="mapBox">
      <div id="outer-box">
        <div id="container" tabindex="0"></div>
        <div id="panel" class="scrollbar1">
          <ul id="area-tree"></ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const NuxtApp: any = useNuxtApp();
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
      ], // 地图插件 根据需求从高德开放平台添加
    })
    .then((AMap: any) => {
      // getAddress();
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

<style scoped lang="scss">
.mapBox {
  height: calc(100vh - 64px);
  background: black;
}
</style>

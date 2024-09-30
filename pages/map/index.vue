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

function initMap() {
  const simpleMarker = ref<any>(null);
  NuxtApp.$Map()
    .load({
      key: "2f71fc9ffaf7a3b5711acf14162672c1",
      version: "2.0",
      plugins: [
        "AMap.AutoComplete",
        "AMap.PlaceSearch",
        "AMap.Geolocation",
        "AMap.Geocoder",
      ], //
      AMapUI: {
        // 是否加载 AMapUI，缺省不加载
        version: "1.1", // AMapUI 缺省 1.1
        plugins: ['overlay/SimpleMarker'],
      },
    })
    .then((AMap: any) => {
      // getAddress();
      let map = new AMap.Map("container", {
        zoom: 5,
        viewMode: "2D",
        center: [113.808299, 34.791787],
        mapStyle: "amap://styles/grey",
      });

      new (window as any).AMapUI.SimpleMarker({
        //前景文字
        iconLabel: "A",
        //图标主题
        iconTheme: "default",
        //背景图标样式
        iconStyle: "red",
        map: map,
        position: map.getCenter(),
      });
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
.container {
}
</style>

import AMapLoader from "@amap/amap-jsapi-loader";
export default defineNuxtPlugin(async (nuxtApp) => {
  return {
    provide: {
      Map: () => AMapLoader,
    },
  };
});

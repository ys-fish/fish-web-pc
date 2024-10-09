<template>
  <div class="headerBox" :class="{ headerT: isScroll }">
    <div class="headerLeft">
      <div class="headerLogo" :class="{ isTab: isSearch }">
        <v-img width="60" height="60" src="../public/xz.png" />
      </div>

      <div class="headerTab">
        <div
          class="headerTabItems"
          :class="{ isTab: isSearch }"
          @click="$router.push('/')"
          :style="{ color: route.fullPath == '/' ? '#80683c' : 'white' }"
        >
          首页
        </div>
        <div
          class="headerTabItems"
          :class="{ isTab: isSearch }"
          @click="$router.push('/gallery')"
          :style="{ color: route.fullPath == '/gallery' ? '#80683c' : 'white' }"
        >
          图鉴
        </div>
        <div
          class="headerTabItems"
          :class="{ isTab: isSearch }"
          @click="$router.push('/map')"
          :style="{ color: route.fullPath == '/map' ? '#80683c' : 'white' }"
        >
          地图
        </div>
        <div
          class="headerTabItems"
          :style="{ color: route.fullPath == '/post' ? '#80683c' : 'white' }"
          @click="$router.push('/post')"
          :class="{ isTab: isSearch }"
        >
          帖子
        </div>
      </div>
    </div>
    <div class="headerRight">
      <div class="headerRightTab">
        <div>
          <v-icon :class="{ isTab: isSearch }" @click="isSearch = true"
            >mdi-magnify</v-icon
          >
        </div>
        <div :class="{ isTab: isSearch }" @click="$router.push('/login')">
          登录
        </div>
        <div :class="{ isTab: isSearch }">注册</div>
      </div>
    </div>

    <div class="headerSearch">
      <div class="headerSearchInput" :class="{ isTran: isSearch }">
        <div class="headerSearchInputS">
          <v-icon>mdi-magnify</v-icon>
          <input placeholder="搜索你想知道的鱼类" />
          <v-icon @click="isSearch = false">mdi-close</v-icon>
        </div>
      </div>
      <div
        class="headerSearchInputBox"
        :style="{ opacity: isSearch ? 1 : 0, zIndex: isSearch ? 99999 : -1 }"
      >
        <div class="headerSearchInputBoxTitle">快速链接</div>
        <div class="headerSearchInputBoxItem">
          <div
            class="headerSearchInputBoxItems"
            :class="{ isX: isSearch }"
            style="transition: 0.6s"
          >
            查找鱼类图鉴
          </div>
          <div
            class="headerSearchInputBoxItems"
            :class="{ isX: isSearch }"
            style="transition: 0.6s; text-indent: 40px"
          >
            加入论坛
          </div>
          <div
            class="headerSearchInputBoxItems"
            :class="{ isX: isSearch }"
            style="transition: 0.6s; text-indent: 60px"
          >
            地图咨询
          </div>
          <div
            class="headerSearchInputBoxItems"
            :class="{ isX: isSearch }"
            style="transition: 0.6s; text-indent: 100px"
          >
            知识
          </div>
          <div
            class="headerSearchInputBoxItems"
            :class="{ isX: isSearch }"
            style="transition: 0.6s; text-indent: 140px"
          >
            帖子
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const isScroll = ref<boolean>(false);
const isSearch = ref<boolean>(false);

const Scroll = () => {
  if (route.fullPath == "/") {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 100) {
      isScroll.value = true;
    } else {
      isScroll.value = false;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", Scroll);
});

watch(route, () => {
  if (route.fullPath != "/") {
    isScroll.value = true;
  } else {
    isScroll.value = false;
  }
});

if (route.fullPath != "/") {
  isScroll.value = true;
} else {
  isScroll.value = false;
}
</script>

<style lang="scss" scoped>
.headerT {
  background-color: #0f0f0f !important;
  color: white !important;
  .headerSearchInputBox {
    background-color: #0f0f0f !important;
    position: relative;
  }
}
.headerBox {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 1;
  color: white;
  top: 0;
  transition: 0.3s;
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 0px 100px;
  align-items: center;
  width: 100%;
  .headerLeft {
    position: relative;
    display: flex;
    align-items: center;
    .headerTab {
      height: 30px;
      margin-left: 100px;
      display: flex;
      font-size: 14px;
      align-items: center;
      gap: 15px;
      .headerTabItems {
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
  .headerRight {
    .headerRightTab {
      display: flex;
      font-size: 14px;
      gap: 5px;
      cursor: pointer;
    }
  }

  .headerSearch {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    .headerSearchInput {
      width: 600px;
      height: 64px;
      transform: translateX(100px);
      opacity: 0;
      transition: 0.6s;
      .headerSearchInputS {
        height: 64px;
        display: flex;
        align-items: center;
        gap: 10px;
        input {
          flex: 1;
          outline: none;
          color: white;
          font-size: 14px;
        }
      }
    }
    .headerSearchInputBox {
      width: 600px;
      background-color: rgba(0, 0, 0, 0.3);
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
      box-sizing: border-box;
      padding: 30px;
      .headerSearchInputBoxTitle {
        font-size: 14px;
      }
      .headerSearchInputBoxItem {
        box-sizing: border-box;
        padding: 15px;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .headerSearchInputBoxItems {
          width: 100%;
          cursor: pointer;
          transition: 0.3s;
          text-indent: 40px;
          opacity: 0;
          &:hover {
            background-color: rgba(0, 0, 0, 0.6);
          }
        }
      }
    }
  }
}

// 公共样式
.isTab {
  transform: scale(0) !important;
  transition: 0.3s;
}

.isX {
  text-indent: 0px !important;
  opacity: 1 !important;
}

.isTran {
  transform: translateX(0) !important;
  opacity: 1 !important;
}
</style>

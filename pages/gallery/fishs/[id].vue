<template>
  <div style="background: black">
    <div style="height: 64px"></div>
    <div class="fishsBox">
      <div class="fishSearchBox">
        <div class="fishSearch">
          <v-icon>mdi-magnify</v-icon>
          <input type="text" placeholder="搜索该种类鱼儿" />
        </div>
        <div>
          <v-menu transition="scale-transition">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" density="compact" v-bind="props"
                >筛选</v-btn
              >
            </template>

            <v-list density="compact">
              <v-list-item
                density="compact"
                v-for="(item, i) in items"
                :key="i"
              >
                <div>{{ item.title }}</div>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <div class="fishTitle">虾虎</div>

      <div class="fishList">
        <div class="fishItem">
          <v-img class="fishItemImg" src="../../../public/yl.jpg" cover></v-img>
          <div class="fishItemBottom">
            <div class="fishItemBottomTitle">
              <div class="fishItemBottomTitle1">蓝鳍红神农虾虎</div>
              <div class="fishItemBottomTitle2">大型虾虎</div>
            </div>
            <div class="fishItemBottomBtn">
              <div>探索</div>
              <v-icon>mdi-pan-right</v-icon>
            </div>
          </div>
        </div>
        <div class="fishItem">
          <v-img class="fishItemImg" src="../../../public/yl.jpg" cover></v-img>
        </div>
        <div class="fishItem">
          <v-img class="fishItemImg" src="../../../public/yl.jpg" cover></v-img>
        </div>
        <div class="fishItem">
          <v-img class="fishItemImg" src="../../../public/yl.jpg" cover></v-img>
        </div>

        <div class="fishItem">
          <v-img class="fishItemImg" src="../../../public/yl.jpg" cover></v-img>
        </div>
        <div class="fishItem">
          <v-img class="fishItemImg" src="../../../public/yl.jpg" cover></v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);
</script>

<style lang="scss" scoped>
.fishsBox {
  height: calc(100vh - 64px);
  background: black;
  .fishSearchBox {
    display: flex;
    padding: 0 100px;
    height: 50px;
    background: #80683c;
    align-items: center;
    justify-content: space-between;
    .fishSearch {
      color: white;
      input {
        color: white;
        outline: none;
        font-size: 12px;
      }
    }
  }

  .fishTitle {
    display: flex;
    justify-content: center;
    color: white;
    font-size: 30px;
    font-weight: 800;
    margin-top: 100px;
  }
  .fishList {
    background: black;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px 20px;
    margin-top: 30px;
    .fishItem {
      flex-basis: calc(20% - 16px);
      cursor: pointer;
      transition: 0.3s;
      overflow: hidden;
      position: relative;
      z-index: 111;
      &:hover {
        will-change: transform;
        transform: scale(1.18);
        border: 1px #927345 solid;
        .fishItemBottom {
          bottom: 0px;
        }
      }
      .fishItemImg {
        height: 340px;
        flex-basis: calc(20% - 16px);
      }
      .fishItemBottom {
        position: absolute;
        bottom: -40px;
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        border-top: 1px #927345 solid;
        text-align: center;
        transition: 0.3s;
        .fishItemBottomTitle {
          height: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: white;
          .fishItemBottomTitle1 {
            font-size: 14px;
            color: #80683c;
          }
          .fishItemBottomTitle2 {
            font-size: 12px;
          }
        }
        .fishItemBottomBtn {
          display: flex;
          height: 40px;
          border-top: 1px #927345 solid;
          color: white;
          font-size: 12px;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>

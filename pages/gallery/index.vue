<template>
  <div style="  background: black;">
    <div style="height: 64px"></div>
    <div class="galleryBox">
      <div class="galleryBoxTitle">所有图鉴</div>
      <div class="galleryBoxTab">
        <v-tabs
          v-model="tab"
          density="compact"
          align-tabs="start"
          color="#80683c"
        >
          <v-tab :value="1">所有</v-tab>
          <v-tab :value="2">原生鱼</v-tab>
          <v-tab :value="3">Any</v-tab>
        </v-tabs>
      </div>
      <div class="galleryBoxList">
        <div class="galleryBoxListItem" @click="$router.push('/gallery/213')">
          <v-img src="../../public/yl.jpg"></v-img>
          <div class="galleryBoxListItemMask">
            <div class="galleryBoxListItemMaskTag">中国</div>
            <div class="galleryBoxListItemMaskTitle">溪流原生观赏鱼图鉴</div>
            <div class="galleryBoxListItemMaskIcon">
              <div class="galleryBoxListItemMaskBook">
                <div class="galleryBoxListItemMaskBookIcon">
                  <v-icon size="14">mdi-book-open-page-variant</v-icon>
                </div>
                <div class="galleryBoxListItemMaskText">精品图鉴</div>
              </div>
              <div class="galleryBoxListItemMaskDate">2024-10-12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const tab = ref();
</script>

<style scoped lang="scss">
.galleryBox {
  box-sizing: border-box;
  padding: 80px;
  color: white;
  background: black;
  height: 100vh;
  .galleryBoxTitle {
    font-size: 30px;
  }
  .galleryBoxTab {
    margin-top: 20px;
  }
  .galleryBoxList {
    margin-top: 40px;
    .galleryBoxListItem {
      width: 310px;
      border: 1px #ccc solid;
      position: relative;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        border: 1px #80683c solid;
      }
      .galleryBoxListItemMask {
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 20px;
        position: absolute;
        bottom: 0px;

        .galleryBoxListItemMaskTag {
          font-size: 14px;
        }
        .galleryBoxListItemMaskTitle {
          font-size: 20px;
          padding: 10px 0px;
        }
        .galleryBoxListItemMaskIcon {
          display: flex;
          justify-content: space-between;
          width: 100%;

          .galleryBoxListItemMaskBook {
            display: flex;
            .galleryBoxListItemMaskBookIcon {
              width: 24px;
              height: 24px;
              background: blue;
              display: flex;
              align-items: center;
              justify-content: center;
              border-top-left-radius: 4px;
              border-bottom-left-radius: 4px;
            }
            .galleryBoxListItemMaskText {
              font-size: 10px;
              box-sizing: border-box;
              padding: 0px 10px;
              border: 1px #8d6e63 solid;
              background: #1f2328;
              height: 24px;
              line-height: 24px;
              border-left: none;
              border-top-right-radius: 4px;
              border-bottom-right-radius: 4px;
            }
          }
          .galleryBoxListItemMaskDate {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>

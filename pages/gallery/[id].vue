<template>
  <div>
    <div style="height: 64px"></div>
    <div class="typeBox">
      <div class="typeBoxTo" @click="$router.back()">
        <v-icon>mdi-pan-left</v-icon>
        <div >返回图鉴</div>
      </div>
      <div class="gallery">
        <div class="galleryImage">
          <v-img src="../../public/yl.jpg"></v-img>
        </div>
        <div class="galleryText">
          <div class="galleryTitle">中国原生鱼</div>
          <div class="galleryDocs">
            顾名思义，中国原生鱼，泛指中国本土区域以内的土著鱼种。加之中国幅员辽阔，水系纵横，孕育出了不少原生鱼。下面我们就来感受那些适合观赏的中国原生鱼之魅。
          </div>
        </div>
      </div>
      <v-divider style="margin-top: 20px"></v-divider>
      <div class="typeList">
        <div class="typeItem" @click="$router.push('/gallery/fishs/123')">
          <v-img src="../../public/xh.webp" class="typeItemImg"> </v-img>
          <div class="typeItemTitle">虾虎</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.typeBox {
  height: calc(100vh - 64px);
  background: black;
  padding: 80px;
  color: white;
  .typeBoxTo {
    display: flex;
    font-size: 12px;
    cursor: pointer;
  }
  .gallery {
    display: flex;
    margin-top: 20px;
    gap: 20px;
    .galleryImage {
      width: 120px;
      border: 1px #80683c solid;
    }
    .galleryDocs {
      width: 500px;
      margin-top: 20px;
    }
  }
  .typeList {
    margin-top: 20px;
    .typeItem {
      width: 310px;
      height: 200px;
      border-radius: 10px;
      overflow: hidden;
      border: 1px #ccc solid;
      position: relative;
      cursor: pointer;

      &:hover {
        border: 1px #80683c solid;
        .typeItemImg {
          filter: brightness(1);
        }
        .typeItemTitle {
          opacity: 0;
        }
      }
      .typeItemImg {
        display: flex;
        align-items: center;
        text-align: center;
        width: 310px;
        height: 200px;
        filter: brightness(0.5);
        transition: 0.3s;
      }
      .typeItemTitle {
        font-size: 24px;
        font-weight: 800;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.3s;
      }
    }
  }
}
</style>

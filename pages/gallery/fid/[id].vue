<template>
  <div style="background: black">
    <div style="height: 64px"></div>
    <div class="fidsBox">
      <v-img src="../../../public/pp.avif" style="height: 100vh" cover>
        <div class="mask_box_left"></div>
        <div class="mask_box_top"></div>
        <div class="mask_box_rigth"></div>
        <div class="mask_box_bottom"></div>
      </v-img>
      <div class="fishText">
        <div class="fish_name">蓝鳍神农虾虎</div>

        <div class="fish_info">
          <div class="fish_info_left">
            <div class="fish_info_left_tle">多流域</div>
          </div>
          <div class="fish_info_centent"></div>
          <div class="fish_info_right"></div>
        </div>

        <div class="fish_tip">
          <div class="fish_tip_left" style="transform: rotate(-180deg)">
            <v-img
              width="400"
              style="margin-left: 10px"
              src="../../../public/leftLine.png"
            ></v-img>
          </div>
          <div class="fish_tip_name">
            <v-icon size="40" color="#80683c">mdi-youtube</v-icon>
            <div class="fish_tip_text">介绍视频</div>
          </div>
          <div class="fish_tip_left">
            <v-img
              width="400"
              style="margin-left: 10px"
              src="../../../public/leftLine.png"
            ></v-img>
          </div>
        </div>

        <div class="fish_box">
          <div class="fish_box_video">
            <v-img src="../../../public/swyl.jpg" width="" cover></v-img>
          </div>
          <div class="fish_box_right">
            <div class="fish_box_right_name">异鱲-溪流</div>
            <dov class="fish_box_right_docs">精美的溪流精灵</dov>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.fidsBox {
  height: calc(100vh - 64px);
  width: 100%;
  background: black;
  position: relative;
//   z-index: 888;
  overflow-y: auto;
//   padding-bottom: 200px;
  .mask_box_left {
    width: 400px;
    height: 100%;
    background-image: linear-gradient(
      260deg,
      rgba(0, 0, 0, 0) 65%,
      rgba(10, 10, 12, 0.1) 70%,
      rgb(10, 10, 12) 90%
    );
  }
  .mask_box_top {
    width: 100%;
    height: 400px;
    position: absolute;
    top: 0px;
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 65%,
      rgba(10, 10, 12, 0.1) 70%,
      rgb(10, 10, 12) 90%
    );
  }
  .mask_box_rigth {
    width: 400px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0px;
    background-image: linear-gradient(
      100deg,
      rgba(0, 0, 0, 0) 65%,
      rgba(10, 10, 12, 0.1) 70%,
      rgb(10, 10, 12) 90%
    );
  }
  .mask_box_bottom {
    width: 100%;
    height: 400px;
    position: absolute;
    bottom: 0;
    right: 0px;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 65%,
      rgba(10, 10, 12, 0.1) 70%,
      rgb(10, 10, 12) 90%
    );
  }

  .fishText {
    // margin-top: -240px;
    position: relative;
    // z-index: 9999;
    padding: 0px 100px;
    .fish_name {
      font-size: 70px;
      color: #80683c;
      text-align: center;
    }

    .fish_info {
      box-sizing: border-box;
      display: flex;
      gap: 20px;
      margin-top: 300px;
      .fish_info_left {
        background-color: rgb(17, 19, 24);
        flex: 0 0 23%;
        height: 600px;
        border: 1px solid rgb(49, 39, 30);
        .fish_info_left_tle {
          height: 80px;
          font-size: 14px;
          color: rgb(196, 185, 152);
          line-height: 80px;
          text-align: center;
          border-bottom: 1px solid rgb(49, 39, 30);
        }
      }
      .fish_info_centent {
        flex: 1;
        background: blue;
      }
      .fish_info_right {
        flex: 0 0 23%;
        height: 600px;
        background: red;
      }
    }

    .fish_tip {
      margin-top: 70px;
      display: flex;
      justify-content: center;
      .fish_tip_left {
        display: flex;
        width: 430px;
        align-items: center;
        &::after {
          height: 5px;
          width: 5px;
          position: absolute;
          transform: rotate(45deg);
          content: "◇";
          font-size: 0px;
          border-width: 1px;
          border-style: solid;
          border-color: rgb(55, 49, 33);
          border-image: initial;
        }
      }
      .fish_tip_name {
        text-align: center;
        width: 160px;
        .fish_tip_text {
          font-size: 12px;
          color: #80683c;
        }
      }
    }

    .fish_box {
      width: 100%;
      height: 500px;
      margin-top: 40px;
      border: 1px #80683c solid;
      border-radius: 5px;
      box-sizing: border-box;
      padding: 20px;
      display: flex;
      gap: 20px;
      .fish_box_video {
        flex: 0 0 65%;
      }
      .fish_box_right{
        .fish_box_right_name{
            color: #80683c;
            font-size: 20px;   
        }
        .fish_box_right_docs{
            color: white;
            font-size: 12px;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="videoBox">
      <div class="videoBoxMask">
        <div>
          <div class="videoBoxMaskLogo">
            <v-img width="120" height="120" src="../public/xz.png" />
            <div class="videoBoxMaskLogoLine"></div>
            <div class="videoBoxMaskLogoDocs">中国原生鱼之美</div>

            <div class="videoBoxMaskLogoBtn">开启旅途</div>
            <div class="videoBoxMaskLogoIcon">
              <div class="videoBoxMaskLogoIconMask">
                <v-icon style="color: white">mdi-chevron-double-down</v-icon>
                <v-icon style="color: white">mdi-chevron-double-down</v-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video
        autoplay
        muted
        loop
        
        src="../public/1005076152-1-208.mp4"
      ></video>
    </div>

    <div style="height: 1000px; background-color: #0f0f0f">
      <!-- 轮播 -->
      <div class="MainBox">
        <div class="HTitke">溪流精灵系列</div>
     
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.videoBox {
  position: relative;
  width: 100vw; /* 让容器宽度占满整个视口宽度 */
  height: calc(100vh); /* 让容器高度占满整个视口高度 */
  overflow: hidden; /* 防止视频超出容器边界 */
  .videoBoxMask {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    left: 0;
    top: 0;
    .videoBoxMaskLogo {
      width: 400px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .videoBoxMaskLogoLine {
        width: 200px;
        height: 1px;
        background-color: white;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 120px;
      }
      .videoBoxMaskLogoDocs {
        color: white;
        margin-top: 20px;
      }
      .videoBoxMaskLogoBtn {
        margin-top: 300px;
        display: inline-block;
        padding: 12px 40px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 20px;
        font-size: 12px;
        color: #90a4ae;
        cursor: pointer;
      }
      .videoBoxMaskLogoIcon {
        height: 25px;
        overflow: hidden;
        margin-top: 20px;
        .videoBoxMaskLogoIconMask {
          display: flex;
          flex-direction: column;
          transform: translateY(-25px);
          animation: IconA 1.2s infinite;

          @keyframes IconA {
            0% {
              transform: translateY(-25px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        }
      }
    }
  }
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%; /* 让视频宽度填充容器 */
    height: 100%; /* 让视频高度填充容器 */
    object-fit: cover; /* 使用 cover 属性确保视频内容不会缩小，填充整个容器 */
    transform: translate(-50%, -50%); /* 将视频居中 */
  }
}

.MainBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  .HTitke {
    color: #80683c;
    font-size: 26px;
  }
}
</style>

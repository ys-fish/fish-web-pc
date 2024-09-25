<template>
  <div>
    <div style="height: 64px"></div>
    <div class="loginBox">
      <div class="loginBoxS">
        <div class="loginBoxLogin" :class="{ loginActivie: isBtn }">
          <div class="loginTxt">
            <div class="loginTxtTitle">登录</div>
            <div class="loginTxtPs">
              Hi,欢迎来到文心图鉴，这里是集图鉴和社区一体的水族交流平台，希望能够在这里找到属于你的兴趣
            </div>
          </div>

          <v-form @submit.prevent>
            <div class="loginFrom">
              <div class="loginFromItem">
                <div class="loginFromItemTitle">用户名</div>
                <v-text-field
                  color="white"
                  v-model="ak"
                  density="compact"
                  variant="outlined"
                  style="font-size: 12px"
                  :rules="[
                    (value) => {
                      if (value) return true;

                      return 'You must enter a first name.';
                    },
                  ]"
                ></v-text-field>
              </div>

              <div class="loginFromItem">
                <div class="loginFromItemTitle">密码</div>
                <v-text-field
                  color="white"
                  v-model="ak"
                  density="compact"
                  variant="outlined"
                  style="font-size: 12px"
                  :rules="[
                    (value) => {
                      if (value) return true;

                      return 'You must enter a first name.';
                    },
                  ]"
                ></v-text-field>
              </div>

              <div class="loginFromBox">
                <div class="loginFromLeft">找回账号</div>
                <div class="loginFromRight">忘记密码</div>
              </div>

              <v-btn block>登录</v-btn>
            </div>
          </v-form>
        </div>
        <div class="loginBoxRegister" :class="{ registerActivie: isBtn }">
          <div class="loginTxt">
            <div class="loginTxtTitle">注册</div>
            <div class="loginTxtPs">
              Hi,欢迎来到文心图鉴，欢迎您成为社区的一份子，注册完成即可解锁所有权限
            </div>
          </div>

          <v-form @submit.prevent>
            <div class="loginFrom">
              <div class="loginFromItem">
                <div class="loginFromItemTitle">用户名</div>
                <v-text-field
                  color="white"
                  v-model="ak"
                  density="compact"
                  variant="outlined"
                  style="font-size: 12px"
                  :rules="[
                    (value) => {
                      if (value) return true;

                      return 'You must enter a first name.';
                    },
                  ]"
                ></v-text-field>
              </div>

              <div class="loginFromItem">
                <div class="loginFromItemTitle">密码</div>
                <v-text-field
                  color="white"
                  v-model="ak"
                  density="compact"
                  variant="outlined"
                  style="font-size: 12px"
                  :rules="[
                    (value) => {
                      if (value) return true;

                      return 'You must enter a first name.';
                    },
                  ]"
                ></v-text-field>
              </div>
              <div class="loginFromItem">
                <div class="loginFromItemTitle">确认密码</div>
                <v-text-field
                  color="white"
                  v-model="ak"
                  density="compact"
                  variant="outlined"
                  style="font-size: 12px"
                  :rules="[
                    (value) => {
                      if (value) return true;

                      return 'You must enter a first name.';
                    },
                  ]"
                ></v-text-field>
              </div>

              <v-btn block>注册</v-btn>
            </div>
          </v-form>
        </div>
        <div class="switchBtn" @click="isBtn = !isBtn">
          <v-icon>mdi-swap-horizontal-bold</v-icon>
        </div>
        <div class="loginBoxImage">
          <v-img height="600px" src="../../public/yl.jpg" cover></v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const ak = ref<string>();

const isBtn = ref<boolean>(false);
</script>

<style scoped lang="scss">
.loginBox {
  height: calc(100vh - 64px);
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  .loginBoxS {
    overflow: hidden;
    width: 700px;
    height: 600px;
    position: relative;
    border-radius: 10px;
    border: 1px #80683c solid;
    z-index: 9999;
    .loginActivie{
      right: 50% !important;
      opacity: 0 !important;
    }
    .loginBoxLogin {
      opacity: 1;
      position: absolute;
      width: 50%;
      right: 0;
      top: 0;
      height: 600px;
      box-sizing: border-box;
      padding: 30px;
      transition: .3s;
      .loginTxt {
        color: white;
        .loginTxtTitle {
          font-size: 20px;
        }
        .loginTxtPs {
          font-size: 12px;
          margin-top: 10px;
        }
      }

      .loginFrom {
        margin-top: 20px;
        .loginFromItem {
          .loginFromItemTitle {
            font-size: 12px;
            padding-bottom: 5px;
          }
        }
        .loginFromBox {
          display: flex;
          justify-content: space-between;
          font-size: 12px;

          padding-bottom: 20px;
        }
      }
    }
    .registerActivie {
      left: 50% !important;
      opacity: 1 !important;
    }
    .loginBoxRegister {
      position: absolute;
      opacity: 0;
      width: 50%;
      left: 0;
      top: 0;
      height: 600px;
      box-sizing: border-box;
      padding: 30px;
      transition: 0.3s;
      .loginTxt {
        color: white;
        .loginTxtTitle {
          font-size: 20px;
        }
        .loginTxtPs {
          font-size: 12px;
          margin-top: 10px;
        }
      }

      .loginFrom {
        margin-top: 20px;
        .loginFromItem {
          .loginFromItemTitle {
            font-size: 12px;
            padding-bottom: 5px;
          }
        }
        .loginFromBox {
          display: flex;
          justify-content: space-between;
          font-size: 12px;

          padding-bottom: 20px;
        }
      }
    }
    .loginBoxImage {
      position: absolute;
      width: 50%;
      left: 0;
      top: 0;
      height: 600px;
    }
    .switchBtn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #80683c;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>

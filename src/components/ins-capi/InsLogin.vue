<!--
名称：Ins 登录
版本：1.0.0
作者：林加炳
时间：2021年05月19日11:01:15
-->
<template>
  <div class="page-container ins-login">
    <!-- {{ msg }} -->
    <view class="bg-img">
      <image src="../../static/img/login/login-logo.png" class="logo" mode=""></image>
      <u-icon name="../../static/img/login/login-logo.png" />
      <view class="first"> 您好！</view>
      <view class="second"></view>
      <view class="welcome">欢迎进入工业智能维护系统</view>
      <view class="btn-img"></view>
    </view>
    <view class="bottom">
      <u-form :model="loginForm" class="login-form">
        <u-form-item
          left-icon="../../static/img/login/icon-user.png"
          :left-icon-style="leftIconStyle"
        >
          <u-input v-model="loginForm.account" :placeholder="'请输入账号'" />
        </u-form-item>
        <u-form-item
          left-icon="../../static/img/login/icon-password.png"
          :left-icon-style="leftIconStyle"
        >
          <u-input v-model="loginForm.password" type="password" :placeholder="'请输入密码'" />
        </u-form-item>

        <!-- 登录按钮 -->
        <view class="login" @click="login">登录</view>
        <!-- 其他信息 -->
        <view class="no-user">还没有账号？<text @click="goRegister">立即注册</text></view>
        <view class="no-user index-btn"><text @click="goBackHome">返回首页</text></view>
      </u-form>

      <!-- <view v-if="false" class="item">
        <i class="user"></i>
        <input
          v-model="form.account"
          type="text"
          placeholder="请输入账号"
          placeholder-style="color:rgba(180,180,180,1)"
          @blur="blur_input"
        />
      </view>
      <view v-if="false" class="item">
        <i class="password"></i>
        <input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
          placeholder-style="color:rgba(180,180,180,1)"
          @blur="blur_input"
        /> -->
      <!-- 				<view class="forget">
					忘记密码?
				</view> -->
      <!-- </view> -->
      <!-- <view class="login" @tap="login">登录</view> -->
      <!-- <view class="no-user">还没有账号？<text @tap="goRegister">立即注册</text></view>

      <view class="no-user index-btn"><text @tap="goBackHome">返回首页</text></view> -->
    </view>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from '@vue/composition-api'

// component

// use

// common
// import merge from 'lodash/merge'
// import copy from 'fast-copy'

// api
import logo from '../../static/img/login/login-logo.png'

export default defineComponent({
  name: 'InsLogin',
  components: {},
  props: {
    account: { type: String, default: null },
    password: { type: String, default: null },
  },
  setup(props, ctx) {
    const state = reactive({
      msg: 'hello InsLogin 01',
      loginForm: {
        account: null,
        password: null,
      },
      leftIconStyle: { width: '28rpx' },
      logo: logo,
    })

    const login = () => {
      ctx.emit('login', state.loginForm)
      // uni.reLaunch({
      //   url: '/pages/tab-bar/device/DeviceHome',
      // })
    }

    const goRegister = () => {}

    const goBackHome = () => {}

    const render = () => {
      //
    }

    const init = () => {
      render()
      state.loginForm.account = props.account
      state.loginForm.password = props.password
    }

    onMounted(() => {
      init()
    })

    return {
      ...toRefs(state),
      login,
      goRegister,
      goBackHome,
    }
  },
})
</script>

<style lang="scss" scoped>
.ins-login {
  visibility: initial;

  background: #fff;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);

  .main {
    height: 100%;
    width: 100%;
    background: #fff;
    font-family: Source Han Serif SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }

  .bg-img {
    height: 528rpx;
    width: 100%;
    background-image: url('../../static/img/login/login-bg.png');
    background-repeat: no-repeat;
    background-size: 100%;
    position: relative;
  }

  .logo {
    width: 128rpx;
    height: 46rpx;
    position: absolute;
    bottom: 291rpx;
    left: 70rpx;
  }

  .first {
    font-size: 42rpx;
    position: absolute;
    bottom: 291rpx;
    left: 220rpx;
  }

  .second {
    width: 100rpx;
    height: 24rpx;
    background: rgba(255, 255, 255, 1);
    opacity: 0.2;
    border-radius: 12rpx;
    position: absolute;
    bottom: 291rpx;
    left: 220rpx;
  }

  .welcome {
    font-size: 36rpx;
    position: absolute;
    bottom: 214rpx;
    left: 70rpx;
  }

  .btn-img {
    position: absolute;
    bottom: 41rpx;
    right: 70rpx;
    height: 46rpx;
    width: 88rpx;
    background-image: url('../../static/img/login/login-text.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .bottom {
    padding-top: 115rpx;
  }

  .bottom .item {
    position: relative;
    padding-left: 70rpx;
  }

  .bottom .item .user {
    width: 27rpx;
    height: 33rpx;
    position: absolute;
    top: 12rpx;
    // background-image: url('~@/src/static/login/my.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .bottom .item .password {
    width: 35rpx;
    height: 25rpx;
    position: absolute;
    top: 16rpx;
    // background-image: url('~@/src/static/login/mima.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .bottom .item .forget {
    position: absolute;
    right: 69rpx;
    bottom: -60rpx;
    font-size: 24rpx;
    font-weight: 500;
    color: rgba(82, 102, 235, 1);
    line-height: 36rpx;
  }

  .bottom .item input {
    font-size: 32rpx;
    width: 564rpx;
    font-weight: 500;
    color: rgba(50, 50, 50, 1);
    border-bottom: 1rpx solid rgba(225, 225, 225, 1);
    margin-bottom: 68rpx;
    padding: 0 0 31rpx 46rpx;
  }

  .bottom .login {
    width: 610rpx;
    height: 88rpx;
    background: rgba(82, 102, 235, 1);
    box-shadow: 0px 2rpx 15rpx 0rpx rgba(82, 235, 102, 0.35);
    border-radius: 44rpx;
    font-size: 32rpx;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 88rpx;
    text-align: center;
    margin: 100rpx auto 0;
  }

  .bottom .no-user {
    text-align: center;
    margin-top: 40rpx;
    font-size: 28rpx;
    font-weight: 500;
    color: rgba(15, 18, 27, 1);
    line-height: 36rpx;
  }

  .bottom .no-user text {
    color: #5266eb;
  }

  //
  .login-form {
    padding: 0 76rpx;
    .icon-user {
      width: 27rpx;
      height: 33rpx;
      position: absolute;
      top: 12rpx;
      // background-image: url('../../static/img/login/my.png');
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .icon-p {
      width: 35rpx;
      height: 25rpx;
      position: absolute;
      top: 16rpx;
      // background-image: url('~@/src/static/login/mima.png');
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
}
</style>

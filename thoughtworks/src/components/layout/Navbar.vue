<template lang="html">
 <div class="header-outer" :class="{showMenu: isShow}">
    <div class="header-container">
      <span class="icon-navicon" v-if="clientWidth < 1024" @click="showMenu"></span>
      <img src="../../../static/imgs/logo.svg" alt="logo" class="logo-icon"/>
      <div class="avatar-box" @click="settings">
        <img src="../../../static/imgs/avatar.jpg" alt="avatar" class="avatar-icon"/>
      </div>
      <div class="settings-box" v-if="showSetting">
        <div class="setting-item">
          <span class="icon-id-card setting-icon"></span>
          <span >Profile</span>
        </div>
        <div class="setting-item">
          <span class="icon-sign-in setting-icon"></span>
          <span >sign out</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showSetting: false,
      clientWidth: '',
      isShow: false
    }
  },
  mounted () {
    this.clientWidth = document.body.clientWidth
  },
  methods: {
    settings () {
      this.showSetting = !this.showSetting
    },
    showMenu () {
      this.isShow = !this.isShow
      this.$emit('showMenu', this.isShow)
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 1200px) {
  .header-outer {
    background: #fff;
    width: 100%;
    .header-container {
      position: relative;
      width: 1000px;
      height: 60px;
      background: #fff;
      text-align: center;
      margin: 0 auto;
      .logo-icon {
        width: 80px;
        height: 40px;
        margin-top: 10px;
      }
      .avatar-box {
        width: 40px;
        margin-top: 10px;
        float: right;
        border-radius: 20px;
        overflow: hidden;
        .avatar-icon {
          width: 40px;
          height: 40px;
        }
      }
      .settings-box {
        position: absolute;
        top: 60px;
        right: 0px;
        /* border: 1px solid red; */
        width: 110px;
        height: 76px;
        box-shadow: 1px 1px 1px 1px #ccc;
        background: #fff;
        z-index: 10;
        .setting-item {
          width: 100px;
          height: 20px;
          line-height: 20px;
          color: #333;
          text-align: left;
          padding: 5px;
          margin-top: 5px;
        }
        .setting-item:hover {
          width: 100px;
          height: 20px;
          line-height: 20px;
          color: #333;
          text-align: left;
          padding: 5px;
          background: #efefef;
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .header-outer {
    background: #fff;
    width: 100%;
    .header-container {
      position: relative;
      width: 1000px;
      height: 60px;
      background: #fff;
      text-align: center;
      margin: 0 auto;
      .logo-icon {
        width: 80px;
        height: 40px;
        margin-top: 10px;
      }
      .avatar-box {
        width: 40px;
        margin-top: 10px;
        float: right;
        border-radius: 20px;
        overflow: hidden;
        .avatar-icon {
          width: 40px;
          height: 40px;
        }
      }
      .settings-box {
        position: absolute;
        top: 60px;
        right: 0px;
        /* border: 1px solid red; */
        width: 110px;
        height: 76px;
        box-shadow: 1px 1px 1px 1px #ccc;
        background: #fff;
        z-index: 10;
        .setting-item {
          width: 100px;
          height: 20px;
          line-height: 20px;
          color: #333;
          text-align: left;
          padding: 5px;
          margin-top: 5px;
        }
        .setting-item:hover {
          width: 100px;
          height: 20px;
          line-height: 20px;
          color: #333;
          text-align: left;
          padding: 5px;
          background: #efefef;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .showMenu {
    width: 75% !important;
  }
  .header-outer {
    background: #fff;
    width: 100%;
    float: right;
    .header-container {
      position: relative;
      height: 60px;
      background: #fff;
      text-align: center;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      .icon-navicon {
        color: #000;
      }
      .logo-icon {
        width: 80px;
        height: 40px;
        margin-top: 10px;
      }
      .avatar-box {
        width: 40px;
        margin-top: 10px;
        float: right;
        border-radius: 20px;
        overflow: hidden;
        .avatar-icon {
          width: 40px;
          height: 40px;
        }
      }
      .settings-box {
        position: absolute;
        top: 60px;
        right: 0px;
        /* border: 1px solid red; */
        width: 110px;
        height: 76px;
        box-shadow: 1px 1px 1px 1px #ccc;
        background: #fff;
        z-index: 10;
        .setting-item {
          width: 100px;
          height: 20px;
          line-height: 20px;
          color: #333;
          text-align: left;
          padding: 5px;
          margin-top: 5px;
        }
        .setting-item:hover {
          width: 100px;
          height: 20px;
          line-height: 20px;
          color: #333;
          text-align: left;
          padding: 5px;
          background: #efefef;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .header-outer {
  background: #fff;
  width: 100%;
  .header-container {
    position: relative;
    height: 60px;
    background: #fff;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    .icon-navicon {
        color: #000;
      }
    .logo-icon {
      width: 80px;
      height: 40px;
      margin-top: 10px;
    }
    .avatar-box {
      width: 40px;
      margin-top: 10px;
      float: right;
      border-radius: 20px;
      overflow: hidden;
      .avatar-icon {
        width: 40px;
        height: 40px;
      }
    }
    .settings-box {
      position: absolute;
      top: 60px;
      right: 0px;
      /* border: 1px solid red; */
      width: 110px;
      height: 76px;
      box-shadow: 1px 1px 1px 1px #ccc;
      background: #fff;
      z-index: 10;
      .setting-item {
        width: 100px;
        height: 20px;
        line-height: 20px;
        color: #333;
        text-align: left;
        padding: 5px;
        margin-top: 5px;
      }
      .setting-item:hover {
        width: 100px;
        height: 20px;
        line-height: 20px;
        color: #333;
        text-align: left;
        padding: 5px;
        background: #efefef;
      }
    }
  }
}
}
</style>

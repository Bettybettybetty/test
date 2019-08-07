<template lang="html">
  <div class="left-menu" v-if="clientWidth >= 1024 || isShow">
    <span class="icon-close" @click="closeMenu"></span>
    <ul class="menu-list" :class="{marginTop: isShow}">
      <li>
        <span class="icon-dashboard"></span>
        <router-link class="link-color" to="/dashboard">DASHBOARD</router-link>
        </li>
      <li>
        <span class="icon-sitemap"></span>
        <router-link class="link-color" to="/agent">AGENT</router-link>
      </li>
      <li>
        <span class="icon-boat"></span>
        <router-link class="link-color" to="/mycruise">MY CRUISE</router-link>
        </li>
      <li>
        <span class="icon-life-bouy"></span>
        <router-link class="link-color" to="/help">HELP</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      clientWidth: ''
    }
  },
  mounted () {
    this.clientWidth = document.body.clientWidth
  },
  methods: {
    closeMenu () {
      this.$emit('closeMenu', false)
      this.isShow = false
    }
  }
}
</script>

<style lang="scss">
$lightBlue: #00b4cf;
$darkBlue: #2d4054;
@media screen and (min-width: 1200px) {
  .left-menu {
    width: 200px;
    min-height: calc(100vh - 60px);
    background: #2d4054;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10%;
    .menu-list {
      color: #fff;
      font-size: 14px;
      text-align: left;
      li {
        height: 45px;
        line-height: 45px;
        cursor: pointer;
        padding: 0 10px;
        .link-color {
          color: #fff;
          text-decoration: none;
        }
      }
      li:hover, link-color:hover {
        cursor: pointer;
        color: #00b4cf;
        padding: 0 10px;
        display: inline-block;
      }
    }
  }
}
@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .left-menu {
    width: 200px;
    min-height: calc(100vh - 60px);
    background: #2d4054;
    display: inline-block;
    vertical-align: middle;
    .menu-list {
      color: #fff;
      font-size: 14px;
      text-align: left;
      li {
        height: 45px;
        line-height: 45px;
        cursor: pointer;
        padding: 0 10px;
        .link-color {
          color: #fff;
          text-decoration: none;
        }
      }
      li:hover, link-color:hover {
        cursor: pointer;
        color: #00b4cf;
        padding: 0 10px;
        display: inline-block;
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .left-menu {
    width: 200px;
    min-height: calc(100vh - 60px);
    background: #2d4054;
    display: inline-block;
    vertical-align: middle;
    .icon-close {
      color: $lightBlue;
      font-size: 14px;
      float: right;
      display: inline-block;
      padding-top: 10px;
      padding-right: 5px;
    }
    .marginTop {
      margin-top: 60px;
    }
    .menu-list {
      color: #fff;
      font-size: 14px;
      text-align: left;
      li {
        height: 45px;
        line-height: 45px;
        cursor: pointer;
        padding: 0 10px;
        .link-color {
          color: #fff;
          text-decoration: none;
        }
      }
      li:hover, link-color:hover {
        cursor: pointer;
        color: #00b4cf;
        padding: 0 10px;
        display: inline-block;
      }
    }
  }
}
@media screen and (max-width: 768px) {}

</style>

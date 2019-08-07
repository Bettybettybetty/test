<template lang="html">
  <div class="main">
    <Navbar @showMenu="showMenu" :isShow="isShow" ></Navbar>
    <Sidebar :isShow="isShow" class="sidebar" @closeMenu="closeMenu"></Sidebar>
    <transition
      mode="out-in"
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
      appear>
      <router-view class="animated"></router-view>
    </transition>
    <maina></maina>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Maina from '../../views/page/dashboard'
export default {
  components: {
    Sidebar,
    Navbar,
    Maina
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showMenu (res) {
      this.isShow = res
    },
    closeMenu (res) {
      this.isShow = res
    }
  }
}
</script>

<style lang="css">
.main {
  background: #f5f5f5;
  width: 100%;
  min-height: 100vh;
}
.sidebar {
  float: left;
}
</style>

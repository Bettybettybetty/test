<template>
  <div id="app">
    <sidebar ></sidebar>
    <navbar></navbar>
    <app-main></app-main>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from '../components/layout/'
export default {
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
}
</script>

<style lang="scss">
</style>

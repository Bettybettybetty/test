<template>
  <div class="right-content">
    agent
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
.right-content {
    width: 790px;
    min-height: calc(100vh - 60px);
    display: inline-block;
    vertical-align: middle;
}
.statistics-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.dashboard {
    width: 240px;
    height: 100px;
}
.first {
    background: #fdb82b;
}
.second {
    background: #81ba43;
}
.third {
    background: #fff;
}
.nav-container {
   width: 100%;
   background: #fff;
   margin-top: 2%;
}
.nav-list {
    display: inline-block;
}
.nav-list li {
    width: 60px;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    display: inline-block;
    text-align: center;
    border-right: 1px solid #eee;
}
.input-container {
    width: 150px;
    height: 30px;
    background: #f3f3f3;
    display: inline-block;
    vertical-align: middle;
}
.search-icon {
    width: 20px;
    height: 20px;
    margin-top: 5px;
    margin-left: 5px;
}
.menu-container {
    float: right;
    margin-top: 5px;
    margin-right: 10px;
}
.menu-icon {
  margin-left: 10px;
}
.menu-icon {
    width: 20px;
    height: 20px;
}
</style>

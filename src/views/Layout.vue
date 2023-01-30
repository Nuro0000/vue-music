<template>
  <div>
    <Nav></Nav>
    <keep-alive>    <!-- 缓存组件 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue"
export default {
  components: {
    Nav
  }
}
</script>

<style>
</style>
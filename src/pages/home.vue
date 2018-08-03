<template>
  <div class="home">
    <header-view></header-view>
    <div class="main">
      <left-menu></left-menu>
      <div class="main-content">
            <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import headerView from 'components/header-view'
import leftMenu from 'components/left-menu'
export default {
  components: {
    headerView,
    leftMenu
  }
}
</script>

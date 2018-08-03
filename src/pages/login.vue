<template>
  <div class="login">
    <div class="logo">
      登陆界面
      <button @click="login">登陆</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login () {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

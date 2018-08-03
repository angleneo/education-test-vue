<template>
  <div class="left-menu">
    <ul>
      <li>
        <router-link to="/student">学生信息管理</router-link>
      </li>
      <li>
        <router-link to="/teacher">教师信息管理</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.left-menu {
  float: left;
  min-width: 15%;
  width: 220x;
  ul li {
    list-style-type: none;
  }
}
</style>

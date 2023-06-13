<template>
    <header>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <RouterLink to="/student_search"  class="nav-link ">學生歷史查詢</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/input"  class="nav-link ">新增成績</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/"  class="nav-link ">登出</RouterLink>
      </li>
    </ul>
</header>
  </template>
  
  <script >
import { RouterLink } from 'vue-router';


  </script>
  
  <style scoped>
header {
  line-height: 2;
  max-height: 100vh;
  width: 100%;
  position: fixed;
  width: 100%;
  top: 0%;
  right: 0%;
  left: 0%;
}


  </style>
  
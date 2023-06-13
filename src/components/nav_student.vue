<template>
    <header>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/student">成績單</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/student_search">歷史查詢</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link active" aria-current="page" to="/">登出</RouterLink>
      </li>
    </ul>
</header>
  </template>
  
  <script setup>
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
  
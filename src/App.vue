<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<div class="view">
  <RouterView></RouterView>
</div>

</template>

<style scoped>
.view{
  display: table-cell;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0%;
  right: 0%;
  left: 0%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

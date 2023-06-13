<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main>
    <div >
  <RouterView></RouterView>
</div>
  </main>


</template>

<style >
main {
        display: table-cell;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 48px;
  right: 0%;
  left: 0%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
    }
</style>

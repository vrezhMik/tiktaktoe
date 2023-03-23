<template>
  <main>
    <div class="container">
      <Square v-for="i in 9" :key="i" @click="addItem()" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import Square from "./components/Square.vue";

function addItem(): void {
  console.log("addItem");
}
</script>

<style lang="scss">
main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    border: 1px solid black;
    width: 450px;
    height: 450px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

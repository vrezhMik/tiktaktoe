<template>
  <main>
    <Player />
    <div class="container">
      <Square v-for="i in 9" :key="i" @click="addItem(i)" :id="i" />
    </div>
    <Player />
  </main>
</template>

<script lang="ts" setup>
import Square from "./components/Square.vue";
import Player from "./components/Player.vue";
import Store from "./store/index";
function addItem(id: number): void {
  if (Store.state.turn % 2 == 0) Store.state.val = "X";
  else Store.state.val = "O";
  Store.state.turn++;
  if (!Store.state.blocks[id]) Store.state.blocks[id] = Store.state.val;
  Store.state.pressed = id;
}
</script>

<style lang="scss">
main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
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

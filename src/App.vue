<template>
  <main>
    <Player />
    <div class="container">
      <Square v-for="i in 9" :key="i" @click="addItem(i - 1)" :id="i - 1" />
    </div>
    <Player />
  </main>
</template>

<script lang="ts" setup>
import Square from "./components/Square.vue";
import Player from "./components/Player.vue";
import Store from "./store/index";
function addItem(id: number): void {
  if (Store.state.gameMode) {
    if (!Store.state.blocks[id]) {
      if (Store.state.turn % 2 == 0) Store.state.val = "X";
      else Store.state.val = "O";
      Store.state.turn++;
      set_to_check_arr(id);
    }
    if (!Store.state.blocks[id]) Store.state.blocks[id] = Store.state.val;
    Store.state.pressed = id;
    if (Store.state.blocks.length > 2) check();
  }
}

function check(): void {
  if (check_diaganale_right()) alert("You won1");
  else if (check_diaganale_left()) alert("You won2");
  else if (check_row()) alert("You won3");
  else if (check_column()) alert("You won4");
}

function check_row(): boolean {
  var hasWinner = false;
  const checkBlocks = Store.state.checkBlocks;
  const boardSize = 3;
  for (let i = 0; i < boardSize; i++) {
    const row = checkBlocks[i];

    const hasX = row.includes("X");
    const hasO = row.includes("O");
    if (row[0] && row[1] && row[2]) {
      const hasWinnginRow = (hasX && !hasO) || (!hasX && hasO);
      if (hasWinnginRow) {
        Store.state.gameMode = false;
        hasWinner = true;
        break;
      }
    }
  }
  return hasWinner;
}

function check_column(): boolean {
  const checkBlocks = Store.state.checkBlocks;
  const boardSize = 3;
  for (var i = 0; i < boardSize; i++) {
    const top = checkBlocks[0][i];
    const middle = checkBlocks[1][i];
    const bottom = checkBlocks[2][i];

    const isFull = top && middle && bottom;
    if (top === middle && top === bottom && isFull) {
      Store.state.gameMode = false;
      return true;
    }
  }
  return false;
}

function check_diaganale_right(): boolean {
  const checkBlocks = Store.state.checkBlocks;
  const top = checkBlocks[0][0];
  const middle = checkBlocks[1][1];
  const bottom = checkBlocks[2][2];
  if (top && middle && bottom) {
    if (top == middle && top == bottom) {
      Store.state.gameMode = false;
      return true;
    }
  }
  return false;
}

function check_diaganale_left(): boolean {
  const checkBlocks = Store.state.checkBlocks;
  const top = checkBlocks[2][0];
  const middle = checkBlocks[1][1];
  const bottom = checkBlocks[0][2];
  if (top && middle && bottom) {
    if (top == middle && top == bottom) {
      Store.state.gameMode = false;
      return true;
    }
  }
  return false;
}

function set_to_check_arr(id: number): void {
  if (id < 3) Store.state.checkBlocks[0][id] = Store.state.val;
  else if (id < 6)
    Store.state.checkBlocks[1][Math.round(id % 3)] = Store.state.val;
  else Store.state.checkBlocks[2][Math.round(id % 3)] = Store.state.val;
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

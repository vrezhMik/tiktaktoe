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
import { watch } from "vue";
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
  }
}
watch(Store.state.blocks, () => {
  if (Store.state.blocks.length > 2 && Store.state.gameMode) check();
});

function check(): void {
  // if (empty_spaces()) end_game();
  // else if (check_diaganale_right()) end_game();
  // else if (check_diaganale_left()) end_game();
  // else if (check_row()) end_game();
  // else if (check_column()) end_game();

  if (empty_spaces()) console.log("end_game_empty_spaces");
  else if (check_diaganale_right()) console.log("end_game_diaganale_right");
  else if (check_diaganale_left()) console.log("end_game_diaganale_left");
  else if (check_row()) console.log("end_game_row");
  else if (check_column()) console.log("end_game_column");
}

function check_row(): boolean {
  var hasWinner: boolean = false;
  const checkBlocks: Array<Array<string>> = Store.state.checkBlocks;
  const boardSize: number = 3;
  for (let i = 0; i < boardSize; i++) {
    const row: Array<string> = checkBlocks[i];

    const hasX: boolean = row.includes("X");
    const hasO: boolean = row.includes("O");
    if (row[0] && row[1] && row[2]) {
      const hasWinnginRow: boolean = (hasX && !hasO) || (!hasX && hasO);
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
  const checkBlocks: Array<Array<string>> = Store.state.checkBlocks;
  const boardSize: number = 3;

  for (var i = 0; i < boardSize; i++) {
    const top: string = checkBlocks[0][i];
    const middle: string = checkBlocks[1][i];
    const bottom: string = checkBlocks[2][i];

    const isFull: string = top && middle && bottom;
    if (top === middle && top === bottom && isFull) {
      Store.state.gameMode = false;
      return true;
    }
  }
  return false;
}

function check_diaganale_right(): boolean {
  const checkBlocks: Array<Array<string>> = Store.state.checkBlocks;

  const top: string = checkBlocks[0][0];
  const middle: string = checkBlocks[1][1];
  const bottom: string = checkBlocks[2][2];
  if (top && middle && bottom) {
    if (top == middle && top == bottom) {
      Store.state.gameMode = false;
      return true;
    }
  }
  return false;
}

function check_diaganale_left(): boolean {
  const checkBlocks: Array<Array<string>> = Store.state.checkBlocks;

  const top: string = checkBlocks[2][0];
  const middle: string = checkBlocks[1][1];
  const bottom: string = checkBlocks[0][2];
  if (top && middle && bottom) {
    if (top == middle && top == bottom) {
      Store.state.gameMode = false;
      return true;
    }
  }
  return false;
}

function empty_spaces(): boolean {
  const checkBlocks: Array<Array<string>> = Store.state.checkBlocks;

  const topRow: number = checkBlocks[0].length;
  const middleRow: number = checkBlocks[1].length;
  const bottomRow: number = checkBlocks[2].length;
  const boardSize: number = 3;

  if (
    topRow === boardSize &&
    middleRow === boardSize &&
    bottomRow === boardSize
  ) {
    Store.state.gameMode = false;
    return true;
  }
  return false;
}

function set_to_check_arr(id: number): void {
  if (id < 3) Store.state.checkBlocks[0][id] = Store.state.val;
  else if (id < 6)
    Store.state.checkBlocks[1][Math.round(id % 3)] = Store.state.val;
  else Store.state.checkBlocks[2][Math.round(id % 3)] = Store.state.val;
}

function end_game(): void {
  Store.state.gameMode = false;
  setTimeout(() => {
    Store.state.turn = 0;
    Store.state.val = "X";
    Store.state.pressed = 0;
    Store.state.blocks.splice(0, Store.state.blocks.length);
    Store.state.checkBlocks = [[], [], []];
    Store.state.gameMode = true;
  }, 500);
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

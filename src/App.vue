<template>
  <main>
    <Player
      :won="Store.state.userWon"
      player="User"
      :loose="Store.state.opponentWon"
    />
    <div class="container">
      <Square v-for="i in 9" :key="i" @click="addItem(i - 1)" :id="i - 1" />
    </div>
    <Player
      player="AI"
      :loose="Store.state.userWon"
      :won="Store.state.opponentWon"
    />
  </main>
</template>

<script lang="ts" setup>
import Square from "./components/Square.vue";
import Player from "./components/Player.vue";
import Store from "./store/index";
import { watch } from "vue";

function addItem(blockId: number): void {
  const { gameMode, blocks } = Store.state;
  if (!gameMode) {
    return;
  }

  const blockAlreadyAdded = Boolean(blocks[blockId]);
  if (blockAlreadyAdded) {
    return;
  }

  if (!Store.state.blocks[blockId]) {
    if (Store.state.turn % 2 == 0) Store.state.val = "X";
    else Store.state.val = "O";
    Store.state.turn++;
    set_to_check_arr(blockId);
  }
  if (!Store.state.blocks[blockId])
    Store.state.blocks[blockId] = Store.state.val;
  Store.state.pressed = blockId;
}
watch(Store.state.blocks, () => {
  if (Store.state.blocks.length > 2 && Store.state.gameMode)
    check_the_board_state();
});

function check_the_board_state(): void {
  if (empty_spaces()) reset_the_game();
  else if (check_diaganale_right()) reset_the_game();
  else if (check_diaganale_left()) reset_the_game();
  else if (check_row()) reset_the_game();
  else if (check_column()) reset_the_game();
}

function check_row(): boolean {
  let hasWinner: boolean = false;
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

  for (let i = 0; i < boardSize; i++) {
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

  const topRow: Array<string> = checkBlocks[0];
  const middleRow: Array<string> = checkBlocks[1];
  const bottomRow: Array<string> = checkBlocks[2];
  const boardSize: number = 3;

  if (
    is_array_full(topRow) === boardSize &&
    is_array_full(middleRow) === boardSize &&
    is_array_full(bottomRow) === boardSize
  ) {
    Store.state.gameMode = false;
    return true;
  }
  return false;
}

function is_array_full(arr: Array<string>) {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (!arr[i]) return count;
    count++;
  }
  return count;
}

function set_to_check_arr(id: number): void {
  if (id < 3) Store.state.checkBlocks[0][id] = Store.state.val;
  else if (id < 6)
    Store.state.checkBlocks[1][Math.round(id % 3)] = Store.state.val;
  else Store.state.checkBlocks[2][Math.round(id % 3)] = Store.state.val;
}

function reset_the_game(): void {
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

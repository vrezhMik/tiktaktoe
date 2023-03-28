<template>
  <div class="player">
    <h1>{{ props.player }}</h1>
    <h1>Won: {{ props.won }}</h1>
    <h1>Tie: {{ Store.state.tie }}</h1>
    <h1>Loose: {{ props.loose }}</h1>
  </div>
</template>
<script lang="ts" setup>
import Store from "../store/index";
const props = defineProps({
  player: String,
  won: Number,
  loose: Number,
});
</script>
<style lang="scss" scoped>
.player {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  row-gap: 25px;
  height: 100%;
  width: 250px;
  background-color: #9ad4ff;
  @media screen and (max-width: 391px) {
    width: 100%;
    padding-top: 10px;
    row-gap: 5px;
    height: 220px;
  }
}
</style>

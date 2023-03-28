<template>
  <div
    class="square"
    :class="{
      x: Store.state.blocks[props.id] == 'X',
      o: Store.state.blocks[props.id] == 'O',
    }"
  >
    {{ Store.state.blocks[props.id] }}
  </div>
</template>

<script lang="ts" setup>
import Store from "./../store/index";
const props = defineProps({
  id: Number,
});
</script>
<style scoped lang="scss">
.square {
  height: 150px;
  width: 150px;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  @media screen and (max-width: 391px) {
    height: 130px;
    width: 130px;
  }
}
.x {
  color: red;
}

.o {
  color: green;
}
</style>

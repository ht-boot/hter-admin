<template>
  <VueDraggableNext
    v-model="gridList"
    class="container_box grid-container"
    item-key="id"
    animation="300"
    chosen-class="chosen"
    force-fallback="true"
  >
    <div
      v-for="element in gridList"
      :key="element.id"
      :class="'item-' + element.num"
    >
      {{ element.num }}
    </div>
  </VueDraggableNext>
</template>

<script setup lang="ts" name="draggable">
import { ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";

let gridList = ref([
  { id: 1, num: 1 },
  { id: 2, num: 2 },
  { id: 3, num: 3 },
  { id: 4, num: 4 },
  { id: 5, num: 5 },
  { id: 6, num: 6 },
  { id: 7, num: 7 },
  { id: 8, num: 8 },
  { id: 9, num: 9 },
]);
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-rows: 33.3% 33.3% 33.3%;
  grid-template-columns: 33.3% 33.3% 33.3%;
  height: 100%;
}

@for $n from 1 through 9 {
  .item-#{$n} {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: move;
    background: rgba(random(200), random(200), random(200), 0.9);
    border: 1px solid #e5e4e9;
    border-radius: 10px;
  }
}
.chosen {
  border: 2px solid #89cffd !important;
}
</style>

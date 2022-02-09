<template>
  <div>
    <div v-for="(item, index) in list" :key="index" @click="onItemClick(item)">
      <LText v-bind="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LText from "../l-text/index.vue";

export default defineComponent({
  name: "ComponentList",
  components: { LText },
  props: {
    list: {
      type: Array,
      require: true,
    },
  },
  emits: ["on-item-click"],
  setup(props, context) {
    const onItemClick = (data: any) => {
      context.emit("on-item-click", data);
    };

    return { onItemClick };
  },
});
</script>

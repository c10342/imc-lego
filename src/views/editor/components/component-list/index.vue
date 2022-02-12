<template>
  <div>
    <div v-for="(item, index) in list" :key="index" @click="onItemClick(item)">
      <LText v-bind="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LText from "@/components/l-text/index.vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";

export default defineComponent({
  name: "ComponentList",
  components: { LText },
  props: {
    list: {
      type: Array,
      require: true,
    },
  },
  setup(props, context) {
    const store = useStore<GlobalDataProps>();
    const onItemClick = (data: any) => {
      store.commit("addComponent", data);
    };

    return { onItemClick };
  },
});
</script>

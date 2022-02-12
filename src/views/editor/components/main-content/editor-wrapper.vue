<template>
  <div
    class="editor-wrapper"
    :class="{ active: isActive }"
    @click="onItemClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { GlobalDataProps } from "@/store";
import { ComponentData } from "@/store/editor";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    id: {
      type: String,
      require: true,
    },
  },
  setup(props, context) {
    const store = useStore<GlobalDataProps>();
    // 设置选中的元素
    const onItemClick = () => {
      store.commit("setActive", props.id);
    };
    // 当前选中元素
    const currentElement = computed<ComponentData | null>(
      () => store.getters.getCurrentElement
    );
    // 是否选中状态
    const isActive = computed(() => {
      return currentElement.value && currentElement.value.id === props.id;
    });
    return {
      onItemClick,
      isActive,
    };
  },
});
</script>

<style lang="scss" scoped>
.editor-wrapper {
  padding: 0px;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
  &:hover {
    border: 1px dashed #ccc;
  }
  &.active {
    border: 1px solid #1890ff;
    user-select: none;
    z-index: 1500;
  }
}
</style>

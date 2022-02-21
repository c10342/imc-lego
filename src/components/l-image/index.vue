<template>
  <component
    :is="tag"
    :style="styleProps"
    :src="src"
    class="l-text-component"
    @click="onComponentClick"
  >
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  imageDefaultProps,
  transformToComponentProps,
  imageStylePropNames,
} from "../../default-props";
import useStylePick from "../l-text/use-style-pick";
import useComponentClick from "../l-text/use-component-click";

const defaultProps = transformToComponentProps(imageDefaultProps);

export default defineComponent({
  name: "l-image",
  props: {
    tag: {
      type: String,
      default: "img",
    },
    ...defaultProps,
  },
  setup(props, context) {
    // 获取样式相关属性
    const styleProps = useStylePick(props, imageStylePropNames);
    const onComponentClick = useComponentClick(props);

    return {
      styleProps,
      onComponentClick,
    };
  },
});
</script>

<style>
.l-text-component {
  position: relative !important;
}
</style>

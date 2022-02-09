<template>
  <component
    :is="tag"
    :style="styleProps"
    class="l-text-component"
    @click="onComponentClick"
  >
    {{ text }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  textDefaultProps,
  transformToComponentProps,
  textStylePropNames,
} from "../../default-props";
import useStylePick from "./use-style-pick";
import useComponentClick from "./use-component-click";

const defaultProps = transformToComponentProps(textDefaultProps);

export default defineComponent({
  name: "l-text",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    ...defaultProps,
  },
  setup(props, context) {
    // 获取样式相关属性
    const styleProps = useStylePick(props, textStylePropNames);
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

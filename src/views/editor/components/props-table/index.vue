<template>
  <div class="props-table">
    <div v-for="(item, key) in finalProps" :key="key" class="prop-item">
      <span class="label" v-if="item.text">{{ item.text }}</span>
      <div class="prop-component">
        <component
          v-if="item"
          :is="item.component"
          :[item.valueProp]="item.value"
          v-bind="item.extraProps"
          v-on="item.events"
        >
          <template v-if="item.options">
            <component
              :is="item.subComponent"
              v-for="(opt, k) in item.options"
              :key="k"
              :value="opt.value"
            >
              <RenderVnode :vNode="opt.text" />
            </component>
          </template>
        </component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TextDefaultProps } from "@/default-props";
import { computed, defineComponent, PropType, VNode } from "vue";
import { reduce } from "lodash-es";
import { mapPropsToForms } from "@/props-map";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";
import RenderVnode from "@/components/render-vnode/index";
import ColorPicker from "./sub-components/color-picker.vue";

interface FormProps {
  // 渲染的组件名称
  component: string;
  // 子组件
  subComponent?: string;
  // 绑定的值
  value: string;
  // 组件的属性
  extraProps?: { [key: string]: any };
  // label标签
  text: string;
  // 子组件参数
  options?: { text: string | VNode; value: any }[];
  // 绑定值的key
  valueProp?: string;
  // 需要绑定的事件名称
  eventName?: string;
  events: {
    [key: string]: (e: any) => void;
  };
}

export default defineComponent({
  components: { RenderVnode, ColorPicker },
  props: {
    props: {
      type: Object as PropType<TextDefaultProps>,
    },
  },
  setup(props, context) {
    const store = useStore<GlobalDataProps>();
    // 生成需要渲染的组件数据
    const finalProps = computed(() => {
      return reduce(
        props.props,
        (result, value, key) => {
          const newKey = key as keyof TextDefaultProps;
          const item = mapPropsToForms[newKey];
          if (item) {
            const {
              valueProp = "value",
              initalTransform,
              afterTransform,
              eventName = "change",
            } = item;
            const newItem: FormProps = {
              ...item,
              value: initalTransform ? initalTransform(value) : value,
              valueProp,
              eventName,
              events: {
                [eventName]: (e: any) => {
                  const finalValue = afterTransform ? afterTransform(e) : e;
                  // 更新组件
                  store.commit("updateComponent", {
                    key,
                    value: finalValue,
                  });
                },
              },
            };

            result[newKey] = newItem;
          }
          return result;
        },
        {} as { [key: string]: FormProps }
      );
    });

    return { finalProps };
  },
});
</script>

<style lang="scss" scoped>
.props-table {
  .prop-item {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    .label {
      width: 28%;
    }
    .prop-component {
      width: 70%;
    }
  }
}
</style>

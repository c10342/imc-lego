import { defineComponent } from "vue";
// 将jsx写法转化为template支持的形式
export default defineComponent({
  props: {
    vNode: {
      type: [Object, String],
      required: true,
    },
  },
  render() {
    return this.vNode;
  },
});

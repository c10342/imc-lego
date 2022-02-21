<template>
  <div>
    <div v-for="(item, index) in list" :key="index" @click="onTextClick(item)">
      <LText v-bind="item" />
    </div>
    <StyledUploader @success="onImageSuccess" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";
import { ComponentData } from "@/store/editor";
import { v4 as uuidv4 } from "uuid";
import StyledUploader from "./sub-components/styled-uploader.vue";
import { imageDefaultProps } from "@/default-props";
import { imageDimensions } from "@/helper";

export default defineComponent({
  name: "ComponentList",
  components: { StyledUploader },
  props: {
    list: {
      type: Array,
      require: true,
    },
  },
  setup(props, context) {
    const store = useStore<GlobalDataProps>();
    const onTextClick = (data: any) => {
      const newComponent: ComponentData = {
        id: uuidv4(),
        name: "l-text",
        props: data,
      };
      store.commit("addComponent", newComponent);
    };

    const onImageSuccess = (data: any) => {
      // 获取图片的真实高度
      imageDimensions(data.data.urls[0]).then(({ width }) => {
        const maxWidth = 373;
        const newComponent: ComponentData = {
          id: uuidv4(),
          name: "l-image",
          props: {
            ...imageDefaultProps,
            src: data.data.urls[0],
            width: (maxWidth > width ? width : maxWidth) + "px",
          },
        };
        store.commit("addComponent", newComponent);
      });
    };

    return { onTextClick, onImageSuccess };
  },
});
</script>

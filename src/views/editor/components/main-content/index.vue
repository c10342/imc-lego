<template>
  <div class="preview-list">
    <EditorWrapper
      v-for="component in components"
      :key="component.id"
      :id="component.id"
    >
      <component :is="component.name" v-bind="component.props" />
    </EditorWrapper>
  </div>
</template>

<script lang="ts">
import { GlobalDataProps } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import EditorWrapper from "./editor-wrapper.vue";
import LText from "@/components/l-text/index.vue";
import LImage from "@/components/l-image/index.vue";

export default defineComponent({
  components: { EditorWrapper, LText, LImage },
  setup(props, context) {
    const store = useStore<GlobalDataProps>();
    const components = computed(() => store.state.editorModule.components);
    return { components };
  },
});
</script>

<style lang="scss" scoped>
.preview-list {
  padding: 0;
  margin: 0;
  min-width: 375px;
  min-height: 200px;
  border: 1px solid #efefef;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  margin-top: 50px;
  max-height: 80vh;
}
</style>

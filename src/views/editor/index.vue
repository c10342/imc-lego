<template>
  <div class="editor-container">
    <a-layout>
      <a-layout-header><LegoHeader /></a-layout-header>
      <a-layout>
        <a-layout-sider theme="light" width="300px">
          <ComponentList :list="defaultTextTemplate" />
        </a-layout-sider>
        <a-layout-content class="preview-container">
          <MainContent />
        </a-layout-content>
        <a-layout-sider theme="light" width="300px">
          <PropsTable
            v-if="currentElement && currentElement.props"
            :props="currentElement.props"
          />
          <pre>{{ currentElement && currentElement.props }}</pre>
        </a-layout-sider>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import LegoHeader from "@/components/layout/subComponents/header/index.vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store/index";
import ComponentList from "./components/component-list/index.vue";
import { defaultTextTemplate } from "@/default-templates";
import { ComponentData } from "@/store/editor";
import MainContent from "./components/main-content/index.vue";
import PropsTable from "./components/props-table/index.vue";

export default defineComponent({
  components: { LegoHeader, MainContent, ComponentList, PropsTable },
  setup(props, context) {
    const store = useStore<GlobalDataProps>();

    // 获取选中的元素
    const currentElement = computed<ComponentData | null>(
      () => store.getters.getCurrentElement
    );
    return { defaultTextTemplate, currentElement };
  },
});
</script>

<style lang="scss">
.editor-container {
  height: 100vh;
  .ant-layout {
    height: 100%;
  }

  .preview-container {
    padding: 24px;
    margin: 0;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .l-text-component {
    position: relative !important;
  }
}
</style>

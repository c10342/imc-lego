<template>
  <div class="editor-container">
    <a-layout>
      <a-layout-header><LegoHeader /></a-layout-header>
      <a-layout>
        <a-layout-sider theme="light" width="300px">
          <ComponentList
            :list="defaultTextTemplate"
            @on-item-click="onItemClick"
          />
        </a-layout-sider>
        <a-layout-content class="preview-container">
          <div class="preview-list">
            <component
              :is="component.name"
              v-for="component in components"
              :key="component.id"
              v-bind="component.props"
            />
          </div>
        </a-layout-content>
        <a-layout-sider theme="light" width="300px">Sider</a-layout-sider>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import LegoHeader from "@/components/layout/subComponents/header/index.vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store/index";
import LText from "@/components/l-text/index.vue";
import ComponentList from "@/components/component-list/index.vue";
import { defaultTextTemplate } from "@/default-templates";

export default defineComponent({
  components: { LegoHeader, LText, ComponentList },
  setup(props, context) {
    const store = useStore<GlobalDataProps>();
    const components = computed(() => store.state.editorModule.components);
    const onItemClick = (data: any) => {
      store.commit("addComponent", data);
    };
    return { components, defaultTextTemplate, onItemClick };
  },
});
</script>

<style lang="scss">
.editor-container {
  height: 100vh;
  .ant-layout {
    height: 100%;
  }
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
  .preview-container {
    padding: 24px;
    margin: 0;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
}
</style>

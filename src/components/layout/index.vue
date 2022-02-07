<template>
  <a-layout class="layout-container">
    <a-layout-header>
      <LegoHeader />
    </a-layout-header>
    <a-layout-content>
      <router-view class="content"></router-view>
    </a-layout-content>
    <a-layout-footer class="footer">
      <LegoFooter />
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LegoHeader from "./subComponents/header/index.vue";
import LegoFooter from "./subComponents/footer/index.vue";

export default defineComponent({
  components: { LegoHeader, LegoFooter },
  setup(props, context) {
    // todo
  },
});
</script>

<style lang="scss" scoped>
.layout-container {
  .content {
    min-height: calc(100vh - 134px);
  }
  .footer {
    background-color: #333;
    color: #999;
  }
}
</style>

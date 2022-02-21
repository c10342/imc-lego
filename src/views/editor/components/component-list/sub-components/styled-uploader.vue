<template>
  <div class="styled-upload-component">
    <uploader
      action="/api/utils/upload-img"
      :beforeUpload="commonUploadCheck"
      :uploaded="uploaded"
      @success="onUploadSuccess"
    >
      <div class="uploader-container">
        <FileImageOutlined :style="{ fontSize: '30px' }" />
        <h4>{{ text }}</h4>
      </div>
      <template #loading>
        <div class="uploader-container">
          <LoadingOutlined :style="{ fontSize: '30px' }" spin />
          <h4>上传中</h4>
        </div>
      </template>
      <template #uploaded="dataProps">
        <div class="uploader-container">
          <img :src="dataProps.uploadedData.data.urls[0]" />
        </div>
      </template>
    </uploader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FileImageOutlined, LoadingOutlined } from "@ant-design/icons-vue";
import { commonUploadCheck } from "@/helper";
import Uploader from "./uploader.vue";

export default defineComponent({
  components: {
    Uploader,
    FileImageOutlined,
    LoadingOutlined,
  },
  props: {
    text: {
      type: String,
      default: "上传背景图片",
    },
    uploaded: {
      type: Object,
    },
  },
  emits: ["success"],
  setup(props, context) {
    const onUploadSuccess = (data: any) => {
      context.emit("success", data);
    };
    return {
      commonUploadCheck,
      onUploadSuccess,
    };
  },
});
</script>

<style scoped>
.uploader-container {
  text-align: center;
  padding: 10px;
  width: 100%;
  border: 2px dotted #efefef;
  color: #ccc;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
}
.uploader-container:hover {
  border: 2px dotted #1890ff;
  color: #1890ff;
}
.uploader-container h4 {
  color: #999;
  transition: all 0.25s ease-in-out;
}
.uploader-container:hover h4 {
  color: #1890ff;
}
.uploader-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

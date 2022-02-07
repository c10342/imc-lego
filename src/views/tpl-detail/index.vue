<template>
  <div class="work-detail-container">
    <a-row type="flex" justify="center">
      <a-col :span="8" class="cover-img">
        <img :src="templateDetail.coverImg" alt="" />
      </a-col>
      <a-col :span="8">
        <h2>{{ templateDetail.title }}</h2>
        <p>{{ templateDetail.desc }}</p>
        <div class="author">
          <a-avatar
            :src="templateDetail.user.picture"
            v-if="templateDetail.user.picture"
          >
          </a-avatar>
          <a-avatar v-else>
            <template v-slot:icon><UserOutlined /></template>
          </a-avatar>
          该模版由 <b>{{ templateDetail.user.nickName }}</b> 创作
        </div>
        <div class="bar-code-area">
          <span>扫一扫，手机预览</span>
          <div ref="container"></div>
        </div>
        <div class="use-button">
          <a-button
            type="primary"
            size="large"
            @click="onCopyClick(templateDetail.id)"
            :loading="isCreating"
          >
            {{ isCreating ? "创建中..." : "使用模版" }}
          </a-button>
          <a-button
            size="large"
            :style="{ marginLeft: '20px' }"
            @click="onDownLoadClick"
          >
            下载图片海报
          </a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { UserOutlined } from "@ant-design/icons-vue";

const tplDetail = {
  _id: "61a739f48d5263ce811e706a",
  id: 24,
  uuid: "BbBh5h",
  title: "每日分享",
  desc: "每日分享卡片",
  author: "136****5632",
  coverImg: "https://static.imooc-lego.com/upload-files/screenshot-682056.png",
  isTemplate: true,
  status: 2,
  copiedCount: 144,
  latestPublishAt: "2020-11-24T10:21:21.000Z",
  isHot: false,
  isPublic: true,
  createdAt: "2020-11-18T14:41:17.000Z",
  updatedAt: "2022-02-02T15:59:20.694Z",
  user: "617d33bed38dbc5025755a8b",
  content: {
    components: [
      {
        name: "l-text",
        props: {
          text: "你越是去竭力回避不适的感觉，就越是难以推进生活中的重要转变。",
          fontSize: "18px",
          fontFamily: '"SimHei","STHeiti"',
          fontWeight: "normal",
          fontStyle: "normal",
          textDecoration: "none",
          lineHeight: "1.5",
          textAlign: "center",
          color: "#ffffff",
          backgroundColor: "",
          actionType: "",
          url: "",
          height: "65px",
          width: "282.5px",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
          borderStyle: "none",
          borderColor: "#000",
          borderWidth: "0",
          borderRadius: "0",
          boxShadow: "0 0 0 #000000",
          opacity: 1,
          position: "absolute",
          left: "15.5px",
          top: "40px",
          right: "0",
          tag: "h2",
        },
        id: "42216c37-aa96-421f-978e-9c1463486c18",
        layerName: "图层1",
      },
      {
        name: "l-text",
        props: {
          text: "摘自《幸福的陷阱》",
          fontSize: "12px",
          fontFamily: "",
          fontWeight: "normal",
          fontStyle: "normal",
          textDecoration: "none",
          lineHeight: "1",
          textAlign: "left",
          color: "#f1e9e9",
          backgroundColor: "",
          actionType: "",
          url: "",
          height: "31px",
          width: "152.5px",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
          borderStyle: "none",
          borderColor: "#000",
          borderWidth: "0",
          borderRadius: "0",
          boxShadow: "0 0 0 #000000",
          opacity: 1,
          position: "absolute",
          left: "23.5px",
          top: "113px",
          right: "0",
          tag: "h2",
        },
        id: "66c94cb9-5c5e-4f11-86a5-1dde35228ffc",
        layerName: "图层2",
      },
      {
        name: "l-text",
        props: {
          text: "22",
          fontSize: "60px",
          fontFamily: '"SimHei","STHeiti"',
          fontWeight: "normal",
          fontStyle: "normal",
          textDecoration: "none",
          lineHeight: "1",
          textAlign: "center",
          color: "#ffffff",
          backgroundColor: "",
          actionType: "",
          url: "",
          height: "59px",
          width: "112.5px",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
          borderStyle: "none",
          borderColor: "#000",
          borderWidth: "0",
          borderRadius: "0",
          boxShadow: "0 0 0 #000000",
          opacity: 1,
          position: "absolute",
          left: "247.5px",
          top: "289px",
          right: "0",
          tag: "h2",
        },
        id: "469c897a-1887-41eb-8b79-a5c8ada79834",
        layerName: "图层3",
      },
      {
        name: "l-text",
        props: {
          text: "Sept.2020",
          fontSize: "14px",
          fontFamily: "",
          fontWeight: "normal",
          fontStyle: "normal",
          textDecoration: "none",
          lineHeight: "1",
          textAlign: "center",
          color: "#ffffff",
          backgroundColor: "",
          actionType: "",
          url: "",
          height: "36px",
          width: "125px",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
          borderStyle: "none",
          borderColor: "#000",
          borderWidth: "0",
          borderRadius: "0",
          boxShadow: "0 0 0 #000000",
          opacity: 1,
          position: "absolute",
          left: "242.5px",
          top: "343px",
          right: "0",
          tag: "p",
        },
        id: "d3b16223-8c14-4285-8338-46e494e1eab9",
        layerName: "图层4",
      },
      {
        name: "l-image",
        props: {
          imageSrc:
            "http://static.imooc-lego.com/upload-files/%E4%BA%8C%E7%BB%B4%E7%A0%81-100914.png",
          actionType: "",
          url: "",
          height: "100px",
          width: "100px",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
          borderStyle: "none",
          borderColor: "#000",
          borderWidth: "0",
          borderRadius: "0",
          boxShadow: "0 0 0 #000000",
          opacity: 1,
          position: "absolute",
          left: "258px",
          top: "389px",
          right: "0",
        },
        id: "9f7638bd-bdc8-42c8-925b-74465bc0ff46",
        layerName: "图层5",
      },
      {
        name: "l-text",
        props: {
          text: "识别二维码，领VIP免费学好课",
          fontSize: "12px",
          fontFamily: "",
          fontWeight: "normal",
          fontStyle: "normal",
          textDecoration: "none",
          lineHeight: "1",
          textAlign: "left",
          color: "#8c8c8c",
          backgroundColor: "",
          actionType: "",
          url: "",
          height: "27px",
          width: "220.5px",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
          borderStyle: "none",
          borderColor: "#000",
          borderWidth: "0",
          borderRadius: "0",
          boxShadow: "0 0 0 #000000",
          opacity: 1,
          position: "absolute",
          left: "12.5px",
          top: "469px",
          right: "0",
          tag: "h2",
        },
        id: "132dd86a-1def-490c-8231-5307ee903db3",
        layerName: "图层6",
      },
      {
        name: "l-text",
        props: {
          text: "已在慕课网坚持阅读5天",
          fontSize: "14px",
          fontFamily: '"KaiTi","STKaiti"',
          fontWeight: "normal",
          fontStyle: "normal",
          textDecoration: "none",
          lineHeight: "1",
          textAlign: "left",
          color: "#000000",
          backgroundColor: "",
          actionType: "",
          url: "",
          height: "29px",
          width: "204.5px",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
          borderStyle: "none",
          borderColor: "#000",
          borderWidth: "0",
          borderRadius: "0",
          boxShadow: "0 0 0 #000000",
          opacity: 1,
          position: "absolute",
          left: "14px",
          top: "421px",
          right: "0",
          tag: "h2",
        },
        id: "67a2e9bb-df85-4832-a0b9-eeff1a33fae7",
        layerName: "图层7",
      },
      {
        name: "l-text",
        props: {
          text: "我是 Sam",
          fontSize: "18px",
          fontFamily: '"KaiTi","STKaiti"',
          fontWeight: "normal",
          fontStyle: "normal",
          textDecoration: "none",
          lineHeight: "1",
          textAlign: "left",
          color: "#000000",
          backgroundColor: "",
          actionType: "",
          url: "",
          height: "24px",
          width: "121.5px",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
          borderStyle: "none",
          borderColor: "#000",
          borderWidth: "0",
          borderRadius: "0",
          boxShadow: "0 0 0 #000000",
          opacity: 1,
          position: "absolute",
          left: "14px",
          top: "396px",
          right: "0",
          tag: "h2",
        },
        id: "34a80a87-596b-4354-a6d0-efdc147cc636",
        layerName: "图层7副本",
      },
    ],
    props: {
      backgroundColor: "#ffffff",
      backgroundImage:
        "url('http://static.imooc-lego.com/upload-files/%E8%AF%BB%E4%B9%A6%E5%88%86%E4%BA%AB-113656.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "530.5970149253732px",
    },
    __v: 0,
  },
  channels: [],
  __v: 0,
};

export default defineComponent({
  components: { UserOutlined },
  setup(props, context) {
    // todo
    const templateDetail = reactive(tplDetail);
    const isCreating = ref(false);
    function onDownLoadClick() {
      // todo
    }

    function onCopyClick() {
      // todo
    }
    return {
      templateDetail,
      isCreating,
      onDownLoadClick,
      onCopyClick,
    };
  },
});
</script>

<style scoped>
.work-detail-container {
  margin-top: 50px;
}
.cover-img {
  margin-right: 30px;
}
.cover-img img {
  width: 100%;
}
.use-button {
  margin: 30px 0;
}
.ant-avatar {
  margin-right: 10px;
}
.bar-code-area {
  margin: 20px 0;
}
</style>

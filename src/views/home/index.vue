<template>
  <div>
    <div class="content-container">
      <template-list :list="list"></template-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

const listData = [
  {
    _id: "61a739f38d5263ce811e7064",
    id: 18,
    title: "前端架构师直播海报",
    desc: "未命名作品",
    author: "136****5632",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
    copiedCount: 1122,
    isHot: true,
    createdAt: "2020-11-18T05:47:04.000Z",
    user: {
      _id: "617d33bed38dbc5025755a8b",
      username: "13611915632",
      nickName: "乐高5632",
    },
  },
  {
    _id: "61a739f38d5263ce811e7065",
    id: 19,
    title: "1024 程序员日",
    desc: "1024 程序员日",
    author: "185****2625",
    coverImg: "http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png",
    copiedCount: 834,
    isHot: true,
    createdAt: "2020-11-26T09:27:19.000Z",
    user: {
      _id: "617d33bed38dbc5025755a8b",
      username: "13611915632",
      nickName: "乐高5632",
    },
  },
  {
    _id: "61a739f48d5263ce811e7066",
    id: 20,
    title: "招聘-慕课乐高",
    desc: "招聘广告页",
    author: "185****2625",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-323204.png",
    copiedCount: 418,
    isHot: false,
    createdAt: "2020-11-25T07:37:23.000Z",
    user: {
      _id: "617d33bed38dbc5025755a8b",
      username: "13611915632",
      nickName: "乐高5632",
    },
  },
  {
    _id: "61a739f48d5263ce811e7067",
    id: 21,
    title: "未命名作品",
    desc: "未命名作品",
    author: "136****5632",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
    copiedCount: 227,
    isHot: false,
    createdAt: "2020-11-23T06:24:17.000Z",
    user: {
      _id: "617d33bed38dbc5025755a8b",
      username: "13611915632",
      nickName: "乐高5632",
    },
  },
  {
    _id: "61a739f48d5263ce811e7069",
    id: 23,
    title: "慕课资讯",
    desc: "程序员的早读时间",
    author: "136****5632",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-726751.png",
    copiedCount: 208,
    isHot: false,
    createdAt: "2020-11-18T14:48:36.000Z",
    user: {
      _id: "617d33bed38dbc5025755a8b",
      username: "13611915632",
      nickName: "乐高5632",
    },
  },
  {
    _id: "61a739f48d5263ce811e706a",
    id: 24,
    title: "每日分享",
    desc: "每日分享卡片",
    author: "136****5632",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-682056.png",
    copiedCount: 144,
    isHot: false,
    createdAt: "2020-11-18T14:41:17.000Z",
    user: {
      _id: "617d33bed38dbc5025755a8b",
      username: "13611915632",
      nickName: "乐高5632",
    },
  },
  {
    _id: "61a739f48d5263ce811e7068",
    id: 22,
    title: "慕课 Live Java 入门编程课",
    desc: "慕课 Live 只需3天 每天1.5 小时 0 基础新人 Java 入门编程课",
    author: "136****5632",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-133701.png",
    copiedCount: 117,
    isHot: false,
    createdAt: "2020-11-21T09:28:24.000Z",
    user: {
      _id: "617d33bed38dbc5025755a8b",
      username: "13611915632",
      nickName: "乐高5632",
    },
  },
  {
    _id: "61a739f48d5263ce811e706b",
    id: 25,
    title: "慕课 Live",
    desc: "这是慕课 live 如何搭建一套混合移动应用架构的海报",
    author: "136****5632",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-649919.png",
    copiedCount: 72,
    isHot: false,
    createdAt: "2020-11-18T12:36:49.000Z",
    user: {
      _id: "617d33bed38dbc5025755a8b",
      username: "13611915632",
      nickName: "乐高5632",
    },
  },
];

export default defineComponent({
  setup(props, context) {
    const list = reactive(listData);
    return { list };
  },
});
</script>

<style>
.banner {
  display: flex;
  position: relative;
  height: 450px;
  width: 100%;
  overflow: hidden;
}
.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner-text {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.banner-text .ant-input-search {
  width: 40%;
  box-shadow: 0px 12px 24px 0px rgba(30, 29, 32, 0.8);
}
.banner-text .ant-input {
  height: 40px;
  font-size: 17px;
  padding: 7px 15px;
  padding-right: 30px;
  border: 2px solid #3e7fff;
  border-right-width: 0px;
}
.banner-text .ant-input-search-button {
  height: 40px;
  border: 2px solid #3e7fff;
  border-left-width: 0px;
  display: flex;
  align-items: center;
}
.banner-text .ant-input-search-button svg {
  font-size: 25px;
}
.text-headline {
  text-shadow: 0 0 1px rgba(68, 92, 116, 0.02), 0 2px 8px rgba(57, 76, 96, 0.15);
  font-size: 2rem;
}
.text-link {
  color: #ffffff;
}
.text-link:hover {
  color: #ffffff;
  text-decoration: underline;
}
.feature-item {
  text-align: center;
  padding: 20px 0;
}
.feature-item .anticon {
  font-size: 60px;
}
.feature-item p {
  color: #666;
}
.feature-item h3 {
  margin: 5px 0;
  font-size: 19px;
  color: #333;
}
.welcome-container {
  background: #f2f2f2;
}
.welcome-container-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.hot-title {
  margin: 0 auto;
  padding: 20px 0;
}
.hot-title p {
  text-align: center;
  font-size: 16px;
  color: #666;
}
.hot-template {
  font-size: 22px;
  color: #333;
}
.hot-template::before,
.hot-template::after {
  content: "";
  display: inline-block;
  width: 57px;
  height: 1px;
  margin: 0 26px;
  background-color: #d8d8d8;
  vertical-align: middle;
}
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
.poster-item {
  position: relative;
  margin-bottom: 20px;
}
.content-title {
  min-height: 70px;
}
.content-title h2 {
  margin-bottom: 0px;
}
</style>

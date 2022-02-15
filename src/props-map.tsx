import { TextDefaultProps } from "./default-props";
import { VNode } from "vue";

export interface PropToForm {
  // 渲染的组件名称
  component: string;
  // 子组件
  subComponent?: string;
  // 组件的属性
  extraProps?: { [key: string]: any };
  // label标签
  text: string;
  // 子组件参数
  options?: { text: string | VNode; value: any }[];
  // 数据初始化转换
  initalTransform?: (v: any) => any;
  //   数据结束后转换
  afterTransform?: (v: any) => any;
  // 绑定值的key
  valueProp?: string;
  // 需要绑定的事件名称
  eventName?: string;
}

export type PropsToForms = {
  [p in keyof TextDefaultProps]?: PropToForm;
};

const fontFamilyArr = [
  { text: "宋体", value: '"SimSun","STSong"' },
  { text: "黑体", value: '"SimHei","STHeiti"' },
  { text: "楷体", value: '"KaiTi","STKaiti"' },
  { text: "仿宋", value: '"FangSong","STFangsong"' },
  { text: "Arial", value: '"Arial", sans-serif' },
  { text: "Arial Black", value: '"Arial Black", sans-serif' },
  { text: "Comic Sans MS", value: '"Comic Sans MS"' },
  { text: "Courier New", value: '"Courier New", monospace' },
  { text: "Georgia", value: '"Georgia", serif' },
  { text: "Times New Roman", value: '"Times New Roman", serif' },
];

const fontFamilyOptions = fontFamilyArr.map((font) => {
  return {
    value: font.value,
    text: <span style={{ fontFamily: font.value }}>{font.text}</span>,
  };
});

export const mapPropsToForms: PropsToForms = {
  text: {
    component: "a-textarea",
    text: "文本",
    extraProps: {
      row: 3,
    },
    afterTransform: (e: any) => e.target.value,
  },
  fontSize: {
    component: "a-input-number",
    text: "字号",
    initalTransform: (v: string) => parseInt(v),
    afterTransform: (e: any) => (e ? `${e}px` : ""),
  },
  lineHeight: {
    component: "a-slider",
    text: "行高",
    extraProps: {
      min: 0,
      max: 3,
      step: 0.1,
    },
    initalTransform: (v: string) => parseFloat(v),
    afterTransform: (e: any) => e.toString(),
  },
  textAlign: {
    component: "a-radio-group",
    text: "对齐",
    subComponent: "a-radio-button",
    options: [
      {
        value: "left",
        text: "左",
      },
      {
        value: "center",
        text: "中",
      },
      {
        value: "right",
        text: "右",
      },
    ],
    afterTransform: (e: any) => e.target.value,
  },
  fontFamily: {
    component: "a-select",
    text: "字体",
    subComponent: "a-select-option",
    options: [{ text: "无", value: "" }, ...fontFamilyOptions],
  },
  color: {
    component: "color-picker",
    text: "颜色",
  },
};

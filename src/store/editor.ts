import { Module } from "vuex";
import { GlobalDataProps } from "./index";
import { v4 as uuidv4 } from "uuid";

export interface ComponentData {
  // 组件数据
  props: { [key: string]: any };
  // 组件id
  id: string;
  //   组件名称，通过动态组件渲染
  name: string;
}

export interface EditProps {
  // 页面所有组件
  components: ComponentData[];
  // 被选中的组件id
  currentElement: string;
}

const componentsList: ComponentData[] = [
  {
    props: {
      text: "hello1",
      fontSize: "20px",
      color: "red",
      lineHeight: "1",
      textAlign: "left",
      fontFamily: '"SimSun","STSong"',
    },
    name: "l-text",
    id: uuidv4(),
  },
  {
    props: {
      text: "hello2",
      fontSize: "10px",
      // actionType: "url",
      // url: "baidu.com",
    },
    name: "l-text",
    id: uuidv4(),
  },
  {
    props: { text: "hello3", fontSize: "15px" },
    name: "l-text",
    id: uuidv4(),
  },
];

const editorModule: Module<EditProps, GlobalDataProps> = {
  state: {
    components: componentsList,
    currentElement: "",
  },
  mutations: {
    // 添加画布组件
    addComponent(state, props) {
      const newComponent: ComponentData = {
        id: uuidv4(),
        name: "l-text",
        props,
      };
      state.components.push(newComponent);
    },
    // 设置选中组件的id
    setActive(state, currentId: string) {
      state.currentElement = currentId;
    },
    updateComponent(state, { key, value }) {
      const currentComponent = state.components.find(
        (component) => component.id === state.currentElement
      );
      if (currentComponent) {
        currentComponent.props[key] = value;
      }
    },
  },
  getters: {
    getCurrentElement(state) {
      return state.components.find(
        (component) => component.id === state.currentElement
      );
    },
  },
};

export default editorModule;

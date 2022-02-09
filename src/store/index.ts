import { createStore } from "vuex";

import userModule, { UserProps } from "./user";
import editorModule, { EditProps } from "./editor";

export interface GlobalDataProps {
  userModule: UserProps;
  editorModule: EditProps;
}

export default createStore<GlobalDataProps>({
  modules: {
    userModule,
    editorModule,
  },
});

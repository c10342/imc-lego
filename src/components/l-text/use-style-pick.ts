import { textDefaultProps } from "@/default-props";
import { pick, without } from "lodash-es";
import { computed } from "vue";

const defaultStyles = without(
  Object.keys(textDefaultProps),
  "actionType",
  "url",
  "text"
);

const useStylePick = <T extends { [key: string]: any }>(
  props: T,
  pickStyles = defaultStyles
) => {
  return computed(() => pick(props, pickStyles));
};

export default useStylePick;

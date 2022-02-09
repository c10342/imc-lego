export default function useComponentClick<T extends { [key: string]: any }>(
  props: T
) {
  const handleClick = () => {
    if (props.actionType === "url" && props.url) {
      window.location.href = props.url;
    }
  };
  return handleClick;
}

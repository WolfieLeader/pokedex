import { useRef } from "react";

const useRenderCount = () => {
  const renderCount = useRef(0);

  renderCount.current++;

  return renderCount.current;
};

export default useRenderCount;

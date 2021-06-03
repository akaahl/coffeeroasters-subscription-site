import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });

  if (view) {
    controls.start("in");
  }

  console.log(view);

  return [element, controls];
};

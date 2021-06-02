import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.1 });

  if (view) {
    controls.start("in");
  } else {
    controls.start("initial");
  }

  console.log(view);

  return [element, controls];
};

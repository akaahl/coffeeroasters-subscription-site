import HeroAbout from "../components/HeroAbout";
import ContentOne from "../components/ContentOne";
import ContentTwo from "../components/ContentTwo";
import Headquarters from "../components/Headquarters";
import { pageTransition } from "../components/animation";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div variants={pageTransition} initial="out" animate="in" exit="out">
      <HeroAbout />
      <ContentOne />
      <ContentTwo />
      <Headquarters />
    </motion.div>
  );
};

export default About;

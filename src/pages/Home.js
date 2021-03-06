import Hero from "../components/Hero";
import Collection from "../components/Collection";
import BenefitsHeader from "../components/Benefits";
import BenefitsList from "../components/BenefitsList";
import HowItWorks from "../components/HowItWorks";
import { motion } from "framer-motion";
import { pageTransition } from "../components/animation";

const Home = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Collection />
      <BenefitsHeader />
      <BenefitsList />
      <HowItWorks />
    </motion.div>
  );
};

export default Home;

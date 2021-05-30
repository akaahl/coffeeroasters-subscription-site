import { motion } from "framer-motion";
import { pageTransition } from "../components/animation";
import HeroPlan from "../components/HeroPlan";
import PlanSteps from "../components/PlanSteps";
import PlanPreferences from "../components/PlanPreferences";

const Plan = () => {
  return (
    <motion.div variants={pageTransition} initial="out" animate="in" exit="out">
      <HeroPlan />
      <PlanSteps />
      <PlanPreferences />
    </motion.div>
  );
};

export default Plan;

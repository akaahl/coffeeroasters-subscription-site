import { motion } from "framer-motion";
import { pageTransition } from "../components/animation";
import HeroPlan from "../components/HeroPlan";
import PlanSteps from "../components/PlanSteps";
import PlanPreferences from "../components/PlanPreferences";

const Plan = ({
  coffeeMethod,
  setCoffeeMethod,
  coffeeType,
  setCoffeeType,
  quantity,
  setQuantity,
  grindOption,
  setGrindOption,
  delivery,
  setDelivery,
  modalRef,
}) => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
    >
      <HeroPlan />
      <PlanSteps />
      <PlanPreferences
        coffeeMethod={coffeeMethod}
        setCoffeeMethod={setCoffeeMethod}
        coffeeType={coffeeType}
        setCoffeeType={setCoffeeType}
        quantity={quantity}
        setQuantity={setQuantity}
        grindOption={grindOption}
        setGrindOption={setGrindOption}
        delivery={delivery}
        setDelivery={setDelivery}
        modalRef={modalRef}
      />
    </motion.div>
  );
};

export default Plan;

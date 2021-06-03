import styled from "styled-components";
import PlanSidebar from "./PlanSidebar";
import CoffeePlan from "./CoffeePlan";

const PlanPreferences = ({
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
    <StyledContainer>
      <PlanSidebar />
      <CoffeePlan
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
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-top: 10vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default PlanPreferences;

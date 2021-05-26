import styled from "styled-components";
import PlanSidebar from "./PlanSidebar";
import CoffeePlan from "./CoffeePlan";

const PlanPreferences = () => {
  return (
    <StyledContainer>
      <PlanSidebar />
      <CoffeePlan />
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

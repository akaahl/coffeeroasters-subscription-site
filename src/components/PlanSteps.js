import styled from "styled-components";
import bgSteps from "../assets/plan/desktop/bg-steps.png";

const PlanSteps = () => {
  return (
    <StyledContainer>
      <div className="grid-container">
        <div className="circle"></div>
        <h2>01</h2>
        <h3>Pick your coffee</h3>
        <p>
          Select from our evolving range of artisan coffees. Our beans are
          ethically sourced and we pay fair prices for them. There arenew
          coffess in all profiles every month for you to try out.
        </p>
      </div>

      <div className="grid-container">
        <div className="circle"></div>
        <h2>02</h2>
        <h3>Choose the frequency</h3>
        <p>
          Customize your order frequency, quantity, even your roast and grind
          type. Pause, skip or cancel your subscription with no commitment
          through our online portal.
        </p>
      </div>

      <div className="grid-container">
        <div className="circle"></div>
        <h2>03</h2>
        <h3>Receive and enjoy!</h3>
        <p>
          We ship your package within 48 hours, freshly roasted. Sit back and
          enjoy award-winning world-class coffees curated to provide a distinct
          tasting experience.
        </p>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background: url("${bgSteps}") no-repeat;
  background-size: 100% 100%;
  background-position: cover;
  width: 100%;
  margin-top: 10vw;
  padding: 5rem 4rem;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem 0;

  .grid-container {
    padding: 3rem 0;
    border-top: 2px solid #fdd6ba;
    position: relative;

    &:nth-last-child(1) {
      border: none;
    }

    .circle {
      position: absolute;
      top: -17px;
      left: -15px;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: 2px solid #0e8784;
    }

    h2 {
      font-size: 4rem;
      color: #fdd6ba;
    }

    h3 {
      font-size: 2rem;
      font-weight: 700;
      width: 15vw;
      margin-top: 2vw;
      color: #fefcf7;
    }

    p {
      color: #fcfef7;
      margin-top: 2rem;
      width: 80%;
      line-height: 150%;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    padding: 4rem;

    .grid-container {
      border: none;
      padding: 0;

      .circle {
        display: none;
      }

      h2,
      h3,
      p {
        text-align: center;
        width: 100%;
      }
    }
  }
`;

export default PlanSteps;

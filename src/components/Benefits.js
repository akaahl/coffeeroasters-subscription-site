import styled from "styled-components";
import background from "../assets/about/desktop/bg-quality.png";

const BenefitsHeader = () => {
  return (
    <StyledBenefits>
      <h2>Why choose us?</h2>
      <p>
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working with the best coffee growers
        to give you a more impactful experience on every level.
      </p>
    </StyledBenefits>
  );
};

const StyledBenefits = styled.div`
  background: url(${background}) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 70vh;
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 7vw 5vw 0 5vw;

  h2 {
    color: #fefcf7;
    font-size: 3vw;
  }

  p {
    margin-top: 2rem;
    line-height: 150%;
    width: 40vw;
    color: #fefcf7;
    opacity: 0.6;
    text-align: center;
  }
`;

export default BenefitsHeader;

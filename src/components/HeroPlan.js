import styled from "styled-components";
import imageOne from "../assets/plan/desktop/image-hero-blackcup.jpg";
import imageTwo from "../assets/plan/tablet/image-hero-blackcup.jpg";
import imageThree from "../assets/plan/mobile/image-hero-blackcup.jpg";

const HeroPlan = () => {
  return (
    <HeroSection>
      <h1>Create a plan</h1>
      <p>
        Build a subscription plan that best fits your needs. We offer an
        assortment of the best artisan coffees from around the globe delivered
        fresh to your door.
      </p>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  background: url("${imageOne}") no-repeat;
  background-size: 100% 100%;
  background-position: cover;
  width: 100%;
  margin-top: 3rem;
  padding: 6rem 4rem;
  height: 65vh;
  border-radius: 10px;
  font-family: "Fraunces", sans-serif;

  h1 {
    width: 30rem;
    font-size: 4rem;
    color: #fefcf7;
  }

  p {
    color: #fefcf7;
    opacity: 0.8;
    width: 27rem;
    margin: 2rem 0 2.5rem;
    line-height: 170%;
  }

  @media (max-width: 768px) {
    background: url("${imageTwo}") no-repeat;
    background-size: 100% 100%;
    background-position: center;
    padding: 4rem;
    position: relative;
    z-index: -1;

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 10px;
      z-index: -1;
    }

    h1,
    p {
      width: 100%;
      text-align: center;
      z-index: 2;
    }

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 425px) {
    background: url("${imageThree}") no-repeat;
    background-size: 100% 100%;
    background-position: center;
    padding: 3rem 2rem 2rem 2rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default HeroPlan;

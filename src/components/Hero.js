import styled from "styled-components";
import heroImg from "../assets/home/desktop/image-hero-coffeepress.jpg";

const Hero = () => {
  return (
    <HeroSection>
      <h1>Great coffee made simple.</h1>
      <p>
        Start your your mornings with the world's best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <button type="button">Create your plan</button>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  margin-top: 3rem;
  background-image: url(${heroImg});
  width: 100%;
  height: 75vh;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding: 6rem 4rem;
  font-family: "Fraunces", sans-serif;

  h1 {
    width: 30rem;
  }

  p {
    color: #fefcf7;
    opacity: 0.8;
    width: 27rem;
    margin: 1rem 0 2.5rem;
    line-height: 150%;
  }
`;

export default Hero;

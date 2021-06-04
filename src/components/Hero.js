import styled from "styled-components";
import heroImg from "../assets/home/desktop/image-hero-coffeepress.jpg";
import tabletHeroImg from "../assets/home/tablet/image-hero-coffeepress.jpg";
import mobileHeroImg from "../assets/home/mobile/image-hero-coffeepress.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <HeroSection>
      <h1>Great coffee made simple.</h1>
      <p>
        Start your your mornings with the world's best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <Link to="/plan">
        <button
          type="button"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
            });
          }}
        >
          Create your plan
        </button>
      </Link>
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

  @media (max-width: 1024px) {
    background-image: url(${tabletHeroImg});
    padding: 4rem;
  }

  @media (max-width: 768px) {
    h1,
    p {
      width: 100%;
    }

    h1 {
      font-size: 5vw;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 425px) {
    background-image: url(${mobileHeroImg});
    padding: 2rem;

    h1,
    p {
      text-align: center;
    }

    h1 {
      font-size: 2rem;
    }

    p {
      /* font-size: 4vw; */
    }

    button {
      margin: 0 auto;
    }
  }

  @media (max-width: 320px) {
    p {
      margin-bottom: 1.5rem;
    }

    button {
      padding: 1rem;
      font-size: 0.8rem;
    }
  }

  @media (min-height: 600px) {
    height: 70vh;
  }

  @media (min-height: 700px) {
    height: 50vh;
  }

  @media (min-height: 1000px) {
    height: 35vh;
  }
`;

export default Hero;

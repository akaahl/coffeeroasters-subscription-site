import styled from "styled-components";
import heroBackground from "../assets/about/desktop/image-hero-whitecup.jpg";
import tabletHeroBackground from "../assets/about/tablet/image-hero-whitecup.jpg";
import mobileHeroBackground from "../assets/about/mobile/image-hero-whitecup.jpg";

const HeroAbout = () => {
  return (
    <HeroSection>
      <h1>About us</h1>
      <p>
        Coffeeroasters began its journey of exotic discovery in 1999,
        highlighting stories of coffee from around the world. We have since been
        dedicated to bring the perfect cup - from bean to brew - in every
        shipment.
      </p>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  margin-top: 3rem;
  background-image: url(${heroBackground});
  width: 100%;
  height: 65vh;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding: 6rem 4rem;
  font-family: "Fraunces", sans-serif;

  h1 {
    width: 30rem;
    font-size: 5vw;
  }

  p {
    color: #fefcf7;
    opacity: 0.8;
    width: 27rem;
    margin: 2rem 0 2.5rem;
    line-height: 170%;
  }

  @media (max-width: 768px) {
    background-image: url("${tabletHeroBackground}");

    h1,
    p {
      /* font-size: 2vw; */
      width: 100%;
      word-wrap: break-word;
    }
  }

  @media (max-width: 425px) {
    background-image: url("${mobileHeroBackground}");
    padding: 2rem;

    h1,
    p {
      text-align: center;
    }

    h1 {
      width: 100%;
    }

    p {
      font-size: 5vw;
    }
  }

  /* @media (min-height: 650px) and (max-height: 700px) {
    height: 50vh;

    p {
      font-size: 4vw;
    }
  } */

  @media (min-height: 1024px) {
    height: 35vh;
  }

  @media (min-height: 1300px) {
    height: 30vh;
  }
`;

export default HeroAbout;

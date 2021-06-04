import styled from "styled-components";
import imageOne from "../assets/about/desktop/image-commitment.jpg";
import tabletImageOne from "../assets/about/tablet/image-commitment.jpg";
import mobileImageOne from "../assets/about/mobile/image-commitment.jpg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fadeReveal } from "./animation";

const ContentOne = () => {
  const [element, controls] = useScroll();

  return (
    <StyledSection
      ref={element}
      variants={fadeReveal}
      animate={controls}
      initial="initial"
    >
      <img src={imageOne} alt="barista" className="laptop-img" />
      <img src={tabletImageOne} alt="barista tablet" className="tablet-img" />
      <img src={mobileImageOne} alt="barista mobile" className="mobile-img" />
      <div className="commitment-content">
        <h3>Our commitment</h3>
        <p>
          We're built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          wordld's best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer trainings, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their growing region.
        </p>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled(motion.section)`
  height: 100%;
  margin-top: 10vw;
  padding: 0 7vw;
  display: flex;

  img {
    border-radius: 10px;
    margin-right: 8vw;
    height: 40vw;
  }

  .laptop-img {
    display: block;
  }

  .tablet-img,
  .mobile-img {
    display: none;
  }

  .commitment-content {
    height: 100%;
    margin: auto 0;

    h3 {
      font-size: 2.5vw;
      color: #2c343e;
    }

    p {
      margin-top: 2rem;
      line-height: 150%;
      color: #2c343e;
      font-size: 1.3vw;
    }
  }

  @media (max-width: 1024px) {
    .commitment-content {
      p {
        font-size: 1.5vw;
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 15vw;
    padding: 0;
    flex-direction: column;

    img {
      height: 30vw;
      width: 100%;
      object-fit: cover;
    }

    .laptop-img {
      display: none;
    }

    .tablet-img {
      display: block;
    }

    .commitment-content {
      h3,
      p {
        text-align: center;
      }

      h3 {
        margin-top: 10vw;
        font-size: 7vw;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export default ContentOne;

import styled from "styled-components";
import backgroundImg from "../assets/about/desktop/bg-quality.png";
import coffeeCup from "../assets/about/desktop/image-quality.jpg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { slideFromRight } from "./animation";

const ContentTwo = () => {
  const [element, controls] = useScroll();

  return (
    <StyledContent
      ref={element}
      variants={slideFromRight}
      animate={controls}
      initial="initial"
    >
      <div className="content-container">
        <h3>Uncompromising quality</h3>
        <p>
          Although we work with growers with close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          program to avoid over-roasting or baking the coffee dry. Every bag of
          coffee is tagged with a roast date and batch number. Our goal is to
          roast consistent, user-friendly coffee, so that brewing is easy and
          enjoyable.
        </p>
      </div>
      <img src={coffeeCup} alt="cup of coffee" />
    </StyledContent>
  );
};

const StyledContent = styled(motion.section)`
  background: url("${backgroundImg}") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  /* height: 35vw; */
  margin-top: 15vw;
  display: flex;
  padding: 7vw 5vw;
  position: relative;

  .content-container {
    h3 {
      color: #fefcf7;
      font-size: 2.5vw;
      width: 30%;
    }

    p {
      color: #fefcf7;
      opacity: 0.8;
      font-size: 1.3vw;
      width: 40%;
      line-height: 150%;
      margin-top: 2vw;
      word-wrap: break-word;
    }
  }

  img {
    position: absolute;
    top: -6vw;
    right: 6vw;
    height: 35vw;
    width: 30vw;
    object-fit: cover;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
    .content-container {
      p {
        font-size: 1.4vw;
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 20vw;
    flex-direction: column-reverse;
    padding: 0 5vw 10vw;

    img {
      position: relative;
      top: 0;
      left: 0;
      margin: -8vw auto 4vw;
      height: 20vw;
      width: 50vw;
      object-fit: cover;
    }

    .content-container {
      h3,
      p {
        text-align: center;
        width: 100%;
      }

      h3 {
        margin-top: 3vw;
        font-size: 4vw;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export default ContentTwo;

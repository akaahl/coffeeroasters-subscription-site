import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { slideIn } from "./animation";

const HowItWorks = () => {
  const [element, controls] = useScroll();

  return (
    <StyledContainer
      ref={element}
      variants={slideIn}
      animate={controls}
      initial="initial"
    >
      <h4>How it works</h4>
      <StyledHow>
        <div className="grid-container">
          <div className="circle"></div>
          <h2>01</h2>
          <h3>Pick your coffee</h3>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className="grid-container">
          <div className="circle"></div>
          <h2>02</h2>
          <h3>Choose the frequency</h3>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grid type. Pause, skip or cancel your subscription with no
            commitment through our online portal
          </p>
        </div>

        <div className="grid-container">
          <div className="circle"></div>
          <h2>03</h2>
          <h3>Receive and enjoy!</h3>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees to provide a distinct
            tasting experience.
          </p>
        </div>
      </StyledHow>
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
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  width: 90%;
  margin: 0 auto;

  h4 {
    font-size: 1.5rem;
    color: #83888f;
  }

  @media (max-width: 620px) {
    h4 {
      text-align: center;
    }

    button {
      margin: 0 auto;
    }
  }
`;

const StyledHow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 2rem 0;

  .grid-container {
    padding: 3rem 0;
    margin-top: 3rem;
    border-top: 2px solid #fdd6ba;
    position: relative;

    &:nth-last-child(1) {
      border: none;
    }

    .circle {
      position: absolute;
      top: -15px;
      left: -5px;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: 2px solid #0e8784;
      background: #fefcf7;
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
      color: #2c343e;
    }

    p {
      color: #2c343e;
      margin-top: 2rem;
      width: 15vw;
      line-height: 150%;
    }

    @media (max-width: 842px) {
      border: none;
      padding: 0;
      margin: 0 0 2rem;

      .circle {
        display: none;
      }

      h2,
      h3,
      p {
        text-align: center;
        width: 100%;
      }

      p {
        padding: 0 1rem;
      }
    }
  }
`;

export default HowItWorks;

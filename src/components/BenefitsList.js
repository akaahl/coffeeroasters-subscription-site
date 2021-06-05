import styled from "styled-components";
import coffeeIcon from "../assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "../assets/home/desktop/icon-gift.svg";
import truckIcon from "../assets/home/desktop/icon-truck.svg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { staggerAnimation, verticalReveal } from "./animation";

const BenefitsList = () => {
  const [element, controls] = useScroll();

  return (
    <List
      ref={element}
      variants={staggerAnimation}
      animate={controls}
      initial="initial"
    >
      <motion.div variants={verticalReveal}>
        <img src={coffeeIcon} alt="coffee icon" />
        <h4>Best Quality</h4>
        <p>
          Discover an endless variety of the world's best artisan coffee from
          each of our roasters.
        </p>
      </motion.div>

      <motion.div variants={verticalReveal}>
        <img src={giftIcon} alt="gift icon" />
        <h4>Exclusive benefits</h4>
        <p>
          Special offers and swag when you subscribe, including 30% off your
          first shipment.
        </p>
      </motion.div>

      <motion.div variants={verticalReveal}>
        <img src={truckIcon} alt="truck icon" />
        <h4>Free shipping</h4>
        <p>
          We cover the cost and coffee is delivered fast. Peak freshness:
          guaranteed.
        </p>
      </motion.div>
    </List>
  );
};

const List = styled(motion.div)`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  margin: -12vw auto 10vw auto;

  div {
    background: #0e8784;
    border-radius: 10px;
    padding: 4rem 2rem 3rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h4 {
      color: #fefcf7;
      margin-top: 4vw;
      font-size: 1.5rem;
      text-align: center;
    }

    p {
      margin-top: 2vw;
      width: 100%;
      text-align: center;
      opacity: 0.9;
      color: #fefcf7;
    }
  }

  @media (max-width: 768px) {
    margin-top: -20vw;
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
    margin-top: -5vw;
    width: 80%;

    div {
      padding: 1rem;

      h4 {
        font-size: 1rem;
      }

      p {
        font-size: 0.8rem;
        word-wrap: break-word;
      }
    }
  }

  @media (min-height: 600px) {
    margin-top: -5vw;
  }

  /* @media (max-height: 650px) {
    margin-top: -10vw;
  } */

  @media (min-height: 700px) {
    margin-top: -10vw;
  }
`;

export default BenefitsList;

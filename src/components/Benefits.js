import styled from "styled-components";
import background from "../assets/about/desktop/bg-quality.png";
import coffeeIcon from "../assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "../assets/home/desktop/icon-gift.svg";
import truckIcon from "../assets/home/desktop/icon-truck.svg";

const Benefits = () => {
  return (
    <StyledBenefits>
      <h2>Why choose us?</h2>
      <p>
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working with the best coffee growers
        to give you a more impactful experience on every level.
      </p>

      <BenefitsSection>
        <div>
          <img src={coffeeIcon} alt="coffee icon" />
          <h4>Best Quality</h4>
          <p>
            Discover an endless variety of the world's best artisan coffee from
            each of our roasters.
          </p>
        </div>

        <div>
          <img src={giftIcon} alt="gift icon" />
          <h4>Exclusive benefits</h4>
          <p>
            Special offers and swag when you subscribe, including 30% off your
            first shipment.
          </p>
        </div>

        <div>
          <img src={truckIcon} alt="truck icon" />
          <h4>Free shipping</h4>
          <p>
            We cover the cost and coffee is delivered fast. Peak freshness:
            guaranteed.
          </p>
        </div>
      </BenefitsSection>
    </StyledBenefits>
  );
};

const StyledBenefits = styled.div`
  background: url(${background}) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 75vh;
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

  /* @media (max-width: 600px) {
    padding: 6rem 2rem 0 2rem;
  } */
`;

const BenefitsSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  margin-top: 5vw;

  div {
    background: #0e8784;
    border-radius: 10px;
    padding: 4rem 2rem 2rem 2rem;
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
      margin-top: 2rem;
      width: 100%;
      text-align: center;
      opacity: 0.8;
    }
  }
`;

export default Benefits;

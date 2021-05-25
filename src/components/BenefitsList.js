import styled from "styled-components";
import coffeeIcon from "../assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "../assets/home/desktop/icon-gift.svg";
import truckIcon from "../assets/home/desktop/icon-truck.svg";

const BenefitsList = () => {
  return (
    <List>
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
    </List>
  );
};

const List = styled.div`
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
`;

export default BenefitsList;
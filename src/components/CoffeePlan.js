import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../assets/plan/desktop/icon-arrow.svg";
import summaryBg from "../assets/plan/desktop/bg-order-summary.png";

const CoffeePlan = () => {
  return (
    <StyledContainer>
      <section>
        <h3>
          How do you drink your coffee? <img src={arrow} alt="arrow icon" />
        </h3>

        <div className="selections">
          <div className="content">
            <h4>Capsule</h4>
            <p>Compatible with Nespresso systems and similar brewers.</p>
          </div>

          <div className="content">
            <h4>Filter</h4>
            <p>
              For pour over or drip methods like Aeropress, Chemex, and V60.
            </p>
          </div>

          <div className="content">
            <h4>Espresso</h4>
            <p>
              Dense and finely ground beans for an intense, flavorful
              experience.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3>
          What type of coffee? <img src={arrow} alt="arrow icon" />
        </h3>
        <div className="selections">
          <div className="content">
            <h4>Single Origin</h4>
            <p>
              Distinct, high quality coffee from a specific family-owned farm.
            </p>
          </div>

          <div className="content">
            <h4>Decaf</h4>
            <p>
              Just like regular coffee, except the caffeine has been removed.
            </p>
          </div>

          <div className="content">
            <h4>Blended</h4>
            <p>
              Combination of two or three dark roasted beans of organic coffees.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3>
          How much would you like? <img src={arrow} alt="arrow icon" />
        </h3>
        <div className="selections">
          <div className="content">
            <h4>250g</h4>
            <p>Perfect for the solo drinker. Yields about 12 delicious cups.</p>
          </div>

          <div className="content">
            <h4>500g</h4>
            <p>Perfect option for a couple. Yields about 40 delectable cups.</p>
          </div>

          <div className="content">
            <h4>1000g</h4>
            <p>
              Perfect for offices and events. Yields about 90 delightful cups.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3>
          Want us to grind them? <img src={arrow} alt="arrow icon" />
        </h3>
        <div className="selections">
          <div className="content">
            <h4>Wholebean</h4>
            <p>Best choice if you cherish the full sensory experience.</p>
          </div>

          <div className="content">
            <h4>Filter</h4>
            <p>
              For drip or pour-over coffee methods such as V60 or Aeropress.
            </p>
          </div>

          <div className="content">
            <h4>Cafetière </h4>
            <p>Course ground beans specially suited for french press coffee.</p>
          </div>
        </div>
      </section>

      <section>
        <h3>
          How often should we deliver? <img src={arrow} alt="arrow icon" />
        </h3>
        <div className="selections">
          <div className="content">
            <h4>Every week</h4>
            <p>$7.20 per shipment. Includes free first-class shipping.</p>
          </div>

          <div className="content">
            <h4>Every two weeks</h4>
            <p>$9.60 per shipment. Includes free priority shipping.</p>
          </div>

          <div className="content">
            <h4>Every month</h4>
            <p>$12.00 per shipment. Includes free priority shipping.</p>
          </div>
        </div>
      </section>

      <div className="order-summary">
        <p>Order Summary</p>
        <h4>
          "I drink my coffee as <span>text here</span>, with a{" "}
          <span>text here</span> type of bean. <span>text here</span> ground ala{" "}
          <span>text here</span>, sent to me <span>text here</span>."
        </h4>
      </div>

      <div className="button-container">
        <button type="button">Create your plan</button>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin-left: 7rem;
  position: relative;

  section {
    &:not(:first-child) {
      margin-top: 6rem;
    }

    h3 {
      font-size: 2.5rem;
      color: #83888f;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      img {
        height: 20px;
        width: 25px;
      }
    }

    .selections {
      margin-top: 4rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0 1rem;

      .content {
        border-radius: 10px;
        padding: 2rem 1.5rem 5rem 1.5rem;
        background: #f4f2eb;
        cursor: pointer;
        transition: background 0.4s ease-in-out;

        &:hover {
          background: #fdd6ba;
        }

        h4,
        p {
          color: #2c343e;
        }

        h4 {
          font-size: 1.5rem;
        }

        p {
          margin-top: 1rem;
          line-height: 150%;
        }
      }
    }
  }

  .order-summary {
    background: url("${summaryBg}") no-repeat;
    background-size: 100% 100%;
    background-position: cover;
    width: 100%;
    margin-top: 10vw;
    border-radius: 10px;
    padding: 2rem 4rem;

    p {
      text-transform: uppercase;
      font-size: 1rem;
      color: #83888f;
    }

    h4 {
      font-size: 1.5rem;
      color: #fefcf7;
      margin-top: 1rem;
      span {
        margin-top: -20px;
        border-bottom: 2px solid #0e8784;
        color: transparent;
        padding: 0;
      }
    }
  }

  .button-container {
    margin-top: 4rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    section {
      h3 {
        font-size: 2rem;
      }

      .selections {
        display: flex;
        flex-direction: column;

        .content {
          margin-top: 2rem;
          padding-bottom: 2rem;

          h4,
          p {
            text-align: center;
          }
        }
      }
    }

    .order-summary {
      padding: 2rem 1.5rem;

      h4 {
        font-size: 1.2rem;
      }
    }

    .button-container {
      justify-content: center;
    }
  }
`;

export default CoffeePlan;

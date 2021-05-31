import React, { useState } from "react";
import styled from "styled-components";
import summaryBg from "../assets/plan/desktop/bg-order-summary.png";
import PreferenceSection from "./PreferenceSection";
import { AnimateSharedLayout } from "framer-motion";
import Modal from "./Modal";

const CoffeePlan = () => {
  const [coffeeMethod, setCoffeeMethod] = useState(null);
  const [coffeeType, setCoffeeType] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [grindOption, setGrindOption] = useState(null);
  const [delivery, setDelivery] = useState(null);

  const optionsArray = [
    grindOption,
    coffeeMethod,
    coffeeType,
    quantity,
    delivery,
  ];

  const text = (
    <p className="p-text">
      ground ala{" "}
      <span className={optionsArray[0] ? "active" : ""}>
        {grindOption ? grindOption : "text here"}
      </span>
    </p>
  );

  const summaryText = (
    <h4>
      "I drink my coffee as{" "}
      <span className={optionsArray[1] ? "active" : ""}>
        {coffeeMethod ? coffeeMethod : "text here"}
      </span>
      , with a{" "}
      <span className={optionsArray[2] ? "active" : ""}>
        {coffeeType ? coffeeType : "text here"}
      </span>{" "}
      type of bean.{" "}
      <span className={optionsArray[3] ? "active" : ""}>
        {quantity ? quantity : "text here"}
      </span>{" "}
      {coffeeMethod === "Capsule" ? "" : text} , sent to me{" "}
      <span className={optionsArray[4] ? "active" : ""}>
        {delivery ? delivery : "text here"}
      </span>
      ."
    </h4>
  );

  const evaluateClass = () => {
    if (coffeeMethod === "Capsule") {
      return optionsArray.slice(1).every((item) => item) ? "" : "disabled";
    }

    if (coffeeMethod !== "Capsule") {
      return optionsArray.every((item) => item) ? "" : "disabled";
    }
  };

  return (
    <StyledContainer>
      <AnimateSharedLayout>
        <PreferenceSection
          question=" How do you drink your coffee?"
          h4One="Capsule"
          h4Two="Filter"
          h4Three="Espresso"
          contentOne="Compatible with Nespresso systems and similar brewers."
          contentTwo="For pour over or drip methods like Aeropress, Chemex, and V60."
          contentThree="Dense and finely ground beans for an intense, flavorful
              experience."
          id="1"
          state={coffeeMethod}
          setState={setCoffeeMethod}
          coffeeMethod={coffeeMethod}
        />
        <PreferenceSection
          question="What type of coffee?"
          h4One="Single Origin"
          h4Two="Decaf"
          h4Three="Blended"
          contentOne="Distinct, high quality coffee from a specific family-owned farm."
          contentTwo="Just like regular coffee, except the caffeine has been removed."
          contentThree="Combination of two or three dark roasted beans of organic coffees."
          id="2"
          state={coffeeType}
          setState={setCoffeeType}
          coffeeMethod={coffeeMethod}
        />
        <PreferenceSection
          question="How much would you like?"
          h4One="250g"
          h4Two="500g"
          h4Three="1000g"
          contentOne="Perfect for the solo drinker. Yields about 12 delicious cups."
          contentTwo="Perfect option for a couple. Yields about 40 delectable cups."
          contentThree="Perfect for offices and events. Yields about 90 delightful cups."
          id="3"
          state={quantity}
          setState={setQuantity}
          coffeeMethod={coffeeMethod}
        />
        <PreferenceSection
          question="Want us to grind them?"
          h4One="Wholebean"
          h4Two="Filter"
          h4Three="Cafetière"
          contentOne="Best choice if you cherish the full sensory experience."
          contentTwo="For drip or pour-over coffee methods such as V60 or Aeropress."
          contentThree="Course ground beans specially suited for french press coffee."
          id="4"
          state={grindOption}
          setState={setGrindOption}
          coffeeMethod={coffeeMethod}
        />
        <PreferenceSection
          question="How often should we deliver?"
          h4One="Every week"
          h4Two="Every two weeks"
          h4Three="Every month"
          contentOne="$7.20 per shipment. Includes free first-class shipping."
          contentTwo="$9.60 per shipment. Includes free priority shipping."
          contentThree="$12.00 per shipment. Includes free priority shipping."
          id="5"
          state={delivery}
          setState={setDelivery}
          coffeeMethod={coffeeMethod}
        />
      </AnimateSharedLayout>

      <div className="order-summary">
        <p className="summary">Order Summary</p>
        {summaryText}
      </div>

      <div className="button-container">
        <button type="button" className={evaluateClass()}>
          Create your plan
        </button>
      </div>

      <Modal summaryText={summaryText} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin-left: 7rem;
  position: relative;

  .order-summary {
    background: url("${summaryBg}") no-repeat;
    background-size: 100% 100%;
    background-position: cover;
    width: 100%;
    margin-top: 10vw;
    border-radius: 10px;
    padding: 2rem 4rem;

    .summary {
      text-transform: uppercase;
      font-size: 1rem;
      color: #83888f;
    }

    h4 {
      font-size: 1.5rem;
      color: #fefcf7;
      margin-top: 1rem;

      .p-text {
        font-family: "Fraunces", sans-serif;
        display: inline-block;
        font-size: 1.5rem;
        color: #fefcf7;
      }

      span {
        &.active {
          border-bottom: none;
          color: #0e8784;
        }
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

    button {
      &.disabled {
        pointer-events: none;
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
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

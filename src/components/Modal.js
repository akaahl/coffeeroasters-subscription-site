import React from "react";
import styled from "styled-components";

const Modal = ({ summaryText }) => {
  return (
    <StyledModal>
      <div className="inner-container">
        <h2 className="title">Order Summary</h2>
        <div className="text-container">
          {summaryText}{" "}
          <p>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className="total">
            <h5>$28.80 / month</h5>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
`;

export default Modal;

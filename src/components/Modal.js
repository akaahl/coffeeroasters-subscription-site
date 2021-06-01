import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deactivateModal } from "../actions";

const Modal = ({ summaryText }) => {
  const dispatch = useDispatch();
  const isModalActive = useSelector((state) => state.isModalActive);

  return (
    <StyledModal
      className={isModalActive ? "active" : ""}
      onClick={() => dispatch(deactivateModal())}
    >
      <div className="inner-container">
        <h2 className="title">Order Summary</h2>
        <div className="text-container">
          {/* {summaryText}{" "} */}
          <p className="confirm-order">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className="total">
            <h5>$28.80 / month</h5>
            <button onClick={() => dispatch(deactivateModal())}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  left: 0;
  display: none;
  align-items: flex-end;
  justify-content: center;

  &.active {
    display: flex;
  }

  .inner-container {
    height: 90vh;
    width: 45%;
    border-radius: 10px;
    margin-bottom: 5vh;

    h2 {
      color: #fefcf7;
      background: #333e4d;
      padding: 3rem 2rem 2rem 2rem;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      font-size: 2rem;
    }

    .text-container {
      background: #fefcf7;
      padding: 3rem 2rem;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;

      h4 {
        font-size: 1.5rem;
        line-height: 160%;
        color: #848990;

        .p-text {
          font-family: "Fraunces", sans-serif;
          display: inline-block;
          font-size: 1.5rem;
          word-wrap: break-word;
          color: #848990;
        }

        span {
          color: #0e8784;
        }
      }

      .confirm-order {
        margin-top: 1rem;
        color: #333e4d;
        line-height: 150%;
      }

      .total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2.5rem;

        h5 {
          color: #333e4d;
          font-size: 2rem;
        }
      }
    }
  }
`;

export default Modal;

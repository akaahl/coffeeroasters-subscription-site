import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deactivateModal } from "../actions";

const Modal = ({
  coffeeMethod,
  coffeeType,
  quantity,
  grindOption,
  delivery,
  modalRef,
}) => {
  const dispatch = useDispatch();
  const isModalActive = useSelector((state) => state.isModalActive);

  const text = (
    <p className="p-text">
      ground ala{" "}
      <span className={grindOption ? "active" : ""}>
        {grindOption ? grindOption : "text here"}
      </span>
    </p>
  );

  const summaryText = (
    <h4>
      "I drink my coffee as{" "}
      <span className={coffeeMethod ? "active" : ""}>
        {coffeeMethod ? coffeeMethod : "text here"}
      </span>
      , with a{" "}
      <span className={coffeeType ? "active" : ""}>
        {coffeeType ? coffeeType : "text here"}
      </span>{" "}
      type of bean.{" "}
      <span className={quantity ? "active" : ""}>
        {quantity ? quantity : "text here"}
      </span>{" "}
      {coffeeMethod === "Capsule" ? "" : text} , sent to me{" "}
      <span className={delivery ? "active" : ""}>
        {delivery ? delivery : "text here"}
      </span>
      ."
    </h4>
  );

  return (
    <StyledModal
      className={isModalActive ? "active" : ""}
      onClick={() => {
        dispatch(deactivateModal());
        document.body.classList.remove("modal-active");
      }}
    >
      <div className="inner-container" id="modal">
        <h2 className="title">Order Summary</h2>
        <div className="text-container">
          {summaryText}{" "}
          <p className="confirm-order">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className="total">
            <h5>
              {delivery === "Every week"
                ? "$28.80 / month"
                : delivery === "Every two weeks"
                ? "$19.20 / month"
                : "$12 / month"}
            </h5>
            <button
              onClick={() => {
                dispatch(deactivateModal());
                document.body.classList.remove("modal-active");
              }}
            >
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

  /* align-items: flex-end;
  justify-content: center; */

  &.active {
    display: block;
  }

  .inner-container {
    position: relative;
    top: 125rem;
    left: 50%;
    transform: translateX(-50%);
    height: 90vh;
    width: 50vw;
    border-radius: 10px;

    /* margin-bottom: 5vh; */

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

    @media (max-width: 1024px) {
      width: 70vw;
    }

    @media (max-width: 768px) {
      h2 {
        padding: 1.5rem;
        font-size: 4vw;
      }

      .text-container {
        padding: 1.5rem;

        h4 {
          font-size: 4vw;
        }

        .total {
          h5 {
            font-size: 3.5vw;
          }
        }
      }
    }

    @media (max-width: 425px) {
      h2 {
        text-align: center;
      }

      .text-container {
        h4 {
          text-align: center;
        }

        .confirm-order {
          text-align: center;
          font-size: 0.8rem;
        }

        .total {
          flex-direction: column;

          h5 {
            margin-bottom: 1.5rem;
          }
        }
      }
    }

    @media (max-width: 375px) {
      h2 {
        font-size: 5vw;
      }

      .text-container {
        h4 {
          font-size: 5vw;
        }

        .total {
          h5 {
            font-size: 5vw;
          }
        }
      }
    }
  }
`;

export default Modal;

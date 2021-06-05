import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/shared/desktop/logo.svg";
import hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import closeHamburger from "../assets/shared/mobile/icon-close.svg";
import { useDispatch, useSelector } from "react-redux";
import { openMobileModal, closeMobileModal } from "../actions";

const Nav = () => {
  const dispatch = useDispatch();
  const mobileModalStatus = useSelector((state) => state.isMobileModalActive);

  return (
    <StyledNav className={mobileModalStatus ? "modal-open" : ""}>
      <img src={logo} alt="logo" />

      <ul className="desktop-nav">
        <Link to="/">
          <li>
            <p>Home</p>
          </li>
        </Link>
        <Link to="/about">
          <li>
            <p>About Us</p>
          </li>
        </Link>
        <Link to="/plan">
          <li>
            <p>Create Your Plan</p>
          </li>
        </Link>
      </ul>

      <ul className="mobile-nav">
        <Link to="/">
          <li
            onClick={() => {
              dispatch(closeMobileModal());
              document.body.classList.remove("modal-active");
            }}
          >
            <p>Home</p>
          </li>
        </Link>
        <Link to="/about">
          <li
            onClick={() => {
              dispatch(closeMobileModal());
              document.body.classList.remove("modal-active");
            }}
          >
            <p>About Us</p>
          </li>
        </Link>
        <Link to="/plan">
          <li
            onClick={() => {
              dispatch(closeMobileModal());
              document.body.classList.remove("modal-active");
            }}
          >
            <p>Create Your Plan</p>
          </li>
        </Link>
      </ul>

      <img
        src={hamburger}
        alt="hamburger icon"
        className="open"
        onClick={() => {
          dispatch(openMobileModal());
          document.body.classList.add("modal-active");
        }}
      />
      <img
        src={closeHamburger}
        alt="close hamburger icon"
        className="close"
        onClick={() => {
          dispatch(closeMobileModal());
          document.body.classList.remove("modal-active");
        }}
      />
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .desktop-nav {
    display: flex;
    list-style: none;

    a {
      text-decoration: none;
    }

    li {
      margin-left: 3rem;

      p {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        color: #83888f;
        letter-spacing: 1px;
      }
    }
  }

  .mobile-nav {
    list-style: none;
    position: absolute;
    top: 6rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    background: linear-gradient(
      180deg,
      rgba(254, 252, 247, 1) 50%,
      transparent 100%
    );
    width: 88%;
    height: 40rem;

    a {
      text-decoration: none;
    }

    li {
      :first-child {
        margin-top: 4rem;
      }

      p {
        margin: 1.2rem 0;
        text-align: center;
        font-size: 1.5rem;
        font-family: "Fraunces", sans-serif;
        font-weight: 700;
        color: #2c343e;
      }
    }
  }

  .open,
  .close {
    cursor: pointer;
  }

  .open,
  .close,
  .mobile-nav {
    display: none;
  }

  @media (max-width: 768px) {
    &.modal-open {
      .open {
        display: none;
      }

      .close,
      .mobile-nav {
        display: block;
      }
    }

    .desktop-nav {
      display: none;
    }

    .open {
      display: block;
    }
  }
`;

export default Nav;

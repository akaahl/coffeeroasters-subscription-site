import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/shared/desktop/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <img src={logo} alt="logo" />

      <ul>
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
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  ul {
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

  @media (max-width: 768px) {
    ul {
      display: none;
    }
  }
`;

export default Nav;

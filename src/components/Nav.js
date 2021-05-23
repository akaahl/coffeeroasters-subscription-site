import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../assets/shared/desktop/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <img src={logo} alt="logo" />

      <ul>
        <li>
          <p>Home</p>
        </li>
        <li>
          <p>About Us</p>
        </li>
        <li>
          <p>Create Your Plan</p>
        </li>
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
`;

export default Nav;

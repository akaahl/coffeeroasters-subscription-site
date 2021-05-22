import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../assets/shared/desktop/logo.svg";

const Nav = () => {
  return (
    <Navbar>
      <img src={logo} alt="logo" />

      <NavLinks></NavLinks>
    </Navbar>
  );
};

const Navbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NavLinks = styled(motion.ul)`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
`;

export default Nav;

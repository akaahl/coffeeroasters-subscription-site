import { Link } from "react-router-dom";
import styled from "styled-components";
import logo2 from "../assets/shared/desktop/logo2.svg";
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg";
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg";

const FooterNav = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  return (
    <StyledFooter>
      <img src={logo2} alt="logo" />

      <ul className="nav-container">
        <Link to="/" onClick={scrollToTop}>
          <li>Home</li>
        </Link>
        <Link to="/about" onClick={scrollToTop}>
          <li>About Us</li>
        </Link>
        <Link to="/plan" onClick={scrollToTop}>
          <li>Create your plan</li>
        </Link>
      </ul>

      <ul className="social-links">
        <li>
          <img src={facebookIcon} alt="facebook icon" />
        </li>
        <li>
          <img src={instagramIcon} alt="instagram icon" />
        </li>
        <li>
          <img src={twitterIcon} alt="twitter icon" />
        </li>
      </ul>
    </StyledFooter>
  );
};

const StyledFooter = styled.nav`
  margin-top: 15vw;
  background: #2c343e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3vw 4vw;

  .nav-container {
    list-style: none;
    display: flex;

    a {
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      margin: 0 1rem;
      font-weight: 700;
      font-size: 12px;
      color: #83888f;
      letter-spacing: 1px;
    }
  }

  .social-links {
    list-style: none;
    display: flex;

    li {
      margin: 0 1rem;
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 5vw;

    .nav-container,
    .social-links {
      margin-top: 2rem;
    }
  }

  @media (max-width: 620px) {
    .nav-container {
      flex-direction: column;

      li {
        text-align: center;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default FooterNav;

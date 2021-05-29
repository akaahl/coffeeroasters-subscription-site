import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../assets/plan/desktop/icon-arrow.svg";
import { motion } from "framer-motion";

const PreferenceSection = ({
  question,
  h4One,
  h4Two,
  h4Three,
  contentOne,
  contentTwo,
  contentThree,
}) => {
  const [content, setContent] = useState(false);
  console.log(content);

  return (
    <StyledSection layout id="3" className={content ? "active" : ""}>
      <motion.h3 layout onClick={() => setContent(!content)}>
        {question} <img src={arrow} alt="arrow icon" />
      </motion.h3>

      {content ? (
        <div className="selections">
          <div className="content">
            <h4>{h4One}</h4>
            <p>{contentOne}</p>
          </div>

          <div className="content">
            <h4>{h4Two}</h4>
            <p>{contentTwo}</p>
          </div>

          <div className="content">
            <h4>{h4Three}</h4>
            <p>{contentThree}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </StyledSection>
  );
};

const StyledSection = styled(motion.section)`
  &:not(:first-child) {
    margin-top: 3rem;
  }
  &.active {
    h3 {
      img {
        transform: rotate(180deg);
      }
    }
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
      transition: all 0.3s ease-in-out;
    }
  }

  .selections {
    margin: 4rem 0 6rem 0;
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
`;

export default PreferenceSection;

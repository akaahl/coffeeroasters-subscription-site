import React, { useState, useRef } from "react";
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
  id,
}) => {
  const selectionContents = [
    {
      heading: h4One,
      content: contentOne,
    },
    {
      heading: h4Two,
      content: contentTwo,
    },
    {
      heading: h4Three,
      content: contentThree,
    },
  ];

  const [content, setContent] = useState(false);

  const [selected, setSelected] = useState({
    selectedIndex: null,
    activeSelectedIndex: [{ id: 1 }, { id: 2 }, { id: 3 }],
  });

  const inputRef = useRef();

  const [coffeeMethod, setCoffeeMethod] = useState(null);

  const clickHandler = (index) => {
    setSelected({
      ...selected,
      selectedIndex: selected.activeSelectedIndex[index],
    });

    if (index === 0) {
      setCoffeeMethod(h4One);
    }

    if (index === 1) {
      setCoffeeMethod(h4Two);
    }

    if (index === 2) {
      setCoffeeMethod(h4Three);
    }
  };

  console.log(coffeeMethod);

  const activeSelected = (index) => {
    if (selected.selectedIndex === selected.activeSelectedIndex[index]) {
      return "content selected";
    } else {
      return "content";
    }
  };

  return (
    <StyledSection layout id={id} className={content ? "active" : ""}>
      <motion.h3 layout onClick={() => setContent(!content)}>
        {question} <img src={arrow} alt="arrow icon" />
      </motion.h3>

      {content ? (
        <div className="selections">
          {selectionContents.map((item, index) => (
            <div
              key={index}
              onClick={() => clickHandler(index)}
              className={activeSelected(index)}
            >
              <h4 ref={inputRef}>{item.heading}</h4>
              <p>{item.content}</p>
            </div>
          ))}
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

      &.selected {
        background: #0e8784;

        h4,
        p {
          color: #fefcf7;
        }
      }

      &:active {
        transform: scale(0.98);
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

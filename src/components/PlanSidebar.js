import React, { useState } from "react";
import styled from "styled-components";

const PlanSidebar = () => {
  const listItem = [
    {
      number: "01",
      title: "Preferences",
    },
    {
      number: "02",
      title: "Bean Type",
    },
    {
      number: "03",
      title: "Quantity",
    },
    {
      number: "04",
      title: "Grind Option",
    },
    {
      number: "05",
      title: "Deliveries",
    },
  ];

  const [linkActive, setLinkActive] = useState({
    activeIndex: null,
    activeObjectIndex: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  });

  const clickHandler = (index) => {
    setLinkActive({
      ...linkActive,
      activeIndex: linkActive.activeObjectIndex[index],
    });
  };

  const toggleLinkActive = (index) => {
    if (linkActive.activeIndex === linkActive.activeObjectIndex[index]) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <StyledSidenav>
      <ul>
        {listItem.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              clickHandler(index);
            }}
            className={toggleLinkActive(index)}
          >
            <a href={`#${index + 1}`}>
              {item.number} <p>{item.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </StyledSidenav>
  );
};

const StyledSidenav = styled.aside`
  width: 45%;
  height: 100%;
  position: sticky;
  top: 10%;

  ul {
    list-style: none;

    li {
      padding: 0 1rem 1.5rem 1rem;
      width: 100%;
      border-bottom: 1px solid rgba(131, 136, 143, 0.3);
      cursor: pointer;
      transition: all 0.2s;

      &.active {
        a {
          color: #0e8784;
          opacity: 1;

          p {
            color: #2c343e;
          }
        }
      }

      &:hover {
        transform: translateX(1rem);
      }

      &:not(:first-child) {
        margin-top: 1.5rem;
      }

      &:nth-last-child(1) {
        border: none;
      }

      a {
        display: flex;
        font-size: 2vw;
        color: #848990;
        opacity: 0.5;
        font-family: "Fraunces", sans-serif;
        font-weight: 700;
        text-decoration: none;

        p {
          color: #848990;
          margin-left: 1.5rem;
          text-decoration: none;
          font-family: "Fraunces", sans-serif;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export default PlanSidebar;

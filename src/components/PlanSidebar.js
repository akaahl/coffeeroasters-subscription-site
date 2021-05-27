import styled from "styled-components";

const PlanSidebar = () => {
  return (
    <StyledSidenav>
      <ul>
        <li>
          <p>
            01 <a>Preferences</a>
          </p>
        </li>
        <li>
          <p>
            02 <a>Bean Type</a>
          </p>
        </li>
        <li>
          <p>
            03 <a>Quantity</a>
          </p>
        </li>
        <li>
          <p>
            04 <a>Grind Option</a>
          </p>
        </li>
        <li>
          <p>
            05 <a>Deliveries</a>
          </p>
        </li>
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

      &:not(:first-child) {
        margin-top: 1.5rem;
      }

      &:nth-last-child(1) {
        border: none;
      }

      p {
        font-size: 2vw;
        color: #0e8784;
        font-family: "Fraunces", sans-serif;
        font-weight: 700;

        a {
          color: #2c343e;
          margin-left: 1.5rem;
          text-decoration: none;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export default PlanSidebar;

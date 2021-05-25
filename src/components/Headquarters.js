import styled from "styled-components";
import australia from "../assets/about/desktop/illustration-australia.svg";
import canada from "../assets/about/desktop/illustration-canada.svg";
import uk from "../assets/about/desktop/illustration-uk.svg";

const Headquarters = () => {
  return (
    <StyledSection>
      <h3>Our headquarters</h3>

      <div className="grid-container">
        <div>
          <img src={uk} alt="united kingdom" />
          <h4>United Kingdom</h4>
          <p>68 Asfodrby Rd</p>
          <p>Alcaston</p>
          <p>SY6 1YA</p>
          <p>+44 1241 918425</p>
        </div>

        <div>
          <img src={canada} alt="canada" />
          <h4>Canada</h4>
          <p>1528 Eglinton Avenue</p>
          <p>Toronto</p>
          <p>Ontario M4P 1A6</p>
          <p>+1 416 485 2997</p>
        </div>

        <div>
          <img src={australia} alt="australia" />
          <h4>Australia</h4>
          <p>36 Swanston Street</p>
          <p>Kewell</p>
          <p>Victoria</p>
          <p>+61 4 9928 3629</p>
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin-top: 10vw;
  padding: 0 7vw;

  h3 {
    color: #83888f;
    font-size: 2vw;
  }

  .grid-container {
    margin-top: 6vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 4rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      img {
        height: 100px;
        width: 100px;
      }

      h4 {
        color: #2c343e;
        font-size: 2.5vw;
        margin: 4rem 0 1rem;
      }

      p {
        color: #2c343e;
        margin-top: 0.8rem;
      }
    }
  }

  @media (max-width: 1024px) {
    h3 {
      font-size: 4vw;
      text-align: center;
    }

    .grid-container {
      margin-top: 10vw;
      div {
        align-items: center;

        h4 {
          margin-top: 2rem;
          font-size: 3.5vw;
        }

        p {
          margin-top: 0.2rem;
        }
      }
    }
  }
`;

export default Headquarters;

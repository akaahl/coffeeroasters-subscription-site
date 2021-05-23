import styled from "styled-components";
import granEspresso from "../assets/home/desktop/image-gran-espresso.png";
import planalto from "../assets/home/desktop/image-planalto.png";
import piccollo from "../assets/home/desktop/image-piccollo.png";
import danche from "../assets/home/desktop/image-danche.png";

const Collection = () => {
  return (
    <OurCollection>
      <h2>our collection</h2>

      <Products>
        <div>
          <img src={granEspresso} alt="gran espresso" />
          <h4>Gran Espresso</h4>
          <p>
            Light and flavorful blend with cocoa and black pepper for an intense
            experience.
          </p>
        </div>

        <div>
          <img src={planalto} alt="planalto" />
          <h4>Planalto</h4>
          <p>
            Brazillian dark roast with rich and velvety body, and hints of
            fruits and nuts.
          </p>
        </div>

        <div>
          <img src={piccollo} alt="piccolo" />
          <h4>Piccolo</h4>
          <p>
            Mild and smooth blend featuring notes of toasted almond and dried
            cherry.
          </p>
        </div>

        <div>
          <img src={danche} alt="danche" />
          <h4>Danche</h4>
          <p>
            Ethiopian hand-harvested plant densely packed with vibrant fruit.
          </p>
        </div>
      </Products>
    </OurCollection>
  );
};

const OurCollection = styled.div`
  margin-top: 9vw;

  h2 {
    font-size: 12vw;
    text-align: center;
    background: linear-gradient(0deg, #ffffff, #83888f);
    background-clip: text;
    padding-top: 1rem;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1040px) {
    h2 {
      font-size: 10vw;
    }
  }

  @media (max-width: 580px) {
    h2 {
      font-size: 9vw;
    }
  }
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-row-gap: 4rem;
  margin-top: -4vw;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      margin-top: 4rem;
      font-size: 2.5vw;
      color: #2c343e;
      text-align: center;
    }

    img {
      width: 170px;
      height: 170px;
      object-fit: cover;
    }

    p {
      margin-top: 1.5rem;
      text-align: center;
      width: 80%;
      line-height: 150%;
    }
  }

  @media (max-width: 800px) {
    div {
      h4 {
        font-size: 4vw;
      }
    }
  }

  @media (max-width: 580px) {
    margin-top: 3rem;
  }
`;

export default Collection;

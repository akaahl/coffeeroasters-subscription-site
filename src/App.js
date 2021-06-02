import React, { useState } from "react";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Plan from "./pages/Plan";
import Nav from "./pages/Nav";
import FooterNav from "./pages/FooterNav";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";

function App() {
  const location = useLocation();
  const [coffeeMethod, setCoffeeMethod] = useState(null);
  const [coffeeType, setCoffeeType] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [grindOption, setGrindOption] = useState(null);
  const [delivery, setDelivery] = useState(null);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route
            path="/plan"
            render={(props) => (
              <Plan
                {...props}
                coffeeMethod={coffeeMethod}
                setCoffeeMethod={setCoffeeMethod}
                coffeeType={coffeeType}
                setCoffeeType={setCoffeeType}
                quantity={quantity}
                setQuantity={setQuantity}
                grindOption={grindOption}
                setGrindOption={setGrindOption}
                delivery={delivery}
                setDelivery={setDelivery}
              />
            )}
          />
        </Switch>
      </AnimatePresence>
      <FooterNav />
      <Modal
        coffeeMethod={coffeeMethod}
        coffeeType={coffeeType}
        quantity={quantity}
        grindOption={grindOption}
        delivery={delivery}
      />
    </div>
  );
}

export default App;

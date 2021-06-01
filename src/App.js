import React from "react";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Plan from "./pages/Plan";
import Nav from "./pages/Nav";
import FooterNav from "./pages/FooterNav";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Modal from "./components/Modal";

function App() {
  const location = useLocation();

  const isModalActive = useSelector((state) => state.isModalActive);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/plan" component={Plan} />
        </Switch>
      </AnimatePresence>
      <FooterNav />
      <Modal />
    </div>
  );
}

export default App;

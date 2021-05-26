import React from "react";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Plan from "./pages/Plan";
import Nav from "./pages/Nav";
import FooterNav from "./pages/FooterNav";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
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
    </div>
  );
}

export default App;

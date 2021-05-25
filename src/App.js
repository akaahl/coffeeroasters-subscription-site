import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Plan from "./pages/Plan";
import Nav from "./pages/Nav";
import FooterNav from "./pages/FooterNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/plan" component={Plan} />
        </Switch>
        <FooterNav />
      </div>
    </Router>
  );
}

export default App;

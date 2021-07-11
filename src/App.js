import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Showcase from "./Components/Showcase";
import WhyChooseUs from "./Components/WhyChooseUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Showcase />
            <About />
            <WhyChooseUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About";



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Movies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

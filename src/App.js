import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
            <Login />
          </Route>
          <Route path = "/home">
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
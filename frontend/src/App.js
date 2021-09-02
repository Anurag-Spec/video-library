import Homepage from "./Pages/Homepage/Homepage";
import "./app.scss";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Watch from "./Pages/Watch/Watch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/movies">
          <Homepage type="movie" />
        </Route>
        <Route path="/series">
          <Homepage type="series" />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import Homepage from "./Pages/Homepage/Homepage";
import "./app.scss";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Watch from "./Pages/Watch/Watch";

const user = true;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Homepage /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        {user && (
          <>
            <Route path="/movies">
              <Homepage type="movie" />
            </Route>
            <Route path="/series">
              <Homepage type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;

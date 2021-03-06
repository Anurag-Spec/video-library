import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../authContext/apicalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const handleGuestLogin = (e) => {
    e.preventDefault();
    setEmail("user123@test.com");
    setPassword("123456");
    login({ email, password }, dispatch);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <button className="loginButton" onClick={handleGuestLogin}>
            Login as Guest
          </button>
          <Link to="/register">
            <span>
              New to Netflix? <b>Sign up now.</b>
            </span>
          </Link>
          <small>
            This page is not protected by Google reCAPTCHA to ensure you're not
            a bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}

import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    console.log(username, "username");
    console.log(password, "password");
    try {
      await axios.post(
        "https://video-library1.herokuapp.com/api/auth/register",
        { email, username, password }
      );
      history.push("/login");
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <Link to="/">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </Link>
          <Link className="loginButton" to="/login">
            Sign in or Guest Login
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {error && (
          <>
            <div>{error.message}</div>
            <Link to="/">
              <button className="registerButton">Go Back</button>
            </Link>
          </>
        )}
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

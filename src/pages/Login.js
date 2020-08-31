import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { auth } from "../firebase";
import "./Login.css";

export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>password</h5>
          <input
            value={password}
            onChange={(event) => setEmail(event.target.password)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signinButton">
            Sign in
          </button>
        </form>
        <p>
          By signing in you agree o Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest Based Ads
          Notice.
        </p>
        <button
          onClick={register}
          type="submit"
          className="login__registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

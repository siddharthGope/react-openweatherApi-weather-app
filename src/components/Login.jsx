import { initializeApp } from "firebase/app";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebaseConfig from "./firebaseConfig.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ page }) => {
  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  const [isuserExist, setUserExist] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailOnchangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnchangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSignInHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        setUserExist(true);
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="holder">
        <h1 className="text-white">{page ? "Login" : "Register"}</h1>
        <br />
        <form>
          <input
            className="form-control"
            value={email}
            type="email"
            placeholder="Email"
            onChange={emailOnchangeHandler}
          />
          <input
            className="form-control"
            value={password}
            type="password"
            placeholder="Password"
            onChange={passwordOnchangeHandler}
          />
          <button
            className="btn btn-danger btn-block"
            onClick={onSignInHandler}
          >
            {page ? "Login" : "Register"}
          </button>
          <br />
          {app && (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label text-white"
                htmlFor="flexCheckDefault"
              >
                Remember Me
              </label>
            </div>
          )}
        </form>
        <br />
        <br />

        {isuserExist && (
          <p className="text-danger">User does not exist | Go for Signup</p>
        )}
        {/* {isEmailUsed && (
            <p className="text-danger">Email already in use | Go for Sign In</p>
          )} */}
        <div className="login-form-other">
          <div className="login-signup-now">
            {page ? "New to Netflix?" : "Existing User?"} &nbsp;
            <Link className=" " to={page ? "/register" : "/login"}>
              {page ? "Sign up now" : "Sign In"}
            </Link>
            .
          </div>
        </div>
      </div>
      <div className="shadow"></div>
      <img
        className="concord-img vlv-creative"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
    </div>
  );
};

export default Login;

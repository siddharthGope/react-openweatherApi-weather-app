import React from "react";
import logo from "../logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div>
      <header className="topNav">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="nav__logo" alt="logo" />
            </Link>

            <div className="navbar">
              <form className="d-flex" role="search">
                <select>
                  <option>English</option>
                  <option>Hindi</option>
                </select>
                <button onClick={signIn} className="btn btn-danger">
                  Signin
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

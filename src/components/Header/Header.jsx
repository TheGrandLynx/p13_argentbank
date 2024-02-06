import React from "react";
import Logo from "../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="sr-only">Argent Bank</h1>
      <nav>
        <Link to="/">
          <img src={Logo} alt="Bank Logo" />
        </Link>
        <Link to="/SignIn">
          <i className="fa-solid fa-circle-user"></i>
          <p>Sign In</p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

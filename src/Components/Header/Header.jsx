import Logo from "../../Logo/Logo_1.jpg";
import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {

  const [username, setUsername] = useState("");

  useEffect(() => {
    const userinfo = sessionStorage.getItem("userinfo");

    if (userinfo != null) {
      setUsername((JSON.parse(sessionStorage.getItem("userinfo"))).username);
    }
    else {
      setUsername("");
    }
  }, []);

  return (

    <nav class="navbar navbar-expand-lg p-2 border-bottom border-dark">
      <Link to="/" className="navbar-brand">
        <img src={Logo} className="border rounded" />
      </Link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon bg-danger rounded"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <div>
       <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link
              to="/"
              className="nav-link m-2 py-2 px-4 nav-link-text"
            >
              ALL TREKS
            </Link>
          </li>

          <li class="nav-item">
            <Link
              to="/filtertrek"
              className="nav-link m-2 py-2 px-4 nav-link-text"
            >
              FILTER TREK
            </Link>
          </li>

          <li class="nav-item">
            <Link
              to="/aboutus"
              className="nav-link m-2 py-2 px-4 nav-link-text"
            >
              CONTACT US
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/register"
              className="nav-link m-2 py-2 px-4 nav-link-text"
            >
              REGISTER
            </Link>
          </li>

          <li class="nav-item">
            <Link
              to="/login"
              className="nav-link m-2 py-2 px-4 nav-link-text"
            >
              LOGIN
            </Link>
          </li>

          <li class="nav-item">
            <Link
              to="/admincontrol"
              className="nav-link m-2 py-2 px-4 nav-link-text"
            >
              ADMIN
            </Link>
          </li>
          </ul>
       </div>
       <div className="userprofile">
       Hello <span className="header-username">{username ? username : "Guest"}</span>
       </div>

      </div>
    </nav>
  );
};

export default Header;

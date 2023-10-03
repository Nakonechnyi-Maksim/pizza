import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "./images/logo.png";

function navBar() {
  return (
    <div className="navBar">
      <img src={logo} alt="logo_png" />
      <ul>
        <li>
          <Link to={"/"}>Главная</Link>
        </li>
        <li>
          <Link to={"/promo/"}>Акции</Link>
        </li>
        <li>
          <Link to={"/location/"}>Рестораны</Link>
        </li>
        <li>
          <Link to={"/contact/"}>Контакты</Link>
        </li>
        <li>
          <Link to={"/aboutUs/"}>О нас</Link>
        </li>
      </ul>
    </div>
  );
}

export default navBar;

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "./images/logo.png";
import Modal from "./modal/modal.js";

function NavBar() {
  const [modalActive, setModalActive] = useState(false);
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
      <button onClick={() => setModalActive(true)}>Корзина</button>
      <Modal active={modalActive} setActive={setModalActive}></Modal>
    </div>
  );
}

export default NavBar;

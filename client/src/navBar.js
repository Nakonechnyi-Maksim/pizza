import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "./images/logo.png";
import Modal from "./modal/modal.js";

function NavBar() {
  const [modalActive, setModalActive] = useState(false);
  const Pizza = {};
  for (let i = 0; i <= localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    if (value !== null) {
      Pizza[key] = JSON.parse(value);
    }
  }
  const prices = Object.values(Pizza).reduce(
    (prev, { price }) => prev + price,
    0
  );
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
      <Modal active={modalActive} setActive={setModalActive}>
        <div>
          <h2>Заказ на сумму {prices}&#8381;</h2>
        </div>
      </Modal>
    </div>
  );
}

export default NavBar;

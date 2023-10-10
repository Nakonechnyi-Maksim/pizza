import React, { useState, useEffect } from "react";
import Pizzas from "../mock/mockData";
import "./homePage.css";

function HomePage() {
  const [id, setId] = useState([]);

  function handleClick(e) {
    return console.log(e.target.value);
  }
  // useEffect(() => {
  //   setData(Pizzas);
  // });

  return (
    <div className="menu">
      {Pizzas.map((item) => (
        <ul className="pizzas">
          <li>
            <img src={item.img} />
          </li>
          <li>
            <h2>{item.name}</h2>
          </li>
          <li>{item.ingredients}</li>
          <li>Размер {item.size} см</li>
          <li>
            Цена {item.price}&#8381;{" "}
            <button value={item.id} onClick={handleClick}>
              Добавить
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default HomePage;

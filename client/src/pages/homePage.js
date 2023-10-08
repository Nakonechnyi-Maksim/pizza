import React, { useState, useEffect } from "react";
import Pizzas from "../mock/mockData";

function HomePage() {
  const [id, setId] = useState([]);

  function handleClick() {
    console.log();
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
            Цена {item.price} <button onClick={handleClick}>Добавить</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default HomePage;

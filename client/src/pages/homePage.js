import React, { useState, useEffect } from "react";
import Pizzas from "../mock/mockData";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Pizzas);
  });

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
          <li>Размер{item.size}</li>
          <li>Цена {item.price}</li>
        </ul>
      ))}
    </div>
  );
}

export default HomePage;

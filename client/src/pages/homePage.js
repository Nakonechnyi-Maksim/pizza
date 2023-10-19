import React, { useState } from "react";
import Pizzas from "../mock/mockData";
import "./homePage.css";
import Modal from "../modal/pizzaModal";

function HomePage() {
  const [pizzaModalActive, setPizzaModalActive] = useState(false);
  const [selectPizza, setSelectPizza] = useState(<div></div>);
  const [addButton, setAddButon] = useState(false);
  const [valueButton, setValueButton] = useState("Добавить");

  function handleClick(e) {
    console.log(e.target.value);
    let data = JSON.parse(e.target.value);
    let dataId = data.id;
    localStorage.setItem(dataId, e.target.value);
    setValueButton("Добавлено");
  }

  function getPizza(item) { 
    setSelectPizza(item);
    setPizzaModalActive(true);
  }

  return (
    <div className="menu">
      {Pizzas.map((item) => (
        <div>
          <ul className="pizzas">
            <li>
              <img src={item.img} onClick={() => getPizza(item)} />
            </li>
            <li>
              <h2>{item.name}</h2>
            </li>
            <li>{item.ingredients}</li>
            <li>Размер {item.size} см</li>
            <li>
              Цена {item.price}&#8381;{" "}
              <button value={JSON.stringify(item)} onClick={handleClick}>
                {valueButton}
              </button>
            </li>
          </ul>
        </div>
      ))}
      {selectPizza && (
        <Modal active={pizzaModalActive} setActive={setPizzaModalActive}>
          <img src={selectPizza.img} alt="" />
          <h2>{selectPizza.name}</h2>
          <p>{selectPizza.ingredients}</p>
        </Modal>
      )}
    </div>
  );
}

export default HomePage;

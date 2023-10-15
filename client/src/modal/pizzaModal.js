import React from "react";
import "./pizzaModal.css";

function pizzaModal({ active, setActive, children }) {
  return (
    <div
      className={active ? "pizza_modal active" : "pizza_modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? "pizza_modal__content active" : "pizza_modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default pizzaModal;

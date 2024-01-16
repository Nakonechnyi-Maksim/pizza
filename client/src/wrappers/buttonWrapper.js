import React, { useState } from "react";

function Button({ value }) {
  const [isButton, setIsButton] = useState(true);
  function handleClick(e) {
    let data = JSON.parse(e.target.value);
    let dataId = data.id;
    localStorage.setItem(dataId, e.target.value);
    setIsButton(!isButton);
  }
  return (
    <div>
      {isButton && (
        <button onClick={handleClick} value={value}>
          Добавить
        </button>
      )}
      {!isButton && <button disabled>Добавлено</button>}
    </div>
  );
}

export default Button;

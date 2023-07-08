import React, { useState } from "react";
import menuItems from "./data";
import Item from "./Item";
function Menu() {
  const [data, setData] = useState(menuItems);
  const checkMeal = (event) => {
    const btnText = event.currentTarget.textContent;
    const singleCategory = menuItems.filter((i) => i.category === btnText);
    if (btnText === "all") {
      setData(menuItems);
    } else {
      setData(singleCategory);
    }
  };
  return (
    <section>
      <div className="heading-wrapper">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <div className="buttons">
        <button className="btn" onClick={checkMeal}>
          all
        </button>
        <button className="btn" onClick={checkMeal}>
          breakfast
        </button>
        <button className="btn" onClick={checkMeal}>
          lunch
        </button>
        <button className="btn" onClick={checkMeal}>
          shakes
        </button>
      </div>
      <div className="menu-items">
        {data.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default Menu;

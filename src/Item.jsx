import React from "react";

function Item({ title, price, img, desc }) {
  return (
    <div className="single-item">
      <img src={img} alt={title} />
      <div className="item-content">
        <header>
          <h5>{title}</h5>
          <div className="item-price">${price}</div>
        </header>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Item;

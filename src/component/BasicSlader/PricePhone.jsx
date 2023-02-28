import React from "react";
import "./Price.style.css";

function Price(props) {
  return (
    <div className="price background">
      <div className="priceInfo">
        <h2>Cena služeb</h2>
        <p>Hodinová sazba: 500 kč</p>
        <p>Úprava jedné normostrany: 250 kč</p>
      </div>
    </div>
  );
}

export default Price;

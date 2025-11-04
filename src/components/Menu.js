import React from "react";

export default function Menu({ items = [] }) {
  return (
    <div className="menu-grid">
      {items.map((item) => {
        const testId =
          item.category === "Breakfast"
            ? "menu-item-breakfast"
            : item.category === "Lunch"
            ? "menu-item-lunch"
            : "menu-item-shakes";

        return (
          <div className="menu-card" key={item.id} data-test-id={testId}>
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="menu-info">
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-category">{item.category}</p>
              <p className="menu-price">₹{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

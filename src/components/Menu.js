import React from "react";

function Menu({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          data-test-id={`menu-item-${item.category}`}
          style={{
            border: "1px solid gray",
            borderRadius: "8px",
            padding: "8px",
            margin: "10px",
            display: "inline-block",
          }}
        >
          <img
            src={item.img}
            alt={item.name}
            style={{ width: "120px", height: "100px", borderRadius: "6px" }}
          />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;

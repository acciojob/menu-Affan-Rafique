import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const initialItems = [
  { id: 1, name: "Pancakes", category: "Breakfast", price: 120, image: "https://via.placeholder.com/120" },
  { id: 2, name: "Omelette", category: "Breakfast", price: 90, image: "https://via.placeholder.com/120" },
  { id: 3, name: "Burger", category: "Lunch", price: 220, image: "https://via.placeholder.com/120" },
  { id: 4, name: "Pasta", category: "Lunch", price: 250, image: "https://via.placeholder.com/120" },
  { id: 5, name: "Chocolate Shake", category: "Shakes", price: 150, image: "https://via.placeholder.com/120" },
  { id: 6, name: "Strawberry Shake", category: "Shakes", price: 150, image: "https://via.placeholder.com/120" },
];

export default function App() {
  const [items] = useState(initialItems);
  const [category, setCategory] = useState("Breakfast"); // default category

  const visibleItems = items.filter((it) => it.category === category);

  return (
    <div id="main">
      <h1 className="title">Menu</h1>

      <div className="filters">
        <button id="filter-btn-1" onClick={() => setCategory("Breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => setCategory("Lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => setCategory("Shakes")}>Shakes</button>
      </div>

      <Menu items={visibleItems} />
    </div>
  );
}

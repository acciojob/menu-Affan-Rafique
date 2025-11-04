import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const MENU_ITEMS = [
  { id: 1, name: "Pancakes", category: "breakfast", price: 6.99, img: "https://via.placeholder.com/150?text=Pancakes" },
  { id: 2, name: "Omelette", category: "breakfast", price: 5.49, img: "https://via.placeholder.com/150?text=Omelette" },
  { id: 3, name: "Burger", category: "lunch", price: 8.99, img: "https://via.placeholder.com/150?text=Burger" },
  { id: 4, name: "Grilled Chicken", category: "lunch", price: 11.99, img: "https://via.placeholder.com/150?text=Grilled+Chicken" },
  { id: 5, name: "Chocolate Shake", category: "shakes", price: 4.99, img: "https://via.placeholder.com/150?text=Chocolate+Shake" },
  { id: 6, name: "Strawberry Shake", category: "shakes", price: 5.49, img: "https://via.placeholder.com/150?text=Strawberry+Shake" },
];

function App() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter logic
  const filteredItems =
    activeCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div id="main">
      <h1>Menu Application</h1>

      {/* Filter Buttons */}
      <div>
        <button id="filter-btn-1" onClick={() => setActiveCategory("breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => setActiveCategory("lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => setActiveCategory("shakes")}>
          Shakes
        </button>
      </div>

      {/* Menu Component */}
      <Menu items={filteredItems} />
    </div>
  );
}

export default App;



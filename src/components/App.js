import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const INITIAL_ITEMS = [
  {
    id: 1,
    name: "Pancakes",
    category: "breakfast",
    price: 6.99,
    img: "https://via.placeholder.com/300x200?text=Pancakes",
  },
  {
    id: 2,
    name: "Omelette",
    category: "breakfast",
    price: 5.49,
    img: "https://via.placeholder.com/300x200?text=Omelette",
  },
  {
    id: 3,
    name: "Grilled Chicken",
    category: "lunch",
    price: 11.99,
    img: "https://via.placeholder.com/300x200?text=Grilled+Chicken",
  },
  {
    id: 4,
    name: "Veggie Wrap",
    category: "lunch",
    price: 8.99,
    img: "https://via.placeholder.com/300x200?text=Veggie+Wrap",
  },
  {
    id: 5,
    name: "Chocolate Shake",
    category: "shakes",
    price: 4.99,
    img: "https://via.placeholder.com/300x200?text=Chocolate+Shake",
  },
  {
    id: 6,
    name: "Strawberry Shake",
    category: "shakes",
    price: 5.49,
    img: "https://via.placeholder.com/300x200?text=Strawberry+Shake",
  },
];

function App() {
  // Manage full menu and active category with useState
  const [items] = useState(INITIAL_ITEMS);
  const [activeCategory, setActiveCategory] = useState("all"); // 'all' on load shows everything

  return (
    <div className="app">
      <h1 className="title">Menu Application</h1>

      {/* Pass both state and setter to Menu (so Menu handles filtering UI) */}
      <Menu
        items={items}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
}

export default App;



import React from "react";

function Menu({ items, activeCategory, setActiveCategory }) {
  // Filter logic: when "all", show everything; otherwise match category
  const visibleItems =
    activeCategory === "all"
      ? items
      : items.filter((it) => it.category === activeCategory);

  // Map category to required data-test-id values
  const getTestId = (category) => {
    if (category === "breakfast") return "menu-item-breakfast";
    if (category === "lunch") return "menu-item-lunch";
    if (category === "shakes") return "menu-item-shakes";
    return "menu-item";
  };

  return (
    <main id="main" className="container">
      {/* Required category buttons with exact IDs */}
      <div className="filters">
        <button
          id="filter-btn-1"
          className={activeCategory === "breakfast" ? "btn active" : "btn"}
          onClick={() => setActiveCategory("breakfast")}
        >
          Breakfast
        </button>
        <button
          id="filter-btn-2"
          className={activeCategory === "lunch" ? "btn active" : "btn"}
          onClick={() => setActiveCategory("lunch")}
        >
          Lunch
        </button>
        <button
          id="filter-btn-3"
          className={activeCategory === "shakes" ? "btn active" : "btn"}
          onClick={() => setActiveCategory("shakes")}
        >
          Shakes
        </button>

        {/* Optional All button for convenience (not required by tests) */}
        <button
          className={activeCategory === "all" ? "btn ghost active" : "btn ghost"}
          onClick={() => setActiveCategory("all")}
          aria-label="Show all"
        >
          All
        </button>
      </div>

      {/* Menu grid */}
      <section className="grid">
        {visibleItems.map((item) => (
          <article
            key={item.id}
            className="card"
            data-test-id={getTestId(item.category)}
          >
            <img src={item.img} alt={item.name} className="thumb" />
            <div className="body">
              <div className="row">
                <h3 className="name">{item.name}</h3>
                <span className="price">${item.price.toFixed(2)}</span>
              </div>
              <div className="category">{item.category}</div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Menu;

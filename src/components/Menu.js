import React from 'react';

// This component receives the items to display and the filter function
const Menu = ({ items, filterItems }) => {
  return (
    <div>
      {/* Filter Buttons Container */}
      <div className="btn-container">
        {/* Button for Breakfast with id="filter-btn-1" */}
        <button
          className="filter-btn"
          id="filter-btn-1"
          onClick={() => filterItems('Breakfast')}
        >
          Breakfast
        </button>

        {/* Button for Lunch with id="filter-btn-2" */}
        <button
          className="filter-btn"
          id="filter-btn-2"
          onClick={() => filterItems('Lunch')}
        >
          Lunch
        </button>

        {/* Button for Shakes with id="filter-btn-3" */}
        <button
          className="filter-btn"
          id="filter-btn-3"
          onClick={() => filterItems('Shakes')}
        >
          Shakes
        </button>
      </div>

      {/* Menu Items Container */}
      <div className="section-center">
        {items.map((menuItem) => {
          const { id, title, price, img, desc, category } = menuItem;
          return (
            // Each article needs this dynamic data-test-id for the tests
            <article
              key={id}
              className="menu-item"
              data-test-id={`menu-item-${category.toLowerCase()}`}
            >
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

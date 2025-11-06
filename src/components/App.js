import React, { useState } from 'react';
import Menu from './Menu'; // In the same directory
import './styles.css'; // <-- CORRECTED PATH: In the same directory

// Master data for all menu items
const allMenuItems = [
  {
    id: 1,
    title: 'Buttermilk Pancakes',
    category: 'Breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'Diner Double',
    category: 'Lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.`,
  },
  {
    id: 3,
    title: 'Godzilla Milkshake',
    category: 'Shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'Country Delight',
    category: 'Breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'Egg Attack',
    category: 'Lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'Oreo Dream',
    category: 'Shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'Bacon Overflow',
    category: 'Breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland humblebrag`,
  },
  {
    id: 8,
    title: 'American Classic',
    category: 'Lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'Quarantine Buddy',
    category: 'Shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

function App() {
  // Use state to manage the items that are currently displayed
  const [displayedItems, setDisplayedItems] = useState(allMenuItems);

  // Function to filter items based on category
  const filterItems = (category) => {
    // Filter from the master list (allMenuItems) to ensure
    // we don't lose data after a previous filter
    const newItems = allMenuItems.filter(
      (item) => item.category === category
    );
    setDisplayedItems(newItems);
  };

  return (
    // This 'main' element MUST have the id="main"
    <main id="main">
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        {/* Pass state and filter function to the Menu component */}
        <Menu items={displayedItems} filterItems={filterItems} />
      </section>
    </main>
  );
}

export default App;

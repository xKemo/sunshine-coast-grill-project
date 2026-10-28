import { useState, useEffect } from "react";

// ============================================================
// WEEK 3: Uncomment these two imports AFTER setting up Firebase:
// ============================================================
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// ============================================================
// SAMPLE MENU DATA
// This lets the menu page work BEFORE Firebase is set up.
// In Week 3, you will delete this and load from Firebase instead.
//
// TODO (Week 2): You can update these items to match YOUR
// restaurant if you want, but it's not required yet.
// ============================================================
const sampleMenuItems = [
    {
    id: "1",
    name: "Grilled Mahi",
    description: "Fresh mahi-mahi grilled to perfection and seasoned with coastal spices, served with a light citrus finish.",
    price: 16.00,
    category: "Seafood",
  },
  {
    id: "2",
    name: "Fried Shrimp Basket",
    description: "Crispy golden shrimp served with fries and a side of tangy dipping sauce.",
    price: 14.00,
    category: "Seafood",
  },
  {
    id: "3",
    name: "Fish/Chicken/Steak Tacos",
    description: "Three soft tacos filled with your choice of fish, chicken, or steak, topped with fresh slaw and house sauce.",
    price: 13.00,
    category: "Seafood",
  },
  {
    id: "4",
    name: "Po Boy",
    description: "A classic sandwich loaded with crispy seafood or chicken, lettuce, tomato, and remoulade on a toasted roll.",
    price: 14.00,
    category: "Seafood",
  },
  {
    id: "5",
    name: "Chicken Sandwich",
    description: "Juicy grilled or fried chicken served on a toasted bun with lettuce, tomato, and mayo.",
    price: 11.00,
    category: "Seafood",
  },
  {
    id: "6",
    name: "French Fries",
    description: "Hot, crispy fries lightly salted and served fresh.",
    price: 3.00,
    category: "Sides",
  },
  {
    id: "7",
    name: "Coleslaw",
    description: "Creamy, refreshing coleslaw made with crisp cabbage and a tangy dressing.",
    price: 3.00,
    category: "Sides",
  },
  {
    id: "8",
    name: "Hush Puppies",
    description: "Golden fried cornmeal bites with a slightly sweet flavor and crispy outside.",
    price: 4.00,
    category: "Sides",
  },
  {
    id: "9",
    name: "Fountain Drinks",
    description: "Ice-cold soft drinks with a variety of classic soda options.",
    price: 3.00,
    category: "Drinks",
  },
  {
    id: "10",
    name: "Fruit Smoothie",
    description: "A refreshing blend of tropical fruits, perfectly chilled for a sweet and cool treat.",
    price: 5.00,
    category: "Drinks",
  },
];

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      try {
        // ==========================================================
        // WEEK 3: FIREBASE VERSION
        // Uncomment the block below and DELETE the sample data block
        // AFTER you set up Firebase and add your menu items.
        // ==========================================================
        // const querySnapshot = await getDocs(collection(db, "menuItems"));
        // const items = querySnapshot.docs.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        // }));
        // setMenuItems(items);

        // ==========================================================
        // SAMPLE DATA VERSION (delete this block in Week 3)
        // ==========================================================
        await new Promise((resolve) => setTimeout(resolve, 500));
        setMenuItems(sampleMenuItems);
      } catch (err) {
        console.error("Error fetching menu:", err);
        setError("Failed to load menu. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, []);

  if (loading) {
    return (
      <div className="page">
        <p className="loading-message">Loading menu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  // Group items by category
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <div className="page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Fresh coastal eats from tacos and shrimp to fries and smoothies — all served with a relaxed beach-town vibe.</p>
      </div>

      {categories.map((category) => (
        <div key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-items">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <div key={item.id} className="menu-item">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price">${item.price.toFixed(2)}</p>
                </div>
              ))}
          </div>
        </div>
      ))}

      <div className="menu-image-wrapper">
        <img src="/fish-tacos.jpg" alt="Fish tacos" className="menu-image" />
      </div>
    </div>
  );
}

export default Menu;

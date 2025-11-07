import React from "react";
import "./Menu.css";

// ✅ Import your local images from assets
import greekSalad from "../Assests/greeksalad.jpg";
import bruschetta from "../Assests/bruchetta.svg";
import lemonDessert from "../Assests/lemon dessert.jpg";

const Menu = () => {
  const dishes = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      image: greekSalad,
      description: "Crisp lettuce, olives, feta cheese, and lemon dressing.",
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$7.99",
      image: bruschetta,
      description: "Grilled bread with garlic, tomatoes, and olive oil.",
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$5.99",
      image: lemonDessert,
      description: "Sweet and tangy lemon dessert to finish your meal.",
    },
  ];

  return (
    <section className="menu-section">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {dishes.map((dish) => (
          <div className="menu-card" key={dish.id}>
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <span>{dish.price}</span>
            <button>Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
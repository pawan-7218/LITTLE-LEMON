import React, { useState } from "react";
import "./OrderOnline.css";

const OrderOnline = () => {
  const dishes = [
    { id: 1, name: "Greek Salad", price: 12.99 },
    { id: 2, name: "Bruschetta", price: 7.99 },
    { id: 3, name: "Lemon Dessert", price: 5.99 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    const existingItem = cart.find((item) => item.id === dish.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === dish.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...dish, qty: 1 }]);
    }
  };

  const decreaseQty = (dish) => {
    const existingItem = cart.find((item) => item.id === dish.id);
    if (existingItem.qty === 1) {
      // remove item completely
      setCart(cart.filter((item) => item.id !== dish.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === dish.id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="order-section">
      <h2>Order Online</h2>

      <div className="order-list">
        {dishes.map((dish) => (
          <div className="order-item" key={dish.id}>
            <h3>{dish.name}</h3>
            <p>${dish.price.toFixed(2)}</p>
            <button onClick={() => addToCart(dish)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Cart Summary</h3>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>
                  {item.name} × {item.qty}
                </span>
                <div>
                  <button onClick={() => decreaseQty(item)}>-</button>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
            <hr />
            <p><strong>Total: ${total.toFixed(2)}</strong></p>
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="place-btn">Place Order</button>
          </>
        )}
      </div>
    </section>
  );
};

export default OrderOnline;
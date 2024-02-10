import React from 'react'

const DishCard = ({dish}) => {
  return (
    <div className="dish-card">
    <img src={dish.photo} alt={dish.title} className="dish-photo" />
    <div className="dish-details">
      <h2 className="dish-title">{dish.title}</h2>
      <p className="dish-price">${dish.price}</p>
      <p className="dish-description">{dish.description}</p>
      <a href={dish.orderLink} className="order-link">
        Order Delivery <i className="fas fa-truck"></i>
      </a>
    </div>
  </div>
  )
}

export default DishCard
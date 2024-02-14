import React from 'react'
import './DishCard.css'
import truck from '../Assests/truck.png'
const DishCard = ({dish}) => {
  return (
    <div className='dishcard'>
    <img src={dish.photo} alt={dish.title} className="dishphoto" />
    <div className="dishdetails">
      <div className='dish1'>
      <h2 className="dishtitle">{dish.title}</h2>
      <p className="dishprice">${dish.price}</p>
      </div>
      <p className="dishdescription">{dish.description}</p>
      <a href={dish.orderLink}  className="orderlink">
        Order Delivery <span><img src={truck} width={20} height={20}/></span>
      </a>
    </div>
  </div>
  )
}

export default DishCard
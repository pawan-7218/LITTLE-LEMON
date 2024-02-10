import React from 'react'
import DishCard from './DishCard';
import Button from './Button';
const Specials = () => {
    const dish = {
        photo: 'dish-photo.jpg',
        title: 'Delicious Dish',
        price: 10.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        orderLink: 'https://example.com/order',
      };
  return (

    <>
     <h1>Weekly Specials</h1>
    <Button innerText='Menu Online'/>
    <DishCard dish={dish}/>
    <DishCard dish={dish}/>
    <DishCard dish={dish}/>
    </>
  )
}

export default Specials
import React from 'react'
import DishCard from './DishCard';
import Button from './Button';
import greek from '../Assests/greeksalad.jpg'
import bruchetta from '../Assests/bruchetta.svg'
import lemon from '../Assests/lemon dessert.jpg'
import styles from '../components/MyComponent.module.css'
const Specials = () => {
    const dish = [{
      id:1,
        photo: greek,
        title: 'Greek Salad',
        price: 10.99,
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons. ' ,
        orderLink: 'https://example.com/order',
      },{
        id:2,
        photo: bruchetta,
        title: 'Bruchetta',
        price: 10.99,
        description: 'Our Fresh Tomato Bruschetta combines juicy, vine-ripened tomatoes with aromatic basil, minced garlic, and a drizzle of balsamic glaze atop toasted baguette slices.' ,
        orderLink: 'https://example.com/order',
      },
      { id:3,
        photo: lemon,
        title: 'Lemon',
        price: 10.99,
        description: 'Our Fresh Tomato Bruschetta combines juicy, vine-ripened tomatoes with aromatic basil, minced garlic, and a drizzle of balsamic glaze atop toasted baguette slices.' ,
        orderLink: 'https://example.com/order',
      }
    ];
  return (

    <div className={styles.special}>
      <div className={styles.special1}>
      <h3 className={styles.section}>This Weeks Specials!</h3>
    <Button innerText='Menu Online'/>
      </div>
     <div className={styles.cardContainer}>
      {dish.map((dish)=> <DishCard id={dish.id} dish={dish}/>)}
     {/*<DishCard dish={dish}/>
    <DishCard dish={dish}/>
  <DishCard dish={dish}/>*/}
  </div> 
    
    </div>
  )
}

export default Specials
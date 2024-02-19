import React from 'react'
import ReviewCard from './ReviewCard'
import styles from '../components/MyComponent.module.css'
import user1 from '../Assests/3.jpg'
import user2 from '../Assests/4.jpg'
import './Testimonials.css'
const Testimonials = () => {
    const reviews = [
        {id:1,
          rating: 5,
          userPhoto: user1,
          username: 'John Doe',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {id:2,
          rating: 4,
          userPhoto: user2,
          username: 'Jane Smith',
          review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {id:2,
          rating: 4,
          userPhoto: user2,
          username: 'Jane Smith',
          review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {id:2,
          rating: 4,
          userPhoto: user2,
          username: 'Jane Smith',
          review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        
      ];
  return (
    <div className={styles.testimonial}>
        <h2>Testimonials</h2>
        <div className='reviewContainer'>
        {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          rating={review.rating}
          userPhoto={review.userPhoto}
          username={review.username}
          review={review.review}
        />
      
      ))}  </div>
    </div>
  )
}

export default Testimonials
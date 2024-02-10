import React from 'react'
import ReviewCard from './ReviewCard'

const Testimonials = () => {
    const reviews = [
        {
          rating: 5,
          userPhoto: 'user1.jpg',
          username: 'John Doe',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          rating: 4,
          userPhoto: 'user2.jpg',
          username: 'Jane Smith',
          review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        
      ];
  return (
    <div>
        <h1>Testimonials</h1>
        {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          rating={review.rating}
          userPhoto={review.userPhoto}
          username={review.username}
          review={review.review}
        />
      ))}
    </div>
  )
}

export default Testimonials
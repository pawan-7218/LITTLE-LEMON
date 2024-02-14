import React from 'react'
import './ReviewCard.css'

const ReviewCard = ({ rating, userPhoto, username, review }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<i key={i} id={i} className={i <= rating ? 'fa fa-star' : 'fa fa-star-o'} style={{fontSize:'36px' , color:i<=rating ? 'yellow':'white'}}></i>);
    }
    return stars;
  }
  return (
<div className="card">
      <div className="userimage">
        <img src={userPhoto} alt={username} className="userphoto" />
        </div>
        <div className="userdetails">
          <h3 className="username">{username}</h3>
          <div className="rating">{renderStars(rating)}</div>
          <p className="review">{review}</p>
        </div>
      
     
    </div>
  )
}

export default ReviewCard
import React from 'react'

const ReviewCard = ({ rating, userPhoto, username, review }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i} className={i <= rating ? "star filled" : "star"}>&#9733;</span>);
    }
    return stars;
  }
  return (
<div className="card">
      <div className="user-info">
        <img src={userPhoto} alt={username} className="user-photo" />
        <div className="user-details">
          <h3 className="username">{username}</h3>
          <div className="rating">{renderStars(rating)}</div>
        </div>
      </div>
      <p className="review">{review}</p>
    </div>
  )
}

export default ReviewCard
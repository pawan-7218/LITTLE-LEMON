import React from 'react'
import styles from '../components/MyComponent.module.css'
import BookingForm from '../components/BookingForm'
const BookingPage = () => {
  return (
    <div className={styles.bookingpage}>
        <h1>Reserve A Table</h1>
        <BookingForm/>
    </div>
  )
}

export default BookingPage
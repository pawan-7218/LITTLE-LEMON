import React ,{useReducer} from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import styles from '../components/MyComponent.module.css'
import BookingForm from '../components/BookingForm'
import {fetchAPI, submitAPI } from '../api/api'

const initializeTimes = () => {
  const today = new Date();
  const initTimes = fetchAPI(today);

  return initTimes;
}

const updateTimes = (state, action) => {
  let day = new Date(action.date);
  state = fetchAPI(day);

  return state;
};

const BookingPage = () => {
 
  const [availableTimes , dispatch] = useReducer(updateTimes , [{ id: '1', value: '09:00' },
  { id: '2', value: '09:30' },
  { id: '3', value: '10:00' }],initializeTimes  )
console.log(availableTimes)
const navigate = useNavigate();

const submitForm = (formData) => {
  const response = submitAPI(formData);
  if (response) navigate("/confirmedbooking");
};

  
  
  return (
    <div className={styles.bookingpage}>
      <div className={styles.backhome}><Button path='/' innerText='Back to Home'/></div>
      <main>
      <h1>Reserve A Table</h1>
        <BookingForm dispatch={dispatch} submitForm={submitForm} availableTimes={availableTimes}/>
      </main>
       
    </div>
  )
}

export default BookingPage
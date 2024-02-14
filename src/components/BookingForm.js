import React, { useState } from 'react'
import './BookingForm.css'
import Button from './Button'
const BookingForm = () => {
const [selectedTime,setSelectedTime] = useState('')
const [availableTimes, setAvailaibleTimes] = useState([
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
])
  return (
    <div className='formcontainer'>
        
        <form className='bookingform'>
            <fieldset className='item1'>
                <legend> <span style={{borderRadius:'50%', marginRight:'.5rem' , marginLeft:'.5rem' , borderColor:'black'}}>1</span>Booking Details</legend>
            <div>
            <label htmlFor="res-date">Choose date</label>
    <input type="date" id="res-date" />
    <label htmlFor="res-time">Choose time</label>
    <select id="res-time ">
      {availableTimes.map((time)=>(
        <option key={time}>{time}</option>
      ))}
    </select>
            </div>
            
            <div>
            <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder={1} min={1} max={10} id="guests" />
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
    </select>
            </div>
    
            </fieldset>
            <fieldset className='item2'>
                <legend> <span style={{borderRadius:'50%', marginRight:'.5rem' , marginLeft:'.5rem' , borderColor:'black'}}>2</span>Personal Details</legend>
                <div>
                <label htmlFor='firstname'>First name</label>
                <input type='text' id='firstname'/>
                <label htmlFor='lastname'>Last name</label>
                <input type='text' id='lastname'/>
                </div>
                <div>
                <label htmlFor='useremail'>Email</label>
                <input type='email' id='useremail'/>
                <label htmlFor='number'>Phone</label>
                <input type='number' id='number'/>
                </div>
               

            </fieldset>
    
    <div className='item3'><Button innerText='Confirm Booking'/></div>
  </form>
  </div>
  )
}

export default BookingForm
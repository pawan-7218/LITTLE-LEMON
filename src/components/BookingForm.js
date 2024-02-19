import React, { useState,useEffect } from 'react'
import './BookingForm.css'
import Button from './Button'


const BookingForm = ({dispatch , submitForm,availableTimes}) => {


const [inputs , setInputs] = useState({})

useEffect(() => { dispatch({ date: inputs.resDate}); }, [dispatch,inputs.resDate]);

const handleChange = (event)=>{
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
}

const handleSubmit = async(event)=>{
  event.preventDefault()
localStorage.setItem('userinfo' , JSON.stringify(inputs))

submitForm(inputs);
  form_reset();
  
}
const form_reset = () => {
  setInputs({});
}

  return (
    <div className='formcontainer'>
        
        <form className='bookingform' onSubmit={handleSubmit} method='post'>
            <fieldset className='item1'>
                <legend> <span style={{borderRadius:'50%', marginRight:'.5rem' , marginLeft:'.5rem' , borderColor:'black'}}>1</span>Booking Details</legend>
            <div>
              <div className='formgroup'> <label htmlFor="res-date">Choose date</label>
    <input type="date" required name='resDate' value={inputs.resDate} onChange={handleChange}  id="res-date" /></div>
           <div  className='formgroup'>
           <label htmlFor="res-time">Choose time</label>
    <select id="res-time " required name='resTime' value={inputs.resTime} onChange={handleChange}>
      {console.log(availableTimes)}
      {
      availableTimes.map((time)=>(
        <option key={time.id}>{time.value}</option>
      ))}
    </select>
           </div>
   
            </div>
            
            <div>
              <div  className='formgroup'>
              <label htmlFor="guests">Number of guests</label>
    <input type="number" required name='guests' value={inputs.guests} onChange={handleChange} placeholder={1} min={1} max={10} id="guests" />
              </div>
           <div  className='formgroup'>
           <label htmlFor="occasion">Occasion</label>
    <select id="occasion" required name='occasion' value={inputs.occasion} onChange={handleChange}>
      <option>Birthday</option>
      <option>Anniversary</option>
    </select>
           </div>
    
            </div>
    
            </fieldset>
            <fieldset className='item2'>
                <legend> <span style={{borderRadius:'50%', marginRight:'.5rem' , marginLeft:'.5rem' , borderColor:'black'}}>2</span>Personal Details</legend>
                <div>
                  <div className='formgroup'><label htmlFor='firstname'>First name</label>
                <input type='text' required name='firstName' value={inputs.firstName} onChange={handleChange} placeholder='John' id='firstname'/></div>
                <div className='formgroup'>
                <label htmlFor='lastname'>Last name</label>
                <input type='text' required name='lastName' value={inputs.lastName} onChange={handleChange} placeholder='Colman' id='lastname'/>
                </div>
                
                </div>
                <div>
                  <div className='formgroup'>
                  <label htmlFor='useremail'>Email</label>
                <input type='email' required name='email' value={inputs.email} onChange={handleChange}  id='useremail' placeholder='Email'/>
                  </div>
                <div className='formgroup'>
                <label htmlFor='number'>Phone</label>
                <input type='number' required name='phone' value={inputs.phone} onChange={handleChange} id='number' placeholder='Phone'/>
                </div>
               
                </div>
               

            </fieldset>
    
    <div className='item3'><Button type='submit' innerText='Confirm Booking'/></div>
  </form>
  </div>
  )
}

export default BookingForm
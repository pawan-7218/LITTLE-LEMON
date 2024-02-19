import { useState , useEffect} from 'react'
import React from 'react'
import Button from '../components/Button'
import './ConfirmedBooking.css'
const ConfirmedBooking = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userinfo');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
    return () => {
      localStorage.removeItem('userinfo');
      
      console.log(`text ${localStorage.getItem('userinfo')}`)
    };
  }, []);
  return (
    <div className='bookingc'>
        <h1>
            Congratulations!! Booking Confirmed.
        </h1>
        {formData && (
          <p className='text'>Dear {formData.firstName} {''} {formData.lastName} your booking for {formData.resDate} is confirmed.</p>
        )}
        <Button path='/' innerText='Back to Home'/>
    </div>
  )
}

export default ConfirmedBooking
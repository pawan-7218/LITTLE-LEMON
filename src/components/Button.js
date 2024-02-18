import React from 'react'
import './Button.css'
import {useNavigate } from 'react-router-dom'
const Button = (props) => {
  const navigate = useNavigate(); 
  return (
<button type='submit' onClick={()=>navigate(props.path)}>
{props.innerText}
</button>
  )
}

export default Button
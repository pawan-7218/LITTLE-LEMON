import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
<button type='submit'>
{props.innerText}
</button>
  )
}

export default Button
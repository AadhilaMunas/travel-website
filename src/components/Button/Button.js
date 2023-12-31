import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom';


const STYLES=['btn--primary','btn--outline']
const SIZE=['btn--medium ','btn--large']


function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize}) {

    const checkButtonstyle=STYLES.includes(buttonStyle)? buttonStyle : STYLES[0];
    const checkButtonSize=SIZE.includes(buttonSize)? buttonSize : SIZE[0];

  return (
    <Link to='/SignUp' className='btn-mobile'>
      <button className={`btn ${checkButtonstyle} ${checkButtonSize} `} onClick={ onClick} type={type}>
        {children}
      </button>
    </Link>
  )
}

export default Button
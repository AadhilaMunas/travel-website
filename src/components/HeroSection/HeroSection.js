import React from 'react'
import './HeroSection.css'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="public\videos\video-2.mp4"></video>
        <h1>Adventure Awaits</h1>
        <p>what are you waiting for ?</p>
        <div className='hero-btns'>
           <Button buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
           <Button buttonSize='btn--large'>Watch Trailer <FontAwesomeIcon icon={faPlay} beatFade /></Button>
            
        </div>
    </div>
  )
}

export default HeroSection
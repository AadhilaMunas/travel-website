import React from 'react'
import '../Footer/Footer.css'

function Footer() {
  return (
    <div className='footer-container'> 
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Joion the adventure newsletter to join our best vaccation deals 
            </p>
            <p className='footer-subscription-text'>
                you can unsubscribe anytime
            </p>
            <div className='input-areas'>
                <form>
                    <input type="email" name='email' placeholder='your email' className='footer-input' />
                </form>
            </div>

        </section>
    </div>
  )
}

export default Footer
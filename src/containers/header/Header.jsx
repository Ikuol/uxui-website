import React from 'react'
import people from '../../assets/Group.png';
import AI from '../../assets/Illustration.png';
import './header.css'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
          <div  className='gpt3__header-content'>
                <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                    Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow 
                    asked of.
                </p>

                <div data-aos='fade-left' data-aos-duration='2000' className='gpt3__header-content__input'>
                      <input type='email' placeholder='Your Email Address'/>
                      <button type='button'>Get Started</button>
                </div>

                <div data-aos='fade-zoom-in' data-aos-duration='2000' className='gpt3__header-content__people'>
                      <img src={ people } alt='people'/>
                      <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
          </div>
          <div data-aos='zoom-in' data-aos-duration='1000' className='gpt3__header-image'>
                      <img src={ AI } alt='AI'/>
          </div>
    </div>
  )
}

export default Header
import Image from 'next/image'
import React from 'react'
import '../page.css'
import Apple from '../Svgs/Apple.svg'
import Google from '../Svgs/Google.svg'

const HeroPage = () => {
  return (
    <section className='hero_page'>
    <div className='hero_details'>
      <div className='hero_sideInfo'>
        <div className='hero_Title'>
          <div className='secured'>Secured Payment</div>
          <div className='hero_Top'> Pay Bills <span>Anytime,</span> <br /> Anywhere Effortlessly</div>
          <div className='hero_Discover'>Discover endless possibilities and take charge of your finances with our easy-to-use App and personalized services.</div>
        </div>
        <div className='hero_downloadStore'>
          <Image src={Apple} alt='' />
          <Image src={Google} alt='' />

        </div>
        <div className='Hero_join'>Join over +10K users across the globe to make bill payment effortlessly.</div>
        <div className='Hero_offers'>
          <div className='fast'>
            <div className='x'>20x</div>
            <div className='tech'>Faster Technology</div>
          </div>
          <div className='Support'>
            <div className='x'>+10k</div>
            <div className='tech'>Total Active users</div>
          </div>
          <div className='Support'>
            <div className='x'>24/7</div>
            <div className='tech'>Customer Support</div>
          </div>
        </div>
      </div>


      <div>image</div>

    </div>




  </section>
   
  )
}

export default HeroPage
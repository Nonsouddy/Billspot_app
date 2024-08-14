import React from 'react';
import Image from 'next/image';
import './FeaturePage.css';
import phoneImage from '../Image/phoneImage.png';
import cashbackImage from '../Image/cashbackImage.png';
import airtimeToCashImage from '../Image/airtimeToCashImage.png';
import bettingImage from '../Image/bettingImage.png';
import Group1 from '../Image/Vector.png';

const Feature = () => {
  return (
    <section className='FeatureSection' id='Feature'>
        <div>
          <div className='Feature'>Features</div>
          <div className='Explore'>Explore your Experience with <span>Billspot App</span> </div>
          <Image className='Mark' src={Group1} alt='' />

          <div className='ExploreSmallText'>Manage all your financial transactions in one place. From money transfers to bill payments, Billspot covers all your needs.</div>
          <div className='Feature_fill'>
            <div className='Feature_offer'>
              <div className='Feature_card'>
                <Image className='Card_img' src={phoneImage} alt='' />
                <div className='Feature_card_details'>
                  <div className='Feature_card_offer'>Airtime Recharge</div>
                  <div className='Feature_card_offer_step'>Easily recharge your mobile phone with just a few taps. Stay connected without the hassle, anytime, anywhere.</div>
                </div>
              </div>
              <div className='Feature_card_3'>
                <Image className='Card_img1' src={airtimeToCashImage} alt='' />
                <div className='Feature_card_details'>
                  <div className='Feature_card_offer'>Airtime to Cash</div>
                  <div className='Feature_card_offer_step'>Turn your excess airtime into cash instantly. Flexible and convenient, our app lets you convert airtime to money with ease.</div>
                </div>
              </div>

            </div>
            <div className='Feature_offer'>

              <div className='Feature_card_2'>
                <Image className='Card_img' src={cashbackImage} alt='' />
                <div className='Feature_card_details'>
                  <div className='Feature_card_offer'>Data Recharge</div>
                  <div className='Feature_card_offer_step'>Top up your data effortlessly to stay online and connected. Enjoy fast and reliable internet on the go.</div>
                </div>
              </div>
              <div className='Feature_card'>
                <Image className='Card_img2' src={bettingImage} alt='' />
                <div className='Feature_card_details'>
                  <div className='Feature_card_offer'>Betting with ease</div>
                  <div className='Feature_card_offer_step'>Place bets on your favorite sports and games directly through the app. Experience the thrill and excitement of betting at your fingertips.</div>
                </div>
              </div>
            </div>

          </div>
          <div className='Feature_More'> <a href=''>+10 More Features </a></div>


        </div>
      </section>
    
  )
}

export default Feature






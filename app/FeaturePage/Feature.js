import React from 'react';
import Image from 'next/image';
import './FeaturePage.css';

// import phoneImage from '../Image/phoneImage.png';
// import cashbackImage from '../Image/cashbackImage.png';
// import airtimeToCashImage from '../Image/airtimeToCashImage.png';
// import bettingImage from '../Image/bettingImage.png';
// import Group1 from '../Image/Vector.png';

// export default function Feature() {
//   return (
//     <section className='featuresSection'>
//       <div className='headerContainer'>
//         <div className='featuresHeader'>
//           Features
//         </div>
//         <h1 className='mainTitle'>
//           Explore your Experience with <span className='underline'>Billspot App</span>
//         </h1>
//         <Image className='Mark' src={Group1} alt='' />
//         <p className='mainDescription'>
//           Manage all your financial transactions in one place. From money transfers to bill payments, Billspot covers all your needs.
//         </p>
//       </div>
     

//       <div className='featuresGrid'>
//         <div className='featureItem'>
//           <Image src={phoneImage} alt="Airtime Recharge" />
//           <div className='feature_card_details'>
//             <h2>Airtime Recharge</h2>
//             <p>
//               Easily recharge your mobile phone with just a few taps. Stay connected without the hassle, anytime, anywhere.
//             </p>
//           </div>
//         </div>

//         <div className='featureItem'>
//         <div className='feature_card_details'>
//           <Image src={cashbackImage} alt="Data Recharge" />
//           <h2>Data Recharge</h2>
//           <p>
//             Top up your data effortlessly to stay online and connected. Enjoy fast and reliable internet on the go.
//           </p>
//         </div>
//         </div>

//         <div className='featureItem'>
//         <div className='feature_card_details'>
//           <Image src={airtimeToCashImage} alt="Airtime to Cash" />
//           <h2>Airtime to Cash</h2>
//           <p>
//             Turn your excess airtime into cash instantly. Flexible and convenient, our app lets you convert airtime to money with ease.
//           </p>
//         </div>
//         </div>

//         <div className='featureItem'>
//         <div className='feature_card_details'>
//           <Image src={bettingImage} alt="Betting with ease" />
//           <h2>Betting with ease</h2>
//           <p>
//             Place bets on your favorite sports and games directly through the app. Experience the thrill and excitement at your fingertips.
//           </p>
//         </div>
//         </div>
//       </div>

//       <div className='moreFeatures'>
//         <a href="#">+10 More Features</a>
//       </div>
//     </section>
//   );
// }

import phoneImage from '../Image/phoneImage.png';
import cashbackImage from '../Image/cashbackImage.png';
import airtimeToCashImage from '../Image/airtimeToCashImage.png';
import bettingImage from '../Image/bettingImage.png';
import Group1 from '../Image/Vector.png';

const Feature = () => {
  return (
    <section className='FeatureSection'>
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






import Image from 'next/image';
import './HeroPage.css';
import appstore from '../Svgs/Apple.svg';
import playstore from '../Svgs/Google.svg';
import woman from '../Svgs/woman.png'
import recieved from '../Svgs/recieved.jpg'
import memoji1 from '../Svgs/memoji1.jpg'
import memoji2 from '../Svgs/memoji2.jpg'
import memoji3 from '../Svgs/memoji3.jpg'
import memoji4 from '../Svgs/memoji4.jpg'
import memoji5 from '../Svgs/memoji5.jpg'

export default function HeroPage() {
  return (
    <div className= 'hero'>
      <div className='heroContent'>
        <div className='textContent'>
          <div className='badge1'>Secured Payment</div>
          <h1>
            Pay Bills <span className='highlight'>Anytime, Anywhere Effortlessly</span>
          </h1>
          <p>Discover endless possibilities and take charge of your finances with our easy-to-use App and personalized services.</p>
          <div className='appButtons'>
            <Image src={appstore} alt="App Store" width={150} height={50} />
            <Image src={playstore} alt="Google Play" width={150} height={50} />
          </div>
          <p className='subtext'>Join over +10K users across the globe to make bill payment effortlessly.</p>
          <div className='stats'>
            <div className='stat'>
              <h2>20x</h2>
              <p>Faster Technology</p>
            </div>
            <div className='stat'>
              <h2>+10k</h2>
              <p>Total Active Users</p>
            </div>
            <div className='stat'>
              <h2>24/7</h2>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
        <div className='imageContent'>
          <Image src={woman} alt="woman" width={400} height={500} />
          <div className='floatingBadges'>
            <div className='badgeWithMemoji'>
              <Image className='memojii' id='memoji4' src={memoji4} alt='memoji4' width={30} height={30}/>
              <div className='badge'> Received </div>
            </div>
            <div className='badgeWithMemoji'>
              <div className='badge' id="badge10k" > +10k Users </div>
              <Image className='memojii' src={memoji5} alt='memoji5' width={30} height={30}/>
            </div>
          </div>
          <div className='memojiContainer'>
            <Image src={memoji1} alt="Memoji 1" width={50} height={50} />
            <Image src={memoji2} alt="Memoji 2" width={50} height={50} />
            <Image src={memoji3} alt="Memoji 3" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
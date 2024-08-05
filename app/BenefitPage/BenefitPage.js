import Image from 'next/image'
import '../page.css'
import rafiki from '../Image/rafiki.png'
import Socials from '../Image/Socials.png'
import MoneyIncome from '../Image/MoneyIncome.png'
import MoneyMotivation from '../Image/MoneyMotivation.png';

function BenefitPage() {
  return (
    <section className='Benefits '>
    <div className='Benefits_main'>
      <div>
        <div className='BenefitsTopText'>Why Choose Billspot App</div>
        <div className='BenefitsTopTextSmall'>Discover a world of possibilities and take charge of your bill payments with our user-friendly tools and customized solutions.</div>
      </div>
      <div className='BenefitSection'>
        <div className='Card'>
          <div className='illustraitor'>
            <div>  <Image src={rafiki} alt='' /></div>
            <div className='a'>Encrypted Payment</div>
          </div>
          <div className='content'>
            <div className='content_info'>Secure and fast Payment</div>
            <div className='content_info_para'>Your security is our top priority. We use advanced encryption and security protocols to ensure you are always protected.</div>
          </div>
        </div>
        <div className='Card'>
          <div className='illustraitor'>
            <div>  <Image src={Socials} alt='' /></div>
            <div className='b'>Post on socials and earn rewards</div>
          </div>
          <div className='content'>
            <div className='content_info'>Post and Earn</div>
            <div className='content_info_para'>Share your Billspot experience on social media and earn exciting rewards. Enjoy additional benefits just for spreading the word.</div>
          </div>
        </div>
        <div className='Card'>
          <div className='illustraitor'>
            <div> <Image src={MoneyIncome} alt='' /></div>
            <div className='c'>Receive cashback on each referral</div>
          </div>
          <div className='content'>
            <div className='content_info'>Earn as you spend</div>
            <div className='content_info_para'>Get rewarded every time your referral use Billspot. Accumulate points and enjoy perks for every transaction you make through the app.</div>
          </div>
        </div>
        <div className='Card'>
          <div className='illustraitor'>
            <div> <Image src={MoneyMotivation} alt='' /></div>
            <div className='d'>+ Daily Reward</div>
          </div>
          <div className='content'>
            <div className='content_info'>Cashback Rewards</div>
            <div className='content_info_para'>Receive cashback on your transactions. Save money while managing your finances efficiently with Billspot’s cashback rewards program.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BenefitPage
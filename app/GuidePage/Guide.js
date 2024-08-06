import Image from 'next/image';
import '../page.css';
import './GuidePage.css';
import GuideSvg from '../Svgs/Muckup.svg';

const Guide = () => {
  return (
    <section className='GuideMain'>
      <div className='Guide'>
        <div className='GetStarted'>Get started with our App</div>
        <div className='Discover'>
          Discover a world of possibilities and take charge of your bill payments with our user-friendly tools and customized solutions.
        </div>
        <div className='ttrt'>
          <div className='GetStart_section'>
            <div className='Steps'>
              <div className='number'>1</div>
              <div className='Frame-45'>
                <div className='createAccount'>Create an Account</div>
                <div className='Sign'>Sign up with your email or phone number. Follow the easy registration process to enter your details.</div>
              </div>
            </div>
            <div className='Steps'>
              <div className='number'>2</div>
              <div className='Frame-45'>
                <div className='createAccount'>Explore Features</div>
                <div className='Sign'>Discover a world of possibilities and take charge of your bill payments with our user-friendly App.</div>
              </div>
            </div>
            <div className='Steps'>
              <div className='number'>3</div>
              <div className='Frame-45'>
                <div className='createAccount'>Start Transaction</div>
                <div className='Sign'>You’re ready to start enjoying all the features Billspot has to offer.</div>
              </div>
            </div>
          </div>
          <div>
            <Image className='GuideImg' src={GuideSvg} alt='Guide Illustration' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
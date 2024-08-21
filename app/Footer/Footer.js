        "use client"
import Image from 'next/image'
import '../page.css'
import './Footer.css'
import Logo2 from '../Svgs/Logo2.svg'
import Apple from '../Svgs/Apple.svg'
import Google from '../Svgs/Google.svg'
import x from '../Svgs/X.svg'
import Whatsapp from '../Svgs/Whatsapp.svg'
import Instagram from '../Svgs/Instagram.svg'
import facebook from '../Svgs/FaceBook.svg'
import linkedin from '../Svgs/Linkedin.svg'

function Footer() {
  return (
    <footer className='Footer'>
        <div className='FooterSection'>
          <div className='FooterAbout'>
            <div className='FooterAboutSec'>
              <Image className='FooterLogo' src={Logo2} alt='' />
              <div className='FooterAboutText'>Billspot is dedicated to simplifying your financial management. Our app offers a wide range of services, including airtime recharge, utility bill payments, data recharge, betting, converting airtime to cash, booking services, and more. Our goal is to provide you with a seamless and secure experience.</div>
            </div>
            <div className='FooterDownload'>
              <div className='GetApp'>Get the app</div>
              <div className='FooterStore'>
                <Image src={Apple} alt='' />
                <Image src={Google} alt='' />

              </div>
            </div>

          </div>
          <div className='FooterLink_section'>
          <div className='FooterLink'>
            <h2>Quick Links</h2>
            <div><a href='/'>Home</a></div>
            <div><a href='/#Feature'>Feature</a></div>
            <div><a href='/#Faq'>FAQ</a></div>
            {/* <div> <a href=''>Contact Us</a></div> */}

          </div>

          <div className='FooterLink'>
            <h2>Contact</h2>
            <div><a href='#'>Tel: +234 (0)816 710 6811</a></div>
            <div><a href='#'>Email: support@usebillspot.ng,
              <br/>usebillspot@gmail.com</a></div>
            <div> <a href='#'>Address: Block C, 
            Behind Mobil Filling <br/> Station,
             Off Summit Road,Off Old <br/>Secretariat,
             Asaba,Delta State</a></div>
    
    

          </div>
         
          </div>


        </div>
        {/* <hr/> */}
        <div className='Footerfoot'>
          <div className='hr'>
            <div className='FooterCopy'>© 2024 Billspot. All rights reserved.</div>
            <div className='FooterSocials'>
              <a href=''> <Image className='WhatsApp' src={Whatsapp} alt='' /></a>
              <a href=''> <Image className='WhatsApp' src={Instagram} alt='' /></a>
              <a href=''> <Image className='WhatsApp' src={facebook} alt='' /></a>
              <a href=''> <Image className='WhatsApp' src={linkedin} alt='' /></a>
              <a href=''> <Image className='WhatsApp' src={x} alt='' /></a>
            </div>

          </div>
        </div>
      </footer>
    
  )
}

export default Footer
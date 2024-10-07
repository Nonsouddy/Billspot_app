"use client";
import Image from "next/image";
import "../page.css";
import "./Footer.css";
import Logo2 from "../Svgs/Logo2.svg";
import Apple from "../Svgs/Apple.svg";
import Google from "../Svgs/Google.svg";
import x from "../Svgs/X.svg";
import Whatsapp from "../Svgs/Whatsapp.svg";
import Instagram from "../Svgs/Instagram.svg";
import facebook from "../Svgs/FaceBook.svg";
import linkedin from "../Svgs/Linkedin.svg";
import { Router } from "next/router";
import Link from "next/link";

function Footer() {
  const triggerUrl = (url) => {
    Router.push(url);
  };
  return (
    <footer className="Footer">
      <div className="FooterSection">
        <div className="FooterAbout">
          <div className="FooterAboutSec">
            <Image className="FooterLogo" src={Logo2} alt="" />
            <div className="FooterAboutText">
              Billspot is dedicated to simplifying your financial management.
              Our app offers a wide range of services, including airtime
              recharge, utility bill payments, data recharge, betting,
              converting airtime to cash, booking services, and more. Our goal
              is to provide you with a seamless and secure experience.
            </div>
          </div>
          <div className="FooterDownload">
            <div className="GetApp">Get the app</div>
            <div className="FooterStore">
              <Image src={Apple} alt="" />
              <Link
                href="https://play.google.com/store/apps/details?id=com.billspot.billspot"
                target="_blank"
              >
                <Image src={Google} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="FooterLink_section">
          <div className="FooterLink">
            <h2>Quick Links</h2>
            <div style={{ width: "100%" }}>
              <a href="/">Home</a>
            </div>
            <div style={{ width: "100%" }}>
              <a href="/#Feature">Feature</a>
            </div>
            <div style={{ width: "100%" }}>
              <a href="/#Faq">FAQ</a>
            </div>
            {/* <div> <a href=''>Contact Us</a></div> */}
          </div>

          <div className="FooterLink">
            <h2>Contact</h2>
            <div style={{ width: "100%" }}>
              <a href="#">Tel: +234(0)8167106811</a>
            </div>
            <div style={{ width: "100%" }}>
              <a href="#">Email: support@usebillspot.ng,</a>
            </div>
            <div style={{ width: "100%" }}>
              <a href="#">usebillspot@gmail.com</a>
            </div>
            <div style={{ width: "100%" }}>
              <a href="#">
                Address: Block C,&nbsp; Behind Mobil Filling Station, &nbsp;Off
                Summit Road, &nbsp;Off Old Secretariat, &nbsp; Asaba, <br />{" "}
                Delta State
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <hr/> */}
      <div className="Footerfoot">
        <div className="hr">
          <div className="FooterCopy">
            © 2024 Billspot. All rights reserved.
          </div>
          <div className="FooterSocials">
            <a href="http://api.whatsapp.com/send?phone=2348167106811">
              {" "}
              <Image className="WhatsApp" src={Whatsapp} alt="" />
            </a>
            <a href="http://instagram.com/billspothq">
              {" "}
              <Image className="WhatsApp" src={Instagram} alt="" />
            </a>

            <a href="http://facebook.com/billspothq">
              {" "}
              <Image className="WhatsApp" src={facebook} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/billspot-hq">
              {" "}
              <Image className="WhatsApp" src={linkedin} alt="" />
            </a>
            <a href="http://x.com/billspot_hq">
              {" "}
              <Image className="WhatsApp" src={x} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

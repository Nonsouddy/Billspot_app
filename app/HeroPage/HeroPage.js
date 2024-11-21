import Image from "next/image";
import "./HeroPage.css";
import appstore from "../Svgs/Apple.svg";
import playstore from "../Svgs/Google.svg";
import emoji1 from "../Image/emoji1.png";
import emoji2 from "../Image/emoji2.png";
import emoji3 from "../Image/emoji3.png";
import emoji4 from "../Image/emoji4.png";
import emoji5 from "../Image/emoji5.png";
import emoji6 from "../Image/emoji6.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeroPage() {
  const router = useRouter();

  function openLink(url) {
    if (url) {
      router.push(url);
    }
  }
  return (
    <div className="hero">
      <div className="heroContent">
        <div className="textContent">
          <div className="hero_left">
            <div className="badge1">
              <div>Secured Payment</div>
            </div>
            <h1>
              Pay Bills <span className="highlight">Anytime, </span>Anywhere
              Effortlessly
            </h1>
            <p>
              Discover endless possibilities and take charge of your finances
              with our easy-to-use App and personalized services.
            </p>

            <div className="appButtons">
              <Image
                src={appstore}
                alt="App Store"
                width={150}
                height={50}
                onClick={() => openLink()}
              />
              <Image
                src={playstore}
                alt="Google Play"
                width={150}
                height={50}
                onClick={() =>
                  openLink(
                    "https://play.google.com/store/apps/details?id=com.ravenheight.billspot&hl=en"
                  )
                }
              />
            </div>
          </div>
          <p className="subtext">
            Join over +10K users across the globe to make bill payment
            effortlessly.
          </p>
          <div className="hero_offer">
            <div className="fast">
              <div className="x">20x</div>
              <div className="tech">Faster Technology</div>
            </div>
            <div className="Av">
              <div className="Support">
                <div className="x">+10k</div>
                <div className="tech">Total Active users</div>
              </div>
              <div className="Support">
                <div className="x">24/7</div>
                <div className="tech">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
        <div className="imageContent">
          <div className="image_side">
            {/* <Image className='Woman' src={woman} alt="woman" /> */}

            <div className="emoji_section1">
              <div className="emoj_6">
                <Image className="emoj6" src={emoji6} alt="emoji" />
              </div>
              <div className="emoji_1">
                <Image className="emoji1" src={emoji1} alt="emoji" />
              </div>
            </div>
            <div className="emoji_section2">
              <div className="emoji_2">
                <Image className="emoji2" src={emoji2} alt="emoji" />
              </div>
              <div className="emoji_4">
                <Image className="emoji4" src={emoji4} alt="emoji" />
              </div>
            </div>
            <div className="emoji_section3">
              <div className="emoji_5">
                <Image className="emoji5" src={emoji5} alt="emoji" />
              </div>
              <div className="emoji_3">
                <Image className="emoji3" src={emoji3} alt="emoji" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

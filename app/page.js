"use client";

import "../app/page.css";
import NavBar from "./NavBar/NavBar";
import HeroPage from "./HeroPage/HeroPage";
import Feature from "./FeaturePage/Feature";
import GuidePage from "./GuidePage/Guide";
import BenefitPage from "./BenefitPage/BenefitPage";
import FQAPage from "./FQAPage/FQAPage";
import NewsPage from "./NewsLetterPage/NewsPage";
import Footer from "./Footer/Footer";

const page = () => {
  return (
    <div>
      <NavBar />
      <HeroPage />
      <Feature />
      <GuidePage />
      <BenefitPage />
      <FQAPage defaultLength="4" />
      <NewsPage />
      <Footer />
    </div>
  );
};

export default page;

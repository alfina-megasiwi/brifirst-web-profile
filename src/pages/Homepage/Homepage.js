import React from "react";
import CardMenu from "../../components/CardMenu/CardMenu";
import BenefitSection from "../../components/BenefitSection/BenefitSection";
import HeaderCarousel from "../../components/HeaderCarousel/HeaderCarousel"

const Homepage = () => {
  return (
    <div style={{ background: "linear-gradient(90.1deg, #d0e4ff 10.98%, #ffffff 99.93%)"}}>
      <HeaderCarousel />
      <CardMenu />
      <BenefitSection />
    </div>
  );
};

export default Homepage;

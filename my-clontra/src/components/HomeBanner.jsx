import React from "react";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.png";

export default function HomeBanner() {
  return (
    <div className="homebanner-container">
      <img src={banner1} alt="" srcSet="" loading="lazy" />
      <img className="banner-2" src={banner2} alt="" srcSet="" loading="lazy" />
      <img className="banner-3" src={banner3} alt="" srcSet="" loading="lazy" />
    </div>
  );
}

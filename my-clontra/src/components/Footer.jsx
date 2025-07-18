import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import playstore from "../assets/images/google-playstore-logo.png";
import appStore from "../assets/images/appStore-logo.png";

export default function Footer() {
  return (
    <footer className="myntra-footer">
      <div className="top-4-sections display-flex">
        <div className="nav-links">
          <ul>
            <li className="margin-20">
              <a className="online-shopping-link" href="">
                <strong className="online-shopping-links-title">
                  ONLINE SHOPPING
                </strong>
              </a>
            </li>

            <li>
              <a href="">Men </a>
            </li>
            <li>
              <a href="">Women </a>
            </li>
            <li>
              <a href="">Kids </a>
            </li>
            <li>
              <a href="">Home </a>
            </li>
            <li>
              <a href="">Beauty </a>
            </li>
            <li>
              <a href="">Genz </a>
            </li>
            <li>
              <a href="">Myntra Insider</a>
            </li>

            <li className="margin-20">
              <span>
                <strong>USEFUL LINKS</strong>
              </span>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Site Map</a>
            </li>
            <li>
              <a href="">Corporate Information</a>
            </li>
            <li>
              <a href="">Whitehat</a>
            </li>
            <li>
              <a href="">Cleartrip</a>
            </li>
          </ul>
        </div>
        <div className="customer-policies">
          <ul>
            <li className="margin-20">
              <span className="customer-policies-title">
                <strong>CUSTOMER POLICIES</strong>
              </span>
            </li>
            <li>
              <a href="">Customer</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">T&C</a>
            </li>
            <li>
              <a href="">Term of Use</a>
            </li>
            <li>
              <a href="">Track Orders</a>
            </li>
            <li>
              <a href="">Shipping</a>
            </li>
            <li>
              <a href="">Cancellation</a>
            </li>
            <li>
              <a href="">Returns</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
            <li>
              <a href="">Grievance Redressal</a>
            </li>
          </ul>
        </div>

        <div className="logos-and-icon ">
          <span>
            <strong className="logo-icon-title">
              EXPERIENCE MYNTRA APP ON MOBILE
            </strong>
          </span>
          <div className="footer-logos">
            <img className="playstore-img" src={playstore} alt="" />
            <img className="appStore-img " src={appStore} alt="" />
          </div>
          <span>
            <strong className="logo-icon-title">KEEP IN TOUCH</strong>
          </span>
          <div className="footer-icons">
            <RiFacebookBoxFill size={23} color="grey" />
            <FaTwitter size={23} color="grey" />
            <ImYoutube size={23} color="grey" />
            <RiInstagramFill size={23} color="grey" />
          </div>
        </div>
        <div className="guarantee-return">
          <div className="footer-guarantee">
            <img
              className="original-img"
              src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
            />
            <p>
              <strong style={{ color: "black" }}>100% ORIGINAL</strong>{" "}
              guarantee for all products at myntra.com
            </p>
          </div>
          <div className="footer-return">
            <img
              className="return-img"
              src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
            />
            <p>
              <strong style={{ color: "black" }}>Return within 14days</strong>{" "}
              of receiving your order
            </p>
          </div>
        </div>
      </div>

      <div className="horizontal-line"></div>

      <div className="copyright footer-font">
        <span>
          In case of concern,{" "}
          <a className="copyright-contact-us" href="">
            Contact Us
          </a>
        </span>
        <span>© 2025 www.myntra.com. All rights reserved.</span>
        <span>A Flipkart company</span>
      </div>

      <div className="horizontal-line"></div>

      <div className="office-address footer-font">
        <div className="footer-address ">
          <span style={{ marginBottom: "20px" }}>
            <strong>Registered Office Address</strong>
          </span>
          <span> Buildings Alyssa,</span>
          <span> Begonia and Clover situated in Embassy Tech Village,</span>
          <span> Outer Ring Road,</span>
          <span> Devarabeesanahalli Village,</span>
          <span> Varthur Hobli,</span>
          <span> Bengaluru - 560103, India</span>
        </div>
        <div className="footer-address-contact">
          <span>CIN: U72300KA2007PTC041799</span>
          <span>Telephone: +91-80-61561999</span>
        </div>
      </div>

      <div className="horizontal-line"></div>

      <div className="myntra-footer-info ">
        <p>
          <strong>ONLINE SHOPPING MADE EASY AT MYNTRA</strong>
        </p>
        <p style={{ marginBottom: "30px" }}>
          If you would like to experience the best of online shopping for men,
          women and kids in India, you are at the right place. Myntra is the
          ultimate destination for fashion and lifestyle, being host to a wide
          array of merchandise including clothing, footwear, accessories,
          jewellery, personal care products and more. It is time to redefine
          your style statement with our treasure-trove of trendy items. Our
          online store brings you the latest in designer products straight out
          of fashion houses. You can shop online at Myntra from the comfort of
          your home and get your favourites delivered right to your doorstep.
        </p>
        <p>
          <strong>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</strong>
        </p>

        <p style={{ marginBottom: "15px" }}>
          Be it clothing, footwear or accessories, Myntra offers you the ideal
          combination of fashion and functionality for men, women and kids. You
          will realise that the sky is the limit when it comes to the types of
          outfits that you can purchase for different occasions.
        </p>

        <ol style={{ marginLeft: "50px" }}>
          <li>
            <strong>Smart men’s clothing</strong> - At Myntra you will find
            myriad options in smart formal shirts and trousers, cool T-shirts
            and jeans, or kurta and pyjama combinations for men. Wear your
            attitude with printed T-shirts. Create the back-to-campus vibe with
            varsity T-shirts and distressed jeans. Be it gingham, buffalo, or
            window-pane style, checked shirts are unbeatably smart. Team them up
            with chinos, cuffed jeans or cropped trousers for a smart casual
            look. Opt for a stylish layered look with biker jackets. Head out in
            cloudy weather with courage in water-resistant jackets. Browse
            through our innerwear section to find supportive garments which
            would keep you confident in any outfit.
          </li>

          <li>
            <strong>Trendy women’s clothing</strong> - Online shopping for women
            at Myntra is a mood-elevating experience. Look hip and stay
            comfortable with chinos and printed shorts this summer. Look hot on
            your date dressed in a little black dress, or opt for red dresses
            for a sassy vibe. Striped dresses and T-shirts represent the classic
            spirit of nautical fashion. Choose your favourites from among
            Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum
            tops, to name a few. Team them up with skinny-fit jeans, skirts or
            palazzos. Kurtis and jeans make the perfect fusion-wear combination
            for the cool urbanite. Our grand sarees and lehenga-choli selections
            are perfect to make an impression at big social events such as
            weddings. Our salwar-kameez sets, kurtas and Patiala suits make
            comfortable options for regular wear.
          </li>

          <li>
            <strong>Fashionable footwear</strong> - While clothes maketh the
            man, the type of footwear you wear reflects your personality. We
            bring you an exhaustive lineup of options in casual shoes for men,
            such as sneakers and loafers. Make a power statement at work dressed
            in brogues and oxfords. Practice for your marathon with running
            shoes for men and women. Choose shoes for individual games such as
            tennis, football, basketball, and the like. Or step into the casual
            style and comfort offered by sandals, sliders, and flip-flops.
            Explore our lineup of fashionable footwear for ladies, including
            pumps, heeled boots, wedge-heels, and pencil-heels.
          </li>

          <li>
            <strong>Stylish accessories</strong> - Myntra is one of the best
            online shopping sites for classy accessories that perfectly
            complement your outfits. You can select smart analogue or digital
            watches and match them up with belts and ties. Pick up spacious
            bags, backpacks, and wallets to store your essentials in style.
            Whether you prefer minimal jewellery or grand and sparkling pieces,
            our online jewellery collection offers you many impressive options.
          </li>
          <li>
            <strong>Fun and frolic</strong> - Online shopping for kids at Myntra
            is a complete joy. Your little princess is going to love the wide
            variety of pretty dresses, ballerina shoes, headbands and clips.
            Delight your son by picking up sports shoes, superhero T-shirts,
            football jerseys and much more from our online store. Check out our
            lineup of toys with which you can create memories to cherish.
          </li>
        </ol>

        <p style={{ marginBottom: "30px" }}>
          Myntra is one of the best online shopping sites in India which could
          help transform your living spaces completely. Add colour and
          personality to your bedrooms with bed linen and curtains. Use smart
          tableware to impress your guest. Wall decor, clocks, photo frames and
          artificial plants are sure to breathe life into any corner of your
          home.
        </p>

        <p>
          <strong>MYNTRA APP</strong>
        </p>
        <p style={{ marginBottom: "30px" }}>
          Myntra, India’s no. 1 online fashion destination justifies its fashion
          relevance by bringing something new and chic to the table on the
          daily. Fashion trends seem to change at lightning speed, yet the
          Myntra shopping app has managed to keep up without any hiccups. In
          addition, Myntra has vowed to serve customers to the best of its
          ability by introducing its first-ever loyalty program, The Myntra
          Insider. Gain access to priority delivery, early sales, lucrative
          deals and other special perks on all your shopping with the Myntra
          app. Download the Myntra app on your Android or IOS device today and
          experience shopping like never before!
        </p>

        <p>
          <strong>HISTORY OF MYNTRA</strong>
        </p>
        <p style={{ marginBottom: "10px" }}>
          Becoming India’s no. 1 fashion destination is not an easy feat.
          Sincere efforts, digital enhancements and a team of dedicated
          personnel with an equally loyal customer base have made Myntra the
          online platform that it is today. The original B2B venture for
          personalized gifts was conceived in 2007 but transitioned into a
          full-fledged ecommerce giant within a span of just a few years. By
          2012, Myntra had introduced 350 Indian and international brands to its
          platform, and this has only grown in number each passing year. Today
          Myntra sits on top of the online fashion game with an astounding
          social media following, a loyalty program dedicated to its customers,
          and tempting, hard-to-say-no-to deals.
        </p>

        <p style={{ marginBottom: "30px" }}>
          The Myntra shopping app came into existence in the year 2015 to
          further encourage customers’ shopping sprees. Download the app on your
          Android or IOS device this very minute to experience fashion like
          never before
        </p>

        <p>
          <strong>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</strong>
        </p>

        <p style={{ marginBottom: "10px" }}>
          Another reason why Myntra is the best of all online stores is the
          complete convenience that it offers. You can view your favourite
          brands with price options for different products in one place. A
          user-friendly interface will guide you through your selection process.
          Comprehensive size charts, product information and high-resolution
          images help you make the best buying decisions. You also have the
          freedom to choose your payment options, be it card or
          cash-on-delivery. The 14-day returns policy gives you more power as a
          buyer. Additionally, the try-and-buy option for select products takes
          customer-friendliness to the next level.
        </p>

        <p style={{ marginBottom: "30px" }}>
          Enjoy the hassle-free experience as you shop comfortably from your
          home or your workplace. You can also shop for your friends, family and
          loved-ones and avail our gift services for special occasions.
        </p>
      </div>
    </footer>
  );
}

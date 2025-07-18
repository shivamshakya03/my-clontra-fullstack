import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import Navbar from "./NavComponent/Navbar.jsx";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="web-header">
      <Link to="/">
        <div className="main-logo">
          <img
            className="main-logo"
            src="/myntra-favicon.svg"
            alt=""
            srcSet=""
          />
        </div>
      </Link>

      <Navbar />

      <div className="header-search-bar">
        <input
          type="text"
          className="input-search-bar"
          placeholder="Search for products, brands and more"
        />
        <span className="input-search-icon">
          <IoIosSearch className="header-search-input-icon" />
        </span>
      </div>

      <div className="header-three-dot">
        <div className="header-profile header-three-dot-item">
          <span>
            <CgProfile className="header-three-dot-item-icon" />
          </span>
          <span>Profile</span>
        </div>
        <div className="header-wishlist header-three-dot-item">
          <span>
            <CiHeart className="header-three-dot-item-icon" />
          </span>
          <span>Wishlist</span>
        </div>
        <div className="header-bag header-three-dot-item">
          <span>
            <BsHandbag className="header-three-dot-item-icon" />
          </span>
          <span>Bag</span>
        </div>
      </div>
    </header>
  );
}

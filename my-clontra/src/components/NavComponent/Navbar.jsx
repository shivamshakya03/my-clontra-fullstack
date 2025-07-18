import Navitems from "./Navitems";
import React, { useEffect, useState } from "react";
import { getNavbarMenu } from "../../services/navbarService";

export default function Navbar({ categories, navData }) {
  const [menuData, setMenuData] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null); // e.g., "Men"

  useEffect(() => {
    async function loadMenu() {
      try {
        const data = await getNavbarMenu();
        setMenuData(data);
      } catch (err) {
        console.error("Navbar menu fetch failed:", err);
      }
    }

    loadMenu();
  }, []);

  return (
    <>
      <nav className="header-nav-link">
        {Object.keys(menuData).map((menuName) => {
          return <Navitems key={menuName} title={menuName} />;
        })}
      </nav>
    </>
  );
}

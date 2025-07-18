import { useEffect, useState } from "react";
import { fetchData } from "../../services/ServiceApi";
import { getMegadropdown } from "../../services/navbarService";
import MegaMenu from "./MegaMenu";
import { Link } from "react-router-dom";

export default function Navitems({ title }) {
  const [dropdown, setdropDown] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!title) return;

    async function loaddropdownMenu() {
      try {
        const response = await getMegadropdown(title.toLowerCase());
        setdropDown(response);
        console.log(response);
      } catch (err) {
        console.error("Drop Down Data Failed", err);
      }
    }

    loaddropdownMenu();
  }, [title]);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  return (
    <>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="nav-a-links">
          <Link to={`/menu/${title}`}>{title}</Link>
        </div>
        {isHovered && dropdown && (
          <MegaMenu categories={dropdown} title={title} />
        )}
      </div>
    </>
  );
}

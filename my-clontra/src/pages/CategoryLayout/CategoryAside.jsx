import { useEffect, useState } from "react";
import "./CategoryAside.css";

export default function CategoryAside() {
  const [categories, setcategories] = useState([]);
  const [brand, setbrand] = useState([]);

  useEffect(() => {
    async function fetchfilterproducts() {
      try {
        const res = await fetch(
          "http://localhost:2000/myclontra/api/product/filter"
        );
        const data = await res.json();

        // filter All Unique categories
        const categorySet = new Set();
        data.forEach((product) => {
          if (product.category) {
            categorySet.add(product.category);
          }
        });

        // filter All Unique brands
        const brandSet = new Set();
        data.forEach((product) => {
          if (product.brand) {
            brandSet.add(product.brand);
          }
        });

        setcategories([...categorySet]);
        setbrand([...brandSet]);
      } catch (err) {
        console.error("Fetch filtered Data:", err);
      }
    }
    fetchfilterproducts();
  }, []);

  return (
    <aside className="category-aside pretty-aside">
      <section className="aside-section">
        <h4 className="aside-title">CATEGORIES</h4>
        <ul className="aside-list">
          {categories.map((v, i) => (
            <li key={i} className="aside-list-item">
              {v}
            </li>
          ))}
        </ul>
      </section>
      <section className="aside-section">
        <h4 className="aside-title">BRAND</h4>
        <ul className="aside-list">
          {brand.map((v, i) => (
            <li key={i} className="aside-list-item">
              {v}
            </li>
          ))}
        </ul>
      </section>
      <section className="aside-section">
        <h4 className="aside-title">PRICE</h4>
        {/* Add price filter UI here if needed */}
      </section>
      <section className="aside-section">
        <h4 className="aside-title">COLOR</h4>
        {/* Add color filter UI here if needed */}
      </section>
    </aside>
  );
}

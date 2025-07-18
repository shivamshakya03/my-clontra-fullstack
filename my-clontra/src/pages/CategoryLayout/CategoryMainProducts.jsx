import React, { useEffect, useState } from "react";
import Productpage from "../Productpage";
import { useParams } from "react-router-dom";

export default function CategoryMainProducts() {
  const [products, setProducts] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch(
          `http://localhost:2000/myclontra/api/product?category=${
            type ? type.toLowerCase() : ""
          }`
        );
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error While Fetching Products: ", err);
      }
    }
    loadProducts();
  }, [type]);

  return (
    <section className="main-products-container">
      {products.length > 0 ? (
        products.map((product) => (
          <Productpage product={product} key={product.id} />
        ))
      ) : (
        <div>No products found.</div>
      )}
    </section>
  );
}

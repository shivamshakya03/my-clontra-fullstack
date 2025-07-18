import React from "react";
import sampleShirt from "../assets/images/sample-shirt.jpg";

export default function Productpage({ product }) {
  // const discountedPrice = {product.price} - 1000;
  if (!product) return null;
  return (
    <div className="product-card">
      <img
        src={sampleShirt}
        alt=""
        loading="lazy"
        className="product-card-img"
      />

      <div className="product-info">
        <span className="brand-title">{product.brand}</span>
        <span className="category-info">
          {product.category} {product.type}
        </span>
        <div className="product-card-price">
          <span className="discount-price">Rs. {product.price}</span>
          <span className="original-price">Rs. 54235</span>
          <span className="discount-percentage">(60% OFF)</span>
        </div>
      </div>
    </div>
  );
}

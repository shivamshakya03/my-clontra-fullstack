import React from "react";
import CategoryHeader from "./CategoryLayout/CategoryHeader";
import CategoryAside from "./CategoryLayout/CategoryAside";
import CategoryMainProducts from "./CategoryLayout/CategoryMainProducts";

export default function CategoryPage() {
  return (
    <>
      <div className="category-layout">
        <CategoryHeader />
        <div className="product-aside-main-layout">
          <CategoryAside />
          <CategoryMainProducts />
        </div>
      </div>
    </>
  );
}

import React from "react";
import { useStore } from "../hooks-store/store";
import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
  const state = useStore()[0]; //[0] refers to state other element dispatch+
  // console.log(state); found a naming error here
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;

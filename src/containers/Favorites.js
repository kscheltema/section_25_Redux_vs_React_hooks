import React, { useContext } from "react";
import { useStore } from "../hooks-store/store";
import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

//useContext is best for low frequency state changes like login and log out
//not cart management and favorite and unfavorite
const Favorites = (props) => {
  const state = useStore()[0];
  const favoriteProducts = state.products.filter((p) => p.isFavorite);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;

import React from "react";
import { useStore } from "../../hooks-store/store";
import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = React.memo((props) => {
  //react memo helps react to re-render if props changes
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    // toggleFav(props.id);
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;

//context api more efficient for low frequency updates
//custom hooks to save every byte
//alternative redux with a bit larger load

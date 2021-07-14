import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productID) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productID);
      // console.log(prodIndex); looking for naming error
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      // console.log(newFavStatus);
      const updatedProducts = [...curState.products];
      // console.log("before", updatedProducts);
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      // console.log("after", updatedProducts);
      return { products: updatedProducts };
    },
  };

  initStore(actions, {
    products: [
      {
        id: "p1",
        title: "Red Scarf",
        description: "A pretty red scarf.",
        isFavorite: false,
      },
      {
        id: "p2",
        title: "Blue T-Shirt",
        description: "A pretty blue t-shirt.",
        isFavorite: false,
      },
      {
        id: "p3",
        title: "Green Trousers",
        description: "A pair of lightly green trousers.",
        isFavorite: false,
      },
      {
        id: "p4",
        title: "Orange Hat",
        description: "Street style! An orange hat.",
        isFavorite: false,
      },
    ],
  });
};

export default configureStore;

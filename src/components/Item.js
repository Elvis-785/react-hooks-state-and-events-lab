import React, { useState } from "react";

function Item({ name, category }) {
  // Create a state variable to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Function to handle the click event on the button
  function handleAddToCart() {
    setIsInCart((isInCart) => !isInCart);
  }

  // Set className based on isInCart state
  const itemClass = isInCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

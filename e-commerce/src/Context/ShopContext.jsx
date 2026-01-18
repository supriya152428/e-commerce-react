import { createContext, useState } from "react";
import all_product from "../assets/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const addToWishlist = (id) => {
    setWishlist((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item !== id));
  };

  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : undefined,
    }));
  };

  return (
    <ShopContext.Provider
      value={{
        all_product,
        wishlist,
        cartItems,
        addToWishlist,
        removeFromWishlist,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

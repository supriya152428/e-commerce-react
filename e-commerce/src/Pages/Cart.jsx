import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  // Filter products that are in the cart
  const productsInCart = all_product.filter(item => cartItems[item.id] > 0);

  // Calculate total price
  const totalPrice = productsInCart.reduce(
    (total, item) => total + item.new_price * cartItems[item.id],
    0
  );

  if (productsInCart.length === 0) {
    return <p className="text-center mt-20 text-xl">Your cart is empty 😔</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {productsInCart.map(item => (
        <div key={item.id} className="flex gap-6 items-center border-b py-4">
          <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
          <div className="flex-1">
            <p className="font-semibold">{item.name}</p>
            <p className="text-gray-500">Price: ${item.new_price}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span>{cartItems[item.id]}</span>
              <button
                onClick={() => addToCart(item.id)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <p className="font-semibold">${item.new_price * cartItems[item.id]}</p>
        </div>
      ))}

      <div className="flex justify-end mt-6">
        <p className="text-xl font-bold">Total: ${totalPrice}</p>
      </div>

      <div className="flex justify-end mt-4">
        <Link to="/">
          <button className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

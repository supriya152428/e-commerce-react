import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

const Wishlist = () => {
  const {
    wishlist = [],
    removeFromWishlist,
    addToCart,
    all_product = [],
  } = useContext(ShopContext);

  // Handle loading state
  if (!all_product || all_product.length === 0) {
    return (
      <div className="mt-20 text-center text-gray-500 text-xl">
        Loading wishlist...
      </div>
    );
  }

  // Match wishlist IDs with products (safe for string/number IDs)
  const wishlistProducts = all_product.filter((item) =>
    wishlist.includes(Number(item.id))
  );

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">
        My Wishlist ❤️
      </h1>

      {/* Empty State */}
      {wishlistProducts.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-xl mb-2">
            Your wishlist is empty 😔
          </p>
          <p className="text-gray-500">
            Tap ❤️ on products to save them
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlistProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="w-full h-44 flex items-center justify-center bg-gray-100 rounded-lg mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Product Info */}
              <h2 className="font-semibold text-lg text-gray-800">
                {item.name}
              </h2>

              <p className="text-lg font-bold my-2">
                ₹{item.new_price}
                <span className="line-through text-gray-400 ml-2 text-sm">
                  ₹{item.old_price}
                </span>
              </p>

              {/* Actions */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="flex items-center gap-2 text-red-500 hover:scale-105 transition"
                >
                  <FaTrash /> Remove
                </button>

                <button
                  onClick={() => {
                    addToCart(item.id);
                    removeFromWishlist(item.id);
                  }}
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FaHeart } from "react-icons/fa";

const ProductDisplay = ({ product }) => {
  const { addToCart, wishlist, addToWishlist, removeFromWishlist } =
    useContext(ShopContext);

  const isWishlisted = wishlist.includes(product.id);

  // State for selected size
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="flex flex-col md:flex-row gap-10 p-10">
      
      {/* LEFT: Image */}
      <img src={product.image} className="w-full md:w-72 object-contain" />

      {/* RIGHT: Details */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <p className="text-red-500 text-xl">₹{product.new_price}</p>

        {/* Ratings */}
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <span key={i}>{i < product.rating ? "★" : "☆"}</span>
          ))}
        </div>

        {/* Size Selection */}
        <div className="mt-4">
          <p className="text-gray-500 font-semibold mb-2">Sizes:</p>
          <div className="flex gap-2">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`border px-3 py-1 rounded text-sm ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => addToCart(product.id)}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            ADD TO CART
          </button>

          <button
            onClick={() =>
              isWishlisted
                ? removeFromWishlist(product.id)
                : addToWishlist(product.id)
            }
            className="border px-4 py-3 rounded hover:bg-gray-100"
          >
            <FaHeart
              className={`text-xl ${
                isWishlisted ? "text-red-500" : "text-gray-400"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

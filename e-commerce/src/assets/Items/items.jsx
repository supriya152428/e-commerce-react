import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FaHeart } from "react-icons/fa";

const Item = ({ id, image, name, new_price, old_price }) => {
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(ShopContext);

  const isWishlisted = wishlist.includes(id);

  const handleWishlist = (e) => {
    e.preventDefault(); // ❗ stops page navigation
    e.stopPropagation();

    isWishlisted ? removeFromWishlist(id) : addToWishlist(id);
  };

  return (
    <div className="w-full sm:w-72 relative hover:scale-105 transition duration-300">

      {/* ❤️ Wishlist Icon */}
      <button
        onClick={handleWishlist}
        className="absolute top-3 right-3 z-10"
      >
        <FaHeart
          className={`text-xl ${
            isWishlisted ? "text-red-500" : "text-gray-300"
          }`}
        />
      </button>

      <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-contain"
        />
        <p className="my-2">{name}</p>
      </Link>

      <div className="flex gap-5">
        <div className="text-gray-700 text-lg font-semibold">
          ₹{new_price}
        </div>
        <div className="text-gray-400 text-lg line-through">
          ₹{old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
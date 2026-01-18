import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Assets/logo.png";
import cart_icon from "../../assets/Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { FaHeart, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const [open, setOpen] = useState(false);

  const { cartItems = {}, wishlist = [] } = useContext(ShopContext);

  const totalCartItems = Object.values(cartItems).reduce(
    (sum, qty) => sum + qty,
    0
  );

  const totalWishlistItems = wishlist.length;

  return (
    <div className="w-full shadow sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10" />
          <h1 className="text-xl font-bold">SHOPPER</h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8">
          {["Shop", "Men", "Women", "Kids"].map((item) => (
            <li
              key={item}
              onClick={() => setMenu(item)}
              className="relative cursor-pointer"
            >
              <Link
                to={item === "Shop" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-red-500"
              >
                {item}
              </Link>

              {menu === item && (
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 rounded"></span>
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-5">

          {/* LOGIN */}
          <Link to="/login">
            <button className="border px-4 py-1.5 rounded hover:bg-black hover:text-white transition">
              Login
            </button>
          </Link>

          {/* WISHLIST */}
          <Link to="/wishlist" className="relative text-xl">
            <FaHeart />
            {totalWishlistItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {totalWishlistItems}
              </span>
            )}
          </Link>

          {/* CART */}
          <Link to="/cart" className="relative">
            <img src={cart_icon} alt="cart" className="w-7" />
            {totalCartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {totalCartItems}
              </span>
            )}
          </Link>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            <FaBars />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          {["Shop", "Men", "Women", "Kids"].map((item) => (
            <Link
              key={item}
              to={item === "Shop" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => {
                setMenu(item);
                setOpen(false);
              }}
              className="border-b pb-2"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

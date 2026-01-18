import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Shopcategory from "./Pages/Shopcategory";
import Product from "./Pages/Product";
import Loginsignup from "./Pages/Loginsignup";
import Footer from "./Footer/Footer";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist"
import men_banner from "./assets/Assets/banner_mens.png";
import women_banner from "./assets/Assets/banner_women.png";
import kid_banner from "./assets/Assets/banner_kids.png";

const App = () => {
  return (
    <BrowserRouter>
     <div className="bg-grey-900 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<Shopcategory banner={men_banner} category="men" />}
        />
        <Route
          path="/women"
          element={<Shopcategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<Shopcategory banner={kid_banner} category="kid" />}
        />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Loginsignup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist/>} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

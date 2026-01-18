import { Link } from "react-router-dom";
import men from "../../assets/Assets/banner_mens.png";
import women from "../../assets/Assets/banner_women.png";
import kids from "../../assets/Assets/banner_kids.png";

const Categories = () => {
  return (
    <div className="px-6 md:px-16 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* MEN */}
      <Link to="/men">
        <div className="relative cursor-pointer group overflow-hidden rounded-lg">
          <img
            src={men}
            alt="men"
            className="w-full h-[250px] object-cover group-hover:scale-110 transition"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">MEN</h2>
          </div>
        </div>
      </Link>

      {/* WOMEN */}
      <Link to="/women">
        <div className="relative cursor-pointer group overflow-hidden rounded-lg">
          <img
            src={women}
            alt="women"
            className="w-full h-[250px] object-cover group-hover:scale-110 transition"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">WOMEN</h2>
          </div>
        </div>
      </Link>

      {/* KIDS */}
      <Link to="/kids">
        <div className="relative cursor-pointer group overflow-hidden rounded-lg">
          <img
            src={kids}
            alt="kids"
            className="w-full h-[250px] object-cover group-hover:scale-110 transition"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">KIDS</h2>
          </div>
        </div>
      </Link>

    </div>
  );
};

export default Categories;

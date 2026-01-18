import { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../assets/Items/items";

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sort, setSort] = useState("");

  const filteredProducts = all_product
    .filter(item => item.category === props.category)
    .sort((a, b) => {
      if (sort === "low") return a.new_price - b.new_price;
      if (sort === "high") return b.new_price - a.new_price;
      return 0;
    });

  return (
    <>
      <img src={props.banner} className="mx-auto my-8 w-4/5" />

      <div className="flex justify-between mx-20">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="border px-4 py-2"
        >
          <option value="">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-4 gap-6 mx-10 my-10">
        {filteredProducts.map(item => (
          <Item key={item.id} {...item} />  
        ))}
      </div>
    </>
  );
};

export default Shopcategory;
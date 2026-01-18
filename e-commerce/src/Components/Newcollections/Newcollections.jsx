import Item from "../../assets/Items/items";
import new_collection from "../../assets/Assets/new_collections";

const Newcollections = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 my-20">
      
      {/* Heading */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700">
          NEW COLLECTIONS
        </h1>
        <hr className="w-32 h-1 bg-gray-700 rounded" />
      </div>

      {/* Products Grid */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-8
        justify-items-center
      ">
        {new_collection.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

    </div>
  );
};

export default Newcollections;

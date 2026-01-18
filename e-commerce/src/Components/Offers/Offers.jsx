import exclusive_image from "../../assets/Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="flex items-center justify-between px-20 py-16 bg-pink-100">
      <div>
        <h1 className="text-4xl font-bold">Exclusive Offers</h1>
        <button className="mt-4 bg-red-500 text-white px-6 py-3">
          Check Now
        </button>
      </div>

      <img src={exclusive_image} className="w-80" />
    </div>
  );
};

export default Offers;
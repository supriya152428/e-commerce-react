import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/popular";
import Offers from "../Components/offers/Offers";
import Newcollections from "../Components/Newcollections/Newcollections";
import Newsletter from "../Components/Newsletter/Newsletter";
import Categories from "../Components/Categories/categories";


const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <Newcollections />
      <Newsletter />
      <Categories/>
    </>
  );
};

export default Shop;
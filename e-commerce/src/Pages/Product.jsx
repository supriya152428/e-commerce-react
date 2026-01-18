import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) return <p className="text-center">Product not found</p>;

  return (
    <>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
    </>
  );
};

export default Product;
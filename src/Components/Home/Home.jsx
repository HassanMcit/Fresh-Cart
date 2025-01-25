import { useEffect, useState } from "react";
import DisplayProductHome from "../DisplayProductHome/DisplayProductHome";
import axios from "axios";
import Loading from "../Loading/Loading";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getProduct() {
    try {
      const {data:{data}} = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products`
      );
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
    {isLoading ? <Loading/> : (<div className="container py-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
            {products.map(e => <DisplayProductHome
             key={e.id}
              img={e.imageCover} 
              category={e.category.name} 
              title={e.title} 
              price={e.price}
              ratingsAverage={e.ratingsAverage}/>)}
        </div>
      </div>)}
    </>
  );
}

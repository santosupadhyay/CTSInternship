import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
// import ProductCard from "../components/ui/ProductCard";

const ProductCard = React.lazy(() => import("../components/ui/ProductCard"));

const API_URL = "https://fakestoreapi.in/api/products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-bold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      {products.length ===0 && !loading && (
        <p className="text-center text-gray-500">No products available.</p>
      )}

      <h1 className="text-2xl font-bold my-6 text-center">Our Products</h1>
      <div
        className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4"
      >
        {products.map((item) => (
          <Suspense key={item.id} fallback={<h2>Loading</h2>}>
            <ProductCard
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              brand={item.brand}
              color={item.color}
              category={item.category}
              discount={item.discount}
              model={item.model}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Rincian = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch product details by ID
  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      const data = response.data;
      setProduct(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load product data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {product ? (
        <>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>Price: ${product.price}</h3>
          <h4>Category: {product.category}</h4>
          <h4>
            Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)
          </h4>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Rincian;

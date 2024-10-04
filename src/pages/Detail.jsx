import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const Detail = () => {
  const { id } = useParams();
  const [resto, setProduct] = useState(null);

  const ambilProduct = async () => {
    try {
      const response = await axios.get(`https://restaurant-api.dicoding.dev/detail/${id}`);
      const data = await response.data;
      setProduct(data.restaurant);
    } catch (error) {
      console.error("Error fetching restaurant details", error);
    }
  };

  useEffect(() => {
    ambilProduct();
  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4"> {/* Memusatkan konten secara vertikal */}
      {resto ? (
        <div className="w-full max-w-4xl">
          <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">{resto.name}</h1>
            <img
              className="w-full h-auto object-cover mb-8" // Gambar full lebar
              src={`https://restaurant-api.dicoding.dev/images/large/${resto.pictureId}`}
              alt={resto.name}
            />
          </div>
          <div className="text-center">
            <p className="text-lg mb-4">{resto.description}</p>
            <p className="text-md mb-2">City: {resto.city}</p>
            <p className="text-md mb-2">Rating: {resto.rating}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Negara from './negara/Negara';
import NegaraView from './negara/Negaraview';



export const Rinciann = () => {
        const { id } = useParams();
      
        const [product, setProduct] = useState(null);
      
        const ambilProduct = async () => {
          try {
            const response = await axios.get(
              `https://freetestapi.com/api/v1/countries/${id}`
            );
            setProduct(response.data);
          } catch (error) {
            console.error("Error fetching the product data", error);
          }
        };
      
        useEffect(() => {
          if (id) {
            ambilProduct();
          }
        }, [id]);
      
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
              padding: "20px",
            }}
          >
            {product ? (
              <>
               
               < h1 className="text-5xl font-bold">{product.name}</h1>

                <img src={product.flag} alt={product.name}></img>
                   <p className="text-3xl">{product.currency}</p> 
                
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        );
      };
      
      export default Rinciann;
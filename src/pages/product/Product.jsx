import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductView from "./ProductView";

const Product = () => {
  const [products, setProducts] = useState(); 
  const [searchResults, setSearchResults] = useState(); 
  const [searchParams, setSearchParams] = useSearchParams(); 
  
  const searchQuery = searchParams.get("search"); 
  const fetchProducts = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/`);
    setProducts(response.data);
  };

  const fetchSearchResults = async (query) => {
    if (query) {
      const response = await axios.get("https://fakestoreapi.com/products/category/${query}");
      setSearchResults(response.data);
    } else {
      setSearchResults(null); 
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults(searchQuery); 
    } else {
      setSearchResults(null); 
    }
  }, [searchQuery]); 

  const updateSearch = (input) => {
    setSearchParams({ search: input });
  };

  const filteredResults = searchQuery ? searchResults : products;

  return (
    <ProductView 
      searchQuery={searchQuery}
      searchResults={searchResults}
      filteredResults={filteredResults}
      updateSearch={updateSearch}
      products={products}
    />
  );
};

export default Product;
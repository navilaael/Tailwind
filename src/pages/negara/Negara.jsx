import axios from 'axios';
import React, { useCallback, useReducer, useState, useEffect } from 'react'; // Tambahkan useEffect di sini
import Negaraview from './Negaraview';
import { useSearchParams } from 'react-router-dom';

const nilaiDefault = {
  data: [],
  filterData: [],
  Loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BERHASIL":
      return {
        ...state,
        data: action.payload,
        filterData: action.payload,
        Loading: false,
      };
    case "SET_FILTER":
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      throw new Error("error di case");
  }
};

const Negara = () => {
  const [state, dispatch] = useReducer(reducer, nilaiDefault);
  const [loading, setLoading] = useState(true);
  const [cari, setCari] = useSearchParams();
  const cariProduct = cari.get("cariproduct");

  const ambilProduct = async () => {
    try {
      const response = await axios.get(
        "https://freetestapi.com/api/v1/countries"
      );
      const data = await response.data;
      dispatch({ type: "FETCH_BERHASIL", payload: data });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the product list", error);
    }
  };

  const ambilHasilCari = async (query) => {
    try {
      const response = await axios.get(
        `https://freetestapi.com/api/v1/countries/search?q=${query}`
      );
      const data = await response.data;
      dispatch({ type: "SET_FILTER", payload: data });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };

  const ubahCari = useCallback(
    async (input) => {
      setCari({ cariproduct: input });
    },
    [cariProduct]
  );

  // Perbaikan pada penulisan useEffect
  useEffect(() => {
    if (cariProduct) {
      ambilHasilCari(cariProduct);
    } else {
      ambilProduct();
    }
  }, [cariProduct]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const hasilFilter = cariProduct ? state.filterData : state.data;

  console.log(state);

  return (
    <Negaraview
      hasilcari={state.filterData}
      ubahCari={ubahCari}
      cariProduct={cariProduct}
      hasilFilter={hasilFilter}
    />
  );
};

export default Negara;

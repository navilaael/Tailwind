import React from "react";
import { Link } from "react-router-dom";

const ProductView = ({
  searchQuery,
  updateSearch,
  searchResults,
  filteredResults,
  products,
}) => {
  return (
    <div className="">
      {/* Search Input */}
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search Products"
          value={searchQuery || ""}
          onChange={(input) => updateSearch(input.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <p>
        Results for: {searchQuery || "All Products"}, Found:{" "}
        {searchResults?.length || products?.length}
      </p>

      <div className="grid grid-cols-3 gap-4">
        {filteredResults?.map((product) => (
          <div className="card bg-base-100 w-96 shadow-xl" key={product.id}>
            <figure>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="line-clamp-3">{product.description}</p>
              <p className="font-bold">${product.price}</p>
              <div className="card-actions justify-end">
                <Link to={"/Rinciann/" + product.flag} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductView;
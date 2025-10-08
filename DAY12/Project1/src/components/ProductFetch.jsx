import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductFetch() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch products from API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);

        // Extract unique categories
        const uniqueCategories = [...new Set(data.map(p => p.category))];
        setCategories(uniqueCategories);
      } catch {
        console.log("Fetch failed");
      }
    }
    fetchData();
  }, []);

  // Handle category filter
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === category));
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product Gallery</h2>

      {/* Dropdown Filter */}
      <div className="d-flex justify-content-center mb-4">
        <select
          className="form-select w-auto mb-4"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          aria-label="Select a category"
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "250px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">
                  {product.description.substring(0, 80)}...
                </p>
                <div className="mt-auto">
                  <p className="fw-bold">💲{product.price}</p>
                  <button className="btn btn-primary w-100">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFetch;

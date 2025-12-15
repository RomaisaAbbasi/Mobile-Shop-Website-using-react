import { useState } from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();

  // Filter products by search text
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>All Products</h1>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search phones..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "30px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      {/* Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {filteredProducts.length === 0 && (
          <p>No products found</p>
        )}

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />

            <h3>{product.title}</h3>
            <p style={{ fontWeight: "bold" }}>${product.price}</p>

            <div style={{ marginTop: "15px" }}>
              <Link to={`/product/${product.id}`}>
                <button
                  style={{
                    marginRight: "10px",
                    padding: "8px 12px",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </Link>

              <button
                onClick={() => {
                  addToCart(product);
                  alert("Item added to cart");
                }}
                style={{
                  padding: "8px 12px",
                  background: "#0070f3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

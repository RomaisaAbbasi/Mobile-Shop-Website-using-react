import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Home() {
  // Pick first 3 products as featured
  const featured = products.slice(0, 3);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "#f5f5f7",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px", fontWeight: 600 }}>
          Welcome to Romaisa E-Store
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px", color: "#666" }}>
          Explore the latest smartphones from top brands.
        </p>
        <Link
          to="/products"
          style={{
            padding: "12px 30px",
            background: "#0070f3",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px", textAlign: "center" }}>
          Featured Phones
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {featured.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                background: "#fff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: "200px", objectFit: "contain" }}
              />
              <h3 style={{ fontSize: "20px", margin: "15px 0" }}>{product.title}</h3>
              <p style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "15px" }}>
                ${product.price}
              </p>
              <Link
                to={`/product/${product.id}`}
                style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  background: "#0070f3",
                  color: "#fff",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

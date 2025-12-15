import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <h1 style={{ padding: "40px" }}>Product not found</h1>;

  const handleAddToCart = () => {
    addToCart(product); // default quantity = 1
    alert(`${product.title} added to cart!`);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "300px", objectFit: "contain" }}
      />
      <h1 style={{ fontSize: "32px", margin: "20px 0" }}>{product.title}</h1>
      <p style={{ fontSize: "18px", marginBottom: "15px" }}>{product.description}</p>
      <p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "20px" }}>
        ${product.price}
      </p>
      <button
        style={{
          padding: "10px 20px",
          background: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

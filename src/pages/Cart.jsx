import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Your cart is empty
      </h2>
    );
  }

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 0",
            borderBottom: "1px solid #ddd",
          }}
        >
          <img src={item.image} style={{ width: "100px" }} />

          <div style={{ flex: 1, marginLeft: "20px" }}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>

          <div>
            <button onClick={() =>
              updateQuantity(item.id, Math.max(1, item.quantity - 1))
            }>
              -
            </button>
            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
            <button onClick={() =>
              updateQuantity(item.id, item.quantity + 1)
            }>
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              background: "green",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              marginLeft: "21px",
              borderRadius: "5px",
              cursor: "pointer",
              
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <h2 style={{ textAlign: "right"}}>Total: ${totalPrice}</h2>

      <div style={{ textAlign: "right" }}>
        <Link to="/contact">
          <button
            style={{
              padding: "11px 24px",
              background: "pink",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
               cursor: "pointer",
             
            }}
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

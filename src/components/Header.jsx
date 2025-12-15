import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 40px",
        borderBottom: "1px solid #e5e5e5",
        position: "sticky",
        top: 0,
        background: "#fff",
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "35px", height: "35px", objectFit: "contain" }}
        />
        <h2 style={{ margin: 0, fontWeight: "500" }}>E-Store</h2>
      </div>

      <nav style={{ display: "flex", gap: "25px", fontSize: "16px" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;

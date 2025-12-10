// src/components/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",

        // ⭐⭐ PUT YOUR BACKGROUND IMAGE URL HERE ⭐⭐
        backgroundImage: "url('data:image/jpeg;base64,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')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <div
        style={{
          background: "rgba(1, 2, 0, 0.5)",
          padding: "30px 40px",
          borderRadius: "15px",
          maxWidth: "700px",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          The Epoch Elegance
        </h1>

        <p style={{ fontSize: "20px", lineHeight: "1.6", marginBottom: "30px" }}>
          Discover curated antique collections that bring history to life.  
          From Roman artifacts to Victorian jewelry — find a timeless piece to cherish.
        </p>

        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <Link
            to="/products"
            style={{
              background: "linear-gradient(45deg, #dc143c, #ff6b6b)",
              color: "white",
              padding: "15px 35px",
              fontSize: "18px",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 8px 20px rgba(220, 20, 60, 0.4)",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.transform = "translateY(-3px)"}
            onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
          >
            🛍️ Explore Products
          </Link>
          
          <Link
            to="/about"
            style={{
              background: "transparent",
              color: "white",
              padding: "15px 35px",
              fontSize: "18px",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "bold",
              border: "2px solid #ff6b6b",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.target.style.background = "#ff6b6b";
              e.target.style.transform = "translateY(-3px)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            ℹ️ Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

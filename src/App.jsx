import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Orders from "./components/Orders";

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Check if user is logged in
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    // Load cart items
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    
    // Load orders
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setCartItems([]);
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    let newCartItems;
    
    if (existingItem) {
      newCartItems = cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCartItems = [...cartItems, { ...product, quantity: 1 }];
    }
    
    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    const newCartItems = cartItems.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    );
    
    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
  };

  const removeFromCart = (productId) => {
    const newCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const addOrder = (order) => {
    console.log('Adding order:', order);
    console.log('Current orders:', orders);
    const newOrders = [...orders, order];
    console.log('New orders array:', newOrders);
    setOrders(newOrders);
    localStorage.setItem('orders', JSON.stringify(newOrders));
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          background: #ffeaea;
          font-family: 'Segoe UI', sans-serif;
        }

        header {
          background: linear-gradient(135deg, #8b0000, #dc143c);
          padding: 20px;
          box-shadow: 0 4px 20px rgba(139,0,0,0.3);
        }
        
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 28px;
          color: #ff6b6b;
          letter-spacing: 2px;
          font-weight: 800;
          text-decoration: none;
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          from { text-shadow: 0 0 5px #ff6b6b; }
          to { text-shadow: 0 0 20px #ff6b6b, 0 0 30px #ff6b6b; }
        }
        
        .nav-links {
          display: flex;
          gap: 15px;
          align-items: center;
        }
        
        .nav-btn {
          background: linear-gradient(45deg, #dc143c, #ff6b6b);
          color: white !important;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .nav-btn:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        .nav-btn:hover:before {
          left: 100%;
        }
        
        .nav-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(220, 20, 60, 0.4);
          color: white !important;
        }
        
        .user-section {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .cart-link {
          position: relative;
          color: #d4a056;
          text-decoration: none;
          font-weight: 600;
        }
        
        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #dc3545;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logout-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 8px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
        }
        
        .logout-btn:hover {
          background: #c82333;
        }

        footer {
          margin-top: 40px;
          background: linear-gradient(135deg, #8b0000, #dc143c);
          padding: 25px;
          color: #ff6b6b;
          text-align: center;
          font-size: 16px;
          letter-spacing: 1px;
        }
      `}</style>

      <header>
        <div className="header-content">
          <Link to="/" className="logo">
            THE TIMELESS TREASURES
          </Link>
          
          <nav className="nav-links">
            <Link to="/" className="nav-btn">🏠 Home</Link>
            <Link to="/products" className="nav-btn">🛍️ Products</Link>
            <Link to="/about" className="nav-btn">ℹ️ About</Link>
            <Link to="/contact" className="nav-btn">📞 Contact</Link>
          </nav>
          
          <div className="user-section">
            {user ? (
              <>
                <Link to="/cart" className="nav-btn">
                  🛒 Cart
                  {getCartItemCount() > 0 && (
                    <span className="cart-count">{getCartItemCount()}</span>
                  )}
                </Link>
                <Link to="/orders" className="nav-btn">📦 Orders</Link>
                <span style={{color: "white", fontWeight: "600"}}>Hi, {user.name}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="nav-btn">🔐 Login/Signup</Link>
            )}
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products user={user} addToCart={addToCart} addOrder={addOrder} />} />
          <Route path="/product/:id" element={<Product user={user} addToCart={addToCart} addOrder={addOrder} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} user={user} addOrder={addOrder} />} />
          <Route path="/orders" element={<Orders user={user} orders={orders} />} />
        </Routes>
      </main>

      <footer>
        © 2025 The Epoch Elegance — Curated Antique Collections
      </footer>
    </>
  );
}

export default App;

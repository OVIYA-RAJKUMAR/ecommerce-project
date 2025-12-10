import React, { useState } from 'react';
import Modal from './Modal';

export default function Cart({ cartItems, updateQuantity, removeFromCart, user, addOrder }) {
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '', type: 'info' });

  const showModal = (title, message, type = 'info') => {
    setModal({ isOpen: true, title, message, type });
  };

  const closeModal = () => {
    setModal({ isOpen: false, title: '', message: '', type: 'info' });
  };
  if (!user) {
    return (
      <div style={{ padding: "40px", textAlign: "center", background: "#f7efe5", minHeight: "100vh" }}>
        <h2>Please login to view your cart</h2>
      </div>
    );
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showModal('Empty Cart', 'Your cart is empty!', 'warning');
      return;
    }
    
    const newOrder = {
      id: Date.now(),
      items: [...cartItems],
      total: getTotalPrice(),
      date: new Date().toLocaleDateString(),
      status: 'Processing'
    };
    
    addOrder(newOrder);
    
    // Clear cart
    cartItems.forEach(item => removeFromCart(item.id));
    
    showModal('Order Placed!', 'Order placed successfully! Check your orders page.', 'success');
  };

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "auto", background: "#f7efe5", minHeight: "100vh" }}>
      <style>{`
        .cart-container {
          background: rgba(255,255,255,0.9);
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .cart-title {
          font-size: 32px;
          color: #3b2f2f;
          margin-bottom: 30px;
          font-weight: 800;
        }
        
        .cart-item {
          display: flex;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #e8d3c5;
          gap: 20px;
        }
        
        .item-image {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
        }
        
        .item-details {
          flex: 1;
        }
        
        .item-name {
          font-size: 18px;
          font-weight: 600;
          color: #3b2f2f;
          margin-bottom: 5px;
        }
        
        .item-price {
          font-size: 16px;
          color: #d4a056;
          font-weight: 600;
        }
        
        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .qty-btn {
          background: #d4a056;
          color: white;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          font-weight: bold;
        }
        
        .qty-btn:hover {
          background: #c99742;
        }
        
        .quantity {
          font-weight: 600;
          min-width: 30px;
          text-align: center;
        }
        
        .remove-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 8px 15px;
          border-radius: 5px;
          cursor: pointer;
        }
        
        .remove-btn:hover {
          background: #c82333;
        }
        
        .cart-summary {
          margin-top: 30px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
          text-align: right;
        }
        
        .total-price {
          font-size: 24px;
          font-weight: 800;
          color: #3b2f2f;
          margin-bottom: 20px;
        }
        
        .checkout-btn {
          background: #28a745;
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
        }
        
        .checkout-btn:hover {
          background: #218838;
        }
        
        .empty-cart {
          text-align: center;
          padding: 60px 20px;
          color: #5f4b4b;
        }
      `}</style>
      
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add some beautiful antiques to your cart!</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="item-image" />
                
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">₹{item.price}</div>
                </div>
                
                <div className="quantity-controls">
                  <button 
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            
            <div className="cart-summary">
              <div className="total-price">
                Total: ₹{getTotalPrice().toLocaleString()}
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      
      <Modal 
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
    </div>
  );
}
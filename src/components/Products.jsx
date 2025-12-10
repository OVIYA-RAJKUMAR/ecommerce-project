import React, { useState } from "react";
import { products } from "../utils/api";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";

export default function Products({ user, addToCart, addOrder }) {
  const navigate = useNavigate();
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '', type: 'info' });

  const showModal = (title, message, type = 'info') => {
    setModal({ isOpen: true, title, message, type });
  };

  const closeModal = () => {
    setModal({ isOpen: false, title: '', message: '', type: 'info' });
  };

  const handleAddToCart = (product) => {
    if (!user) {
      showModal('Login Required', 'Please login first to add items to cart', 'warning');
      setTimeout(() => {
        closeModal();
        navigate('/login');
      }, 2000);
      return;
    }
    addToCart(product);
    showModal('Success!', 'Product added to cart!', 'success');
  };

  const handleBuyNow = (product) => {
    if (!user) {
      showModal('Login Required', 'Please login first to make a purchase', 'warning');
      setTimeout(() => {
        closeModal();
        navigate('/login');
      }, 2000);
      return;
    }
    
    const newOrder = {
      id: Date.now(),
      items: [{ ...product, quantity: 1 }],
      total: product.price,
      date: new Date().toLocaleDateString(),
      status: 'Processing'
    };
    
    addOrder(newOrder);
    showModal('Order Placed!', 'Order placed successfully! You can view your order history in the Orders section.', 'success');
  };
  return (
    <>
      <style>{`
        .products-wrapper {
          padding: 40px;
          min-height: 100vh;
          background: #f7efe5;
        }

        .products-title {
          font-size: 30px;
          margin-bottom: 25px;
          color: #3b2f2f;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .products-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        }

        .product-card {
          width: 260px;
          background: #ffffff;
          border-radius: 14px;
          padding: 18px;
          transition: transform 0.35s ease, 
                      box-shadow 0.35s ease, 
                      border-color 0.35s ease;
          cursor: pointer;
          border: 1px solid #e8d3c5;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }

        .product-card:hover {
          transform: translateY(-8px) scale(1.03);

          /* ⭐ Elegant Golden Glow */
          box-shadow: 0 10px 32px rgba(212, 160, 86, 0.55);

          /* ⭐ Gold border highlight */
          border-color: #d4a056;
        }

        .product-img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          border-radius: 12px;
        }

        .product-name {
          margin-top: 12px;
          font-size: 20px;
          font-weight: 700;
          color: #3b2f2f;
        }

        .product-description {
          font-size: 15px;
          color: #5f4b4b;
          margin-top: 6px;
          height: 40px;
          overflow: hidden;
        }

        .product-price {
          margin-top: 12px;
          font-size: 18px;
          font-weight: 700;
          color: #d4a056;
        }

        .product-offer {
          color: #e6b800;
          font-weight: bold;
          margin-top: 5px;
        }

        .details-link {
          margin-top: 12px;
          display: inline-block;
          background: #3b2f2f;
          color: #d4a056;
          padding: 8px 12px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.3s;
        }

        .details-link:hover {
          background: #2a2222;
        }
        
        .product-actions {
          margin-top: 15px;
          display: flex;
          gap: 10px;
        }
        
        .action-btn {
          padding: 8px 15px;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .add-cart-btn {
          background: #d4a056;
          color: white;
          flex: 1;
        }
        
        .add-cart-btn:hover {
          background: #c99742;
        }
        
        .buy-btn {
          background: #28a745;
          color: white;
          flex: 1;
        }
        
        .buy-btn:hover {
          background: #218838;
        }
      `}</style>

      <div className="products-wrapper">
        <h2 className="products-title">Our Featured Antiques</h2>

        <div className="products-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} className="product-img" />

              <h3 className="product-name">{item.name}</h3>

              <p className="product-description">{item.description}</p>

              <p className="product-price">₹{item.price}</p>

              <Link to={`/product/${item.id}`} className="details-link">
                View Details
              </Link>
              
              <div className="product-actions">
                <button 
                  className="action-btn add-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
                <button 
                  className="action-btn buy-btn"
                  onClick={() => handleBuyNow(item)}
                >
                  Buy Now
                </button>
              </div>

              {item.offer && <p className="product-offer">{item.offer}</p>}
            </div>
          ))}
        </div>
      </div>
      
      <Modal 
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
    </>
  );
}

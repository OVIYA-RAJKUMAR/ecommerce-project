import React, { useState } from 'react';
import { products } from '../utils/api';
import { getProductReviews, getAverageRating } from '../utils/reviews';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from './Modal';

export default function Product({ user, addToCart, addOrder }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === parseInt(id));
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '', type: 'info' });

  const showModal = (title, message, type = 'info') => {
    setModal({ isOpen: true, title, message, type });
  };

  const closeModal = () => {
    setModal({ isOpen: false, title: '', message: '', type: 'info' });
  };

  const handleAddToCart = () => {
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

  const handleBuyNow = () => {
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

  if (!product) {
    return (
      <div style={{ padding: "40px", fontSize: "22px", color: "#3b2f2f" }}>
        Product not found.
      </div>
    );
  }

  const productReviews = getProductReviews(product.id);
  const averageRating = getAverageRating(product.id);

  return (
    <div style={{ padding: "40px", maxWidth: "1400px", margin: "auto" }}>
      <style>{`
        body {
          background: #f7efe5;
        }

        .product-container {
          position: relative;
          animation: fadeInPage 0.6s ease;
        }

        /* Two Column Layout */
        .product-layout {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }

        /* Left Column - Product Details */
        .product-detail-box {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding: 35px;
          border-radius: 25px;
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.35);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          transform: translateY(20px);
          animation: slideUp 0.7s ease forwards;
        }

        /* Floating Image Effect */
        .product-image {
          width: 100%;
          max-width: 400px;
          height: 400px;
          border-radius: 20px;
          object-fit: cover;
          transition: transform 0.5s ease, box-shadow 0.4s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          margin: 0 auto;
        }

        .product-image:hover {
          transform: scale(1.05) rotate(1deg);
          box-shadow: 0 18px 50px rgba(0,0,0,0.3);
        }

        /* Gold Shine Animation Title */
        .product-title {
          font-size: 32px;
          font-weight: 900;
          color: #3b2f2f;
          position: relative;
          overflow: hidden;
          display: inline-block;
          background-image: linear-gradient(90deg, #3b2f2f, #d4a056, #3b2f2f);
          background-size: 200%;
          animation: goldShine 3s linear infinite;
          text-align: center;
        }

        @keyframes goldShine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .product-desc {
          font-size: 16px;
          color: #5f4b4b;
          line-height: 1.6;
          animation: fadeInText 1s ease;
          text-align: center;
        }

        .product-price {
          font-size: 28px;
          font-weight: 800;
          color: #c99742;
          animation: fadeInText 1.2s ease;
          text-align: center;
        }

        .product-category {
          font-size: 16px;
          color: #3b2f2f;
          opacity: 0.85;
          text-align: center;
        }

        .product-offer {
          font-size: 18px;
          color: #e6b800;
          font-weight: bold;
          text-align: center;
        }
        
        .action-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
        }
        
        .btn {
          padding: 12px 25px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .add-to-cart-btn {
          background: #d4a056;
          color: white;
        }
        
        .add-to-cart-btn:hover {
          background: #c99742;
          transform: translateY(-2px);
        }
        
        .buy-now-btn {
          background: #28a745;
          color: white;
        }
        
        .buy-now-btn:hover {
          background: #218838;
          transform: translateY(-2px);
        }

        /* Right Column - Reviews */
        .reviews-section {
          flex: 1;
          padding: 35px;
          border-radius: 25px;
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.35);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          transform: translateY(20px);
          animation: slideUp 0.8s ease forwards;
          max-height: 600px;
          overflow-y: auto;
        }

        .reviews-title {
          font-size: 24px;
          font-weight: 700;
          color: #3b2f2f;
          margin-bottom: 20px;
          text-align: center;
        }

        .rating-summary {
          text-align: center;
          margin-bottom: 25px;
          padding: 15px;
          background: rgba(212, 160, 86, 0.1);
          border-radius: 10px;
        }

        .average-rating {
          font-size: 36px;
          font-weight: 800;
          color: #d4a056;
          margin-bottom: 5px;
        }

        .stars {
          font-size: 20px;
          color: #d4a056;
          margin-bottom: 5px;
        }

        .review-count {
          color: #5f4b4b;
          font-size: 14px;
        }

        .review-item {
          background: rgba(255,255,255,0.7);
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 15px;
          border-left: 4px solid #d4a056;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .reviewer-name {
          font-weight: 600;
          color: #3b2f2f;
        }

        .review-rating {
          color: #d4a056;
          font-size: 16px;
        }

        .review-comment {
          color: #5f4b4b;
          line-height: 1.5;
          margin-bottom: 8px;
        }

        .review-date {
          color: #999;
          font-size: 12px;
        }

        .no-reviews {
          text-align: center;
          color: #5f4b4b;
          font-style: italic;
          padding: 40px 20px;
        }

        /* Animations */
        @keyframes fadeInPage {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInText {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .product-layout {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="product-container">
        <div className="product-layout">
          {/* Left Column - Product Details */}
          <div className="product-detail-box">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="product-info">
              <h1 className="product-title">{product.name}</h1>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">₹{product.price}</p>
              <p className="product-category">Category: {product.category}</p>
              {product.offer && (
                <p className="product-offer">{product.offer}</p>
              )}
              
              <div className="action-buttons">
                <button className="btn add-to-cart-btn" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <button className="btn buy-now-btn" onClick={handleBuyNow}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Reviews */}
          <div className="reviews-section">
            <h2 className="reviews-title">Customer Reviews</h2>
            
            {productReviews.length > 0 ? (
              <>
                <div className="rating-summary">
                  <div className="average-rating">{averageRating}</div>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(averageRating) ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <div className="review-count">
                    Based on {productReviews.length} review{productReviews.length !== 1 ? 's' : ''}
                  </div>
                </div>

                <div className="reviews-list">
                  {productReviews.map((review) => (
                    <div key={review.id} className="review-item">
                      <div className="review-header">
                        <span className="reviewer-name">{review.name}</span>
                        <span className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>
                              {i < review.rating ? '★' : '☆'}
                            </span>
                          ))}
                        </span>
                      </div>
                      <p className="review-comment">{review.comment}</p>
                      <div className="review-date">{review.date}</div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="no-reviews">
                No reviews yet. Be the first to review this product!
              </div>
            )}
          </div>
        </div>
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

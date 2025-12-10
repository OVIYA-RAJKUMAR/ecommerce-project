import React, { useState, useEffect } from 'react';

export default function Orders({ user, orders }) {
  console.log('Orders component - user:', user);
  console.log('Orders component - orders:', orders);
  console.log('Orders length:', orders?.length);

  if (!user) {
    return (
      <div style={{ padding: "40px", textAlign: "center", background: "#f7efe5", minHeight: "100vh" }}>
        <h2>Please login to view your orders</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "auto", background: "#f7efe5", minHeight: "100vh" }}>
      <style>{`
        .orders-container {
          background: rgba(255,255,255,0.9);
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .orders-title {
          font-size: 32px;
          color: #3b2f2f;
          margin-bottom: 30px;
          font-weight: 800;
        }
        
        .order-card {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          border-left: 4px solid #d4a056;
        }
        
        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .order-id {
          font-weight: 600;
          color: #3b2f2f;
        }
        
        .order-date {
          color: #5f4b4b;
        }
        
        .order-status {
          background: #28a745;
          color: white;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .order-items {
          margin-bottom: 15px;
        }
        
        .order-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 10px 0;
          border-bottom: 1px solid #e9ecef;
        }
        
        .order-item:last-child {
          border-bottom: none;
        }
        
        .item-image {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 5px;
        }
        
        .item-info {
          flex: 1;
        }
        
        .item-name {
          font-weight: 600;
          color: #3b2f2f;
          margin-bottom: 2px;
        }
        
        .item-details {
          font-size: 14px;
          color: #5f4b4b;
        }
        
        .order-total {
          text-align: right;
          font-size: 18px;
          font-weight: 700;
          color: #d4a056;
        }
        
        .no-orders {
          text-align: center;
          padding: 60px 20px;
          color: #5f4b4b;
        }
      `}</style>
      
      <div className="orders-container">
        <h1 className="orders-title">My Orders</h1>
        
        {(!orders || orders.length === 0) ? (
          <div className="no-orders">
            <h3>No orders yet</h3>
            <p>Start shopping to see your orders here!</p>
          </div>
        ) : (
          (orders || []).map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div>
                  <div className="order-id">Order #{order.id}</div>
                  <div className="order-date">Placed on {order.date}</div>
                </div>
                <div className="order-status">{order.status}</div>
              </div>
              
              <div className="order-items">
                {order.items.map((item) => (
                  <div key={item.id} className="order-item">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-info">
                      <div className="item-name">{item.name}</div>
                      <div className="item-details">
                        Quantity: {item.quantity} × ₹{item.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="order-total">
                Total: ₹{order.total.toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
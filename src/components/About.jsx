import React from 'react';

export default function About() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "auto", background: "#ffeaea", minHeight: "100vh" }}>
      <style>{`
        .about-hero {
          background: linear-gradient(135deg, #dc143c, #ff6b6b);
          padding: 60px 40px;
          border-radius: 25px;
          text-align: center;
          margin-bottom: 40px;
          animation: slideDown 0.8s ease;
        }
        
        @keyframes slideDown {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .hero-title {
          font-size: 48px;
          color: white;
          margin-bottom: 20px;
          font-weight: 900;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .hero-subtitle {
          font-size: 20px;
          color: rgba(255,255,255,0.9);
          margin-bottom: 0;
        }
        
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .content-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(220, 20, 60, 0.1);
          transition: transform 0.3s ease;
          animation: fadeInUp 0.8s ease;
        }
        
        .content-card:hover {
          transform: translateY(-5px);
        }
        
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .card-title {
          font-size: 24px;
          color: #8b0000;
          margin-bottom: 15px;
          font-weight: 700;
        }
        
        .card-content {
          font-size: 16px;
          line-height: 1.6;
          color: #333;
        }
        
        .stats-section {
          background: linear-gradient(45deg, #8b0000, #dc143c);
          padding: 40px;
          border-radius: 20px;
          margin-bottom: 40px;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          text-align: center;
        }
        
        .stat-item {
          color: white;
        }
        
        .stat-number {
          font-size: 36px;
          font-weight: 900;
          margin-bottom: 10px;
          animation: countUp 2s ease;
        }
        
        .stat-label {
          font-size: 14px;
          opacity: 0.9;
        }
        
        .team-section {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(220, 20, 60, 0.1);
        }
        
        .section-title {
          font-size: 32px;
          color: #8b0000;
          text-align: center;
          margin-bottom: 30px;
          font-weight: 800;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        
        .team-member {
          text-align: center;
          padding: 20px;
        }
        
        .member-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(45deg, #dc143c, #ff6b6b);
          margin: 0 auto 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          color: white;
        }
        
        .member-name {
          font-size: 18px;
          font-weight: 600;
          color: #8b0000;
          margin-bottom: 5px;
        }
        
        .member-role {
          font-size: 14px;
          color: #666;
        }
      `}</style>
      
      <div className="about-hero">
        <h1 className="hero-title">🏛️ The Epoch Elegance</h1>
        <p className="hero-subtitle">Preserving History, Creating Memories</p>
      </div>
      
      <div className="content-grid">
        <div className="content-card">
          <h2 className="card-title">📜 Our Story</h2>
          <p className="card-content">
            Founded in 2020 by passionate historians and collectors, The Epoch Elegance began as a small family business with a big dream: to make historical artifacts accessible to everyone. What started in a modest warehouse has grown into a premier destination for authentic antiques.
          </p>
        </div>
        
        <div className="content-card">
          <h2 className="card-title">🎯 Our Mission</h2>
          <p className="card-content">
            We believe every antique tells a story. Our mission is to preserve these stories and connect them with people who appreciate history's beauty. Each piece is carefully authenticated, restored, and presented with its historical context.
          </p>
        </div>
        
        <div className="content-card">
          <h2 className="card-title">🌍 Global Sourcing</h2>
          <p className="card-content">
            Our expert team travels across continents to source authentic pieces from estate sales, auctions, and private collections. From Victorian England to ancient Rome, we bring you treasures from every corner of history.
          </p>
        </div>
        
        <div className="content-card">
          <h2 className="card-title">🔍 Authentication</h2>
          <p className="card-content">
            Every item undergoes rigorous authentication by certified appraisers and historians. We use advanced techniques including carbon dating, provenance research, and expert analysis to ensure authenticity.
          </p>
        </div>
      </div>
      
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Artifacts Sold</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Countries Sourced</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Customer Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Expert Appraisers</div>
          </div>
        </div>
      </div>
      
      <div className="team-section">
        <h2 className="section-title">Meet Our Experts</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👨‍🎓</div>
            <div className="member-name">Dr. James Harrison</div>
            <div className="member-role">Chief Historian & Founder</div>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍🔬</div>
            <div className="member-name">Sarah Chen</div>
            <div className="member-role">Authentication Specialist</div>
          </div>
          <div className="team-member">
            <div className="member-avatar">👨‍💼</div>
            <div className="member-name">Marcus Rodriguez</div>
            <div className="member-role">Global Sourcing Director</div>
          </div>
        </div>
      </div>
    </div>
  );
}
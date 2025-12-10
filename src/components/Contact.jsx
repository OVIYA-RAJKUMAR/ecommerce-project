import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "auto", background: "#ffeaea", minHeight: "100vh" }}>
      <style>{`
        .contact-hero {
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
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }
        
        .contact-info-section {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(220, 20, 60, 0.1);
          animation: fadeInLeft 0.8s ease;
        }
        
        @keyframes fadeInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .contact-form-section {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(220, 20, 60, 0.1);
          animation: fadeInRight 0.8s ease;
        }
        
        @keyframes fadeInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .section-title {
          font-size: 28px;
          color: #8b0000;
          margin-bottom: 30px;
          font-weight: 700;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 25px;
          padding: 15px;
          background: #ffeaea;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }
        
        .contact-item:hover {
          transform: translateX(10px);
        }
        
        .contact-icon {
          font-size: 24px;
          margin-right: 15px;
          width: 40px;
        }
        
        .contact-details {
          flex: 1;
        }
        
        .contact-label {
          font-weight: 600;
          color: #8b0000;
          margin-bottom: 5px;
        }
        
        .contact-value {
          color: #333;
          font-size: 16px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #8b0000;
        }
        
        .form-input, .form-select {
          width: 100%;
          padding: 15px;
          border: 2px solid #ffcccc;
          border-radius: 10px;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        
        .form-input:focus, .form-select:focus {
          outline: none;
          border-color: #dc143c;
          box-shadow: 0 0 10px rgba(220, 20, 60, 0.2);
        }
        
        .form-textarea {
          width: 100%;
          padding: 15px;
          border: 2px solid #ffcccc;
          border-radius: 10px;
          font-size: 16px;
          min-height: 120px;
          resize: vertical;
          transition: all 0.3s ease;
        }
        
        .form-textarea:focus {
          outline: none;
          border-color: #dc143c;
          box-shadow: 0 0 10px rgba(220, 20, 60, 0.2);
        }
        
        .submit-btn {
          background: linear-gradient(45deg, #dc143c, #ff6b6b);
          color: white;
          padding: 15px 40px;
          border: none;
          border-radius: 25px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(220, 20, 60, 0.4);
        }
        
        .office-hours {
          background: linear-gradient(45deg, #8b0000, #dc143c);
          padding: 30px;
          border-radius: 20px;
          color: white;
          text-align: center;
        }
        
        .hours-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        .hours-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .hours-item {
          padding: 15px;
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }
        
        .day {
          font-weight: 600;
          margin-bottom: 5px;
        }
        
        .time {
          font-size: 14px;
          opacity: 0.9;
        }
      `}</style>
      
      <div className="contact-hero">
        <h1 className="hero-title">📞 Get In Touch</h1>
        <p className="hero-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>
      
      <div className="contact-grid">
        <div className="contact-info-section">
          <h2 className="section-title">Contact Information</h2>
          
          <div className="contact-item">
            <div className="contact-icon">🏢</div>
            <div className="contact-details">
              <div className="contact-label">Visit Our Showroom</div>
              <div className="contact-value">123 Heritage Plaza, Antique District<br/>Mumbai, Maharashtra 400001</div>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-details">
              <div className="contact-label">Call Us</div>
              <div className="contact-value">+91 98765 43210<br/>+91 98765 43211 (WhatsApp)</div>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div className="contact-details">
              <div className="contact-label">Email Us</div>
              <div className="contact-value">info@epochelegance.com<br/>support@epochelegance.com</div>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">🌍</div>
            <div className="contact-details">
              <div className="contact-label">Follow Us</div>
              <div className="contact-value">@EpochElegance on all social platforms</div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-section">
          <h2 className="section-title">Send us a Message</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Subject *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="authentication">Authentication Services</option>
                <option value="purchase">Purchase Inquiry</option>
                <option value="appraisal">Appraisal Request</option>
                <option value="consignment">Consignment</option>
                <option value="support">Customer Support</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Tell us how we can help you..."
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="office-hours">
        <h2 className="hours-title">🕰️ Business Hours</h2>
        <div className="hours-grid">
          <div className="hours-item">
            <div className="day">Monday - Friday</div>
            <div className="time">10:00 AM - 7:00 PM</div>
          </div>
          <div className="hours-item">
            <div className="day">Saturday</div>
            <div className="time">10:00 AM - 6:00 PM</div>
          </div>
          <div className="hours-item">
            <div className="day">Sunday</div>
            <div className="time">12:00 PM - 5:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}
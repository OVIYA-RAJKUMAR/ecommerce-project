import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '', type: 'info' });

  const showModal = (title, message, type = 'info') => {
    setModal({ isOpen: true, title, message, type });
  };

  const closeModal = () => {
    setModal({ isOpen: false, title: '', message: '', type: 'info' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Simple login validation
      if (formData.name && formData.email && formData.password) {
        const userData = {
          name: formData.name,
          email: formData.email
        };
        localStorage.setItem('user', JSON.stringify(userData));
        onLogin(userData);
        showModal('Welcome!', 'Login successful! Redirecting to home page...', 'success');
        setTimeout(() => {
          closeModal();
          navigate('/');
        }, 1500);
      } else {
        showModal('Error', 'Please fill in all fields', 'error');
      }
    } else {
      // Simple signup validation
      if (formData.name && formData.email && formData.password) {
        const userData = {
          name: formData.name,
          email: formData.email
        };
        localStorage.setItem('user', JSON.stringify(userData));
        onLogin(userData);
        showModal('Success!', 'Account created successfully! Redirecting to home page...', 'success');
        setTimeout(() => {
          closeModal();
          navigate('/');
        }, 1500);
      } else {
        showModal('Error', 'Please fill in all fields', 'error');
      }
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto", background: "#f7efe5", minHeight: "100vh" }}>
      <style>{`
        .login-container {
          background: rgba(255,255,255,0.95);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        
        .login-title {
          font-size: 32px;
          color: #3b2f2f;
          margin-bottom: 30px;
          text-align: center;
          font-weight: 800;
        }
        
        .toggle-container {
          display: flex;
          margin-bottom: 30px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid #d4a056;
        }
        
        .toggle-btn {
          flex: 1;
          padding: 12px;
          background: white;
          border: none;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }
        
        .toggle-btn.active {
          background: #d4a056;
          color: white;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #3b2f2f;
        }
        
        .form-input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e8d3c5;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #d4a056;
        }
        
        .submit-btn {
          background: #3b2f2f;
          color: #d4a056;
          padding: 15px 30px;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
          width: 100%;
        }
        
        .submit-btn:hover {
          background: #2a2222;
        }
      `}</style>
      
      <div className="login-container">
        <h1 className="login-title">{isLogin ? 'Login' : 'Sign Up'}</h1>
        
        <div className="toggle-container">
          <button 
            className={`toggle-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder={isLogin ? "Enter your name" : "Enter your full name"}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
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
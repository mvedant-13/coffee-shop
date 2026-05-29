import React from 'react';

export default function HomeView({ active, setActiveView }) {
  return (
    <section id="view-home" className={`spa-view ${active ? 'active' : ''}`}>
      <div className="hero-section">
        <div className="hero-text-container">
          <span className="view-tag">HOME</span>
          <h1 className="hero-title font-serif">Café Taste.<br />No Refined Sugar.</h1>
          <p className="hero-subtitle">Premium coffee premixes crafted for milk. Sweetened naturally with rich Date Palm. Ready in seconds.</p>
          <div className="hero-actions">
            <a 
              href="#shop" 
              className="btn-primary btn-large" 
              id="hero-btn-shop"
              onClick={(e) => {
                e.preventDefault();
                setActiveView('shop');
              }}
            >
              Shop Now
            </a>
          </div>
        </div>
        
        <div className="hero-visual-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '480px', overflow: 'hidden' }}>
          <img 
            src="/assorted-pack.png" 
            alt="REDEFINED Assorted Pack" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%', 
              objectFit: 'contain', 
              borderRadius: '24px', 
              boxShadow: 'var(--shadow-premium)',
              transition: 'var(--transition-smooth)'
            }} 
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
              e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'var(--shadow-premium)';
            }}
          />
        </div>
      </div>

      {/* 3 Columns Bottom Cards */}
      <div className="features-grid">
        <div className="feature-card">
          <span className="card-category">RANGE</span>
          <h3 className="card-title font-serif">Five café favourites.</h3>
          <ul className="card-list">
            <li>Salted Caramel Latte</li>
            <li>French Vanilla Latte</li>
            <li>Velvet Hazelnut Cappuccino</li>
            <li>Intense Dark Mocha</li>
            <li>Irish Cream Cappuccino</li>
          </ul>
        </div>
        <div className="feature-card">
          <span className="card-category">RITUAL</span>
          <h3 className="card-title font-serif">One sachet.<br />Hot milk.</h3>
          <p className="card-desc">A smooth café-style cup, made simply. No machine. No expensive equipment. Premium espresso blend ready to swirl.</p>
        </div>
        <div className="feature-card">
          <span className="card-category">PROMISE</span>
          <h3 className="card-title font-serif">No machine.<br />No mess.</h3>
          <p className="card-desc">No ordinary premix. Sweetened naturally using date palm sugar. Clean ingredients with absolute transparency.</p>
        </div>
      </div>

      {/* Date Palm Special Highlight Banner */}
      <div className="sweetener-banner">
        <div className="sweetener-content">
          <span className="banner-tag">NATURAL REVOLUTION</span>
          <h2 className="banner-title font-serif">The Power of Date Palm</h2>
          <p className="banner-text">We completely eliminated refined sugars. REDEFINED coffee is sweetened exclusively with natural, low-glycemic <strong>Date Palm Powder</strong>. Sourced responsibly, it delivers a rich, caramel-like warmth that elevates the single-origin coffee profile perfectly without the sugar crash.</p>
          <div className="sweetener-stats">
            <div className="stat-item">
              <span className="stat-number">0%</span>
              <span className="stat-label">Refined Sugar</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Date Palm Sweetened</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Pure</span>
              <span className="stat-label">Natural Fuel</span>
            </div>
          </div>
        </div>
        <div className="sweetener-visual">
          <div className="date-palm-illustration">
            <div className="palm-leaf"></div>
            <div className="palm-leaf"></div>
            <div className="palm-leaf"></div>
            <div className="dates-cluster"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function ShopView({ active, flavors, onOpenModal }) {
  return (
    <section id="view-shop" className={`spa-view ${active ? 'active' : ''}`}>
      <div className="shop-header">
        <span className="view-tag">SHOP</span>
        <h1 className="shop-title font-serif">Choose your cup.</h1>
        <p className="shop-subtitle">Café-style coffee, crafted for milk. Sourced direct, sweetened naturally.</p>
      </div>

      {/* 5 Premium Flavor Cards Container */}
      <div className="products-grid" id="flavor-cards-container">
        {flavors.map((flavor) => (
          <div key={flavor.id} className="product-card">
            <div className="card-visual-area">
              <img 
                src={flavor.image} 
                alt={flavor.name} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  transition: 'var(--transition-smooth)' 
                }} 
                className="product-image-render" 
              />
            </div>
            
            <div className="card-info-area">
              <h3 className="product-name font-serif">{flavor.name}</h3>
              <p className="product-desc">{flavor.desc}</p>
              <div className="product-actions">
                <button 
                  className="btn-secondary" 
                  onClick={() => onOpenModal(flavor)}
                >
                  Sensory Profile
                </button>
                <a 
                  href="https://blinkit.com/s/?q=redefined+coffee" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  Order on Blinkit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

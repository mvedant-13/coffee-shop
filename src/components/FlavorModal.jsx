import React from 'react';

export default function FlavorModal({ isOpen, flavor, onClose }) {
  if (!isOpen || !flavor) return null;

  return (
    <div 
      className="flavor-modal-overlay active" 
      id="details-modal" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-flavor-name"
      onClick={(e) => {
        if (e.target.id === 'details-modal') onClose();
      }}
    >
      <div className="modal-card">
        <button 
          className="modal-close-btn" 
          id="btn-modal-close" 
          aria-label="Close details"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="modal-layout">
          <div className="modal-graphic-col" id="modal-theme-bg" style={{ backgroundColor: flavor.themeBg, padding: 0 }}>
            <img 
              src={flavor.image} 
              alt={flavor.name} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </div>
          <div className="modal-info-col">
            <span className="modal-tag" id="modal-flavor-tag">PREMIUM FLAVOUR</span>
            <h2 className="modal-title font-serif" id="modal-flavor-name">{flavor.name}</h2>
            <p className="modal-tagline" id="modal-flavor-tagline">{flavor.tagline}</p>
            
            <div className="sensory-profile">
              <h4 className="profile-header font-serif">SENSORY PROFILE</h4>
              <div className="profile-bars">
                <div className="profile-bar-row">
                  <span className="profile-label">Sweetness (Date Palm)</span>
                  <div className="bar-outer">
                    <div 
                      className="bar-inner" 
                      id="bar-sweetness" 
                      style={{ width: `${flavor.sensory.sweetness}%`, transition: 'width 0.8s ease' }}
                    ></div>
                  </div>
                </div>
                <div className="profile-bar-row">
                  <span className="profile-label">Coffee Intensity</span>
                  <div className="bar-outer">
                    <div 
                      className="bar-inner" 
                      id="bar-intensity" 
                      style={{ width: `${flavor.sensory.intensity}%`, transition: 'width 0.8s ease' }}
                    ></div>
                  </div>
                </div>
                <div className="profile-bar-row">
                  <span className="profile-label">Creamy Texture</span>
                  <div className="bar-outer">
                    <div 
                      className="bar-inner" 
                      id="bar-creamy" 
                      style={{ width: `${flavor.sensory.creamy}%`, transition: 'width 0.8s ease' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ingredients-section">
              <h4 className="ingredients-header font-serif">INGREDIENTS & INTEGRITY</h4>
              <p className="ingredients-text" id="modal-flavor-ingredients">
                {flavor.ingredients.replace(/\*\*/g, '')}
              </p>
            </div>

            <div className="modal-action-row">
              <a 
                href="https://blinkit.com/s/?q=redefined+coffee" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary btn-large btn-full" 
                id="btn-modal-blinkit"
              >
                ORDER INSTANTLY ON BLINKIT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

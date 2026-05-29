import React from 'react';

export default function Footer({ activeView, setActiveView }) {
  const pageIndexes = {
    home: '01 / HOME',
    shop: '02 / SHOP',
    story: '03 / STORY',
    stores: '04 / STORES'
  };

  return (
    <footer className="bottom-green-strip">
      <div className="footer-container">
        <div className="footer-page-indicator" id="footer-active-indicator">
          {pageIndexes[activeView] || '01 / HOME'}
        </div>
        
        <div className="footer-metrics">
          <span className="metric-bullet">D2C DIRECT</span>
          <span className="metric-divider">•</span>
          <span className="metric-bullet">40,000+ HAPPY CUSTOMERS</span>
          <span className="metric-divider">•</span>
          <span className="metric-bullet">5 PHYSICAL STORES</span>
          <span className="metric-divider">•</span>
          <span className="metric-bullet">SWEETENED WITH DATE PALM</span>
        </div>
        
        <div className="footer-store-shortcut">
          <a 
            href="#stores" 
            className="footer-stores-link" 
            id="link-footer-stores"
            onClick={(e) => {
              e.preventDefault();
              setActiveView('stores');
            }}
          >
            5 LOCAL STORES
          </a>
        </div>
      </div>
    </footer>
  );
}

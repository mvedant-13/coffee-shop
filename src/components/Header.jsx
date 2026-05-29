import React from 'react';

export default function Header({ activeView, setActiveView, mobileMenuOpen, setMobileMenuOpen }) {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'shop', label: 'SHOP' },
    { id: 'story', label: 'STORY' },
    { id: 'stores', label: 'STORES' }
  ];

  const handleLinkClick = (e, viewId) => {
    e.preventDefault();
    setActiveView(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="global-header">
        <div className="header-container">
          <a 
            href="#home" 
            className="logo" 
            id="nav-logo" 
            aria-label="REDEFINED Home"
            onClick={(e) => handleLinkClick(e, 'home')}
          >
            <img 
              src="/Redefined-monogram.png" 
              alt="REDEFINED Logo Monogram" 
              className="logo-svg" 
              style={{ width: '42px', height: '42px', objectFit: 'contain' }}
            />
            <span className="logo-text">REDEFINED</span>
          </a>
          
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`nav-link ${activeView === item.id ? 'active' : ''}`} 
                  id={`link-${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                >
                  {item.label}
                </a>
                {index < navItems.length - 1 && <span className="nav-separator">|</span>}
              </React.Fragment>
            ))}
          </nav>
          
          <div className="header-cta">
            <a 
              href="https://blinkit.com/s/?q=redefined+coffee" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              id="btn-header-buy"
            >
              BUY NOW
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-nav-toggle ${mobileMenuOpen ? 'active' : ''}`} 
            id="btn-mobile-toggle" 
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="bar" style={mobileMenuOpen ? { transform: 'rotate(45deg) translate(6px, 6px)' } : {}}></span>
            <span className="bar" style={mobileMenuOpen ? { opacity: 0 } : {}}></span>
            <span className="bar" style={mobileMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'active' : ''}`} id="mobile-menu-drawer">
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className="mobile-link" 
              id={`mob-link-${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://blinkit.com/s/?q=redefined+coffee" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary mob-cta" 
            id="mob-btn-buy"
          >
            BUY ON BLINKIT
          </a>
        </nav>
      </div>
    </>
  );
}

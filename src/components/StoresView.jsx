import React from 'react';

export default function StoresView({ active, stores, selectedStore, setSelectedStore }) {
  const currentStore = stores[selectedStore] || stores[0];

  return (
    <section id="view-stores" className={`spa-view ${active ? 'active' : ''}`}>
      <div className="stores-header">
        <span className="view-tag">STORES</span>
        <h1 className="stores-title font-serif">Experience REDEFINED in person.</h1>
        <p className="stores-subtitle">Visit one of our 5 physical stores and testing bars. Grab a cup, sample our natural date-palm recipes, and meet our brewers.</p>
      </div>

      <div className="stores-container">
        {/* Left Column: Store list */}
        <div className="stores-list" id="physical-stores-list">
          {stores.map((store, index) => (
            <div 
              key={store.name} 
              className={`store-locator-card ${selectedStore === index ? 'active' : ''}`}
              onClick={() => setSelectedStore(index)}
            >
              <div className="store-card-header">
                <h3 className="store-name font-serif">{store.name}</h3>
                <span className="store-status">{store.status}</span>
              </div>
              <p className="store-address">{store.address}</p>
              <div className="store-footer">
                <span className="store-hours">Hours: {store.hours}</span>
                {store.tastingBar && <span className="tasting-bar-status">Tasting Bar Available</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Interactive Visual Map Mockup */}
        <div className="map-view-container">
          <div className="map-mockup">
            <div className="map-grid-lines"></div>
            <div className="map-route-indicator"></div>
            
            {/* Map Pins loaded dynamically */}
            <div className="map-pins-container" id="map-pins-container">
              {stores.map((store, index) => (
                <div 
                  key={store.name}
                  className={`map-pin ${selectedStore === index ? 'active' : ''}`}
                  style={{ 
                    left: store.pinX, 
                    top: store.pinY 
                  }}
                  onClick={() => setSelectedStore(index)}
                  title={store.name}
                >
                  <div className="map-pin-pulse"></div>
                </div>
              ))}
            </div>
            
            <div className="map-overlay-info" id="map-card-info" style={{ transform: 'translateY(0)', opacity: 1 }}>
              <h4 id="map-info-name">{currentStore.name}</h4>
              <p id="map-info-address">{currentStore.address}</p>
              <span className="map-bar-badge" id="map-info-badge">
                {currentStore.tastingBar ? 'Tasting Bar Available' : 'Retail Pick Up Only'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

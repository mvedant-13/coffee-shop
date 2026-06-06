import { useState } from "react";
import { STORES } from "../data/stores";
import "./Stores.css";

export default function Stores() {
  const [selected, setSelected] = useState(0);
  const current = STORES[selected];

  return (
    <section className="page-view">
      <div className="stores-header">
        <span className="view-tag">STORES</span>
        <h1 className="stores-title">Experience REDEFINED in person.</h1>
        <p className="stores-subtitle">
          Visit one of our 5 physical stores and testing bars. Grab a cup,
          sample our natural date-palm recipes, and meet our brewers.
        </p>
      </div>

      <div className="stores-container">
        <div className="stores-list">
          {STORES.map((store, i) => (
            <div
              key={store.name}
              className={`store-card${selected === i ? " active" : ""}`}
              onClick={() => setSelected(i)}
            >
              <div className="store-card-header">
                <h3 className="store-name">{store.name}</h3>
                <span className="store-status">{store.status}</span>
              </div>
              <p className="store-address">{store.address}</p>
              <div className="store-card-footer">
                <span className="store-hours">Hours: {store.hours}</span>
                {store.tastingBar && (
                  <span className="tasting-bar-label">
                    Tasting Bar Available
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="map-container">
          <div className="map">
            <div className="map-grid" />
            <div className="map-route" />

            {STORES.map((store, i) => (
              <div
                key={store.name}
                className={`map-pin${selected === i ? " active" : ""}`}
                style={{ left: store.pinX, top: store.pinY }}
                onClick={() => setSelected(i)}
                title={store.name}
              >
                <div className="map-pin-pulse" />
              </div>
            ))}

            <div className="map-info">
              <h4>{current.name}</h4>
              <p>{current.address}</p>
              <span className="map-badge">
                {current.tastingBar
                  ? "Tasting Bar Available"
                  : "Retail Pick Up Only"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { FLAVORS } from "../data/flavors";
import FlavorModal from "../components/FlavorModal";
import "./Shop.css";

export default function Shop() {
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  return (
    <section className="page-view">
      <div className="shop-header">
        <span className="view-tag">SHOP</span>
        <h1 className="shop-title">Choose your cup.</h1>
        <p className="shop-subtitle">
          Café-style coffee, crafted for milk. Sourced direct, sweetened
          naturally.
        </p>
      </div>

      <div className="products-grid">
        {FLAVORS.map((flavor) => (
          <div key={flavor.id} className="product-card">
            <div className="card-visual">
              <img
                src={flavor.image}
                alt={flavor.name}
                className="product-image"
              />
            </div>
            <div className="card-info">
              <h3 className="product-name">{flavor.name}</h3>
              <p className="product-desc">{flavor.desc}</p>
              <div className="product-actions">
                <button
                  className="btn-secondary"
                  onClick={() => setSelectedFlavor(flavor)}
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

      <FlavorModal
        flavor={selectedFlavor}
        onClose={() => setSelectedFlavor(null)}
      />
    </section>
  );
}
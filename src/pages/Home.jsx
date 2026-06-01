import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section className="page-view">
      <div className="hero-section">
        <div className="hero-text">
          <span className="view-tag">HOME</span>
          <h1 className="hero-title font-serif">
            Café Taste.
            <br />
            No Refined Sugar.
          </h1>
          <p className="hero-subtitle">
            Premium coffee premixes crafted for milk. Sweetened naturally with
            rich Date Palm. Ready in seconds.
          </p>
          <Link to="/shop" className="btn-primary btn-large">
            Shop Now
          </Link>
        </div>

        <div className="hero-visual">
          <img
            src="/images/assorted-pack.png"
            alt="REDEFINED Assorted Pack"
            className="hero-image"
          />
        </div>
      </div>

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
          <h3 className="card-title font-serif">
            One sachet.
            <br />
            Hot milk.
          </h3>
          <p className="card-desc">
            A smooth café-style cup, made simply. No machine. No expensive
            equipment. Premium espresso blend ready to swirl.
          </p>
        </div>

        <div className="feature-card">
          <span className="card-category">PROMISE</span>
          <h3 className="card-title font-serif">
            No machine.
            <br />
            No mess.
          </h3>
          <p className="card-desc">
            No ordinary premix. Sweetened naturally using date palm sugar. Clean
            ingredients with absolute transparency.
          </p>
        </div>
      </div>

      <div className="sweetener-banner">
        <div className="sweetener-content">
          <span className="banner-tag">NATURAL REVOLUTION</span>
          <h2 className="banner-title font-serif">The Power of Date Palm</h2>
          <p className="banner-text">
            We completely eliminated refined sugars. REDEFINED coffee is
            sweetened exclusively with natural, low-glycemic{" "}
            <strong>Date Palm Powder</strong>. Sourced responsibly, it delivers
            a rich, caramel-like warmth that elevates the single-origin coffee
            profile perfectly without the sugar crash.
          </p>
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
          <div className="palm-illustration">
            <div className="palm-leaf" />
            <div className="palm-leaf" />
            <div className="palm-leaf" />
            <div className="dates-cluster" />
          </div>
        </div>
      </div>
    </section>
  );
}
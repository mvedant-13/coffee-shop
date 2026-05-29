import React from 'react';

export default function StoryView({ active }) {
  return (
    <section id="view-story" className={`spa-view ${active ? 'active' : ''}`}>
      <div className="story-container">
        <span className="view-tag">STORY</span>
        <h1 className="story-main-title font-serif">
          We didn't make another coffee premix.<br />
          <span className="text-green">We made it beautifully simple.</span>
        </h1>
        <p className="story-subtitle">A café-style cup should feel smooth, balanced, and effortless. REDEFINED was born from a simple obsession: recreating high-fidelity café beverages at home without chemicals, refined sugar, or massive equipment.</p>

        {/* Grid of Belief, Moment, Style */}
        <div className="story-grid">
          <div className="story-card">
            <span className="card-category">BELIEF</span>
            <h3 className="card-title font-serif">Taste first.</h3>
            <p className="card-desc">Every detail exists to make the cup feel better. We test hundreds of roast profiles to match perfectly with our single-origin natural date palm sweetener.</p>
          </div>
          <div className="story-card">
            <span className="card-category">MOMENT</span>
            <h3 className="card-title font-serif">Made for everyday rituals.</h3>
            <p className="card-desc">One pause. One cup. A small moment that feels special. Made to fit your morning rush, afternoon slow-down, or late-night creative blocks.</p>
          </div>
          <div className="story-card">
            <span className="card-category">STYLE</span>
            <h3 className="card-title font-serif">Less noise. More feeling.</h3>
            <p className="card-desc">No loud claims. No clutter. No artificial thickeners, stabilizers, or refined sugar. Pure coffee joy in a minimal premium sachet.</p>
          </div>
        </div>

        {/* Bottom Long Espresso Strip */}
        <div className="espresso-banner">
          <p className="espresso-banner-text font-serif">Premium enough to feel special. Simple enough to become a habit.</p>
        </div>
        
        {/* D2C Revolution Detail */}
        <div className="story-d2c-section">
          <div className="story-d2c-content">
            <h2 className="d2c-title font-serif">Direct To Consumer (D2C) Freshness</h2>
            <p className="d2c-text font-serif-italic">By delivering straight from our roasting facilities to dark stores, we bypass distributors, warehouses, and grocery shelves. You get your coffee premium-grade and freshly packed, arriving via Blinkit in 10 minutes flat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

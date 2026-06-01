import "./Story.css";

const CARDS = [
  {
    category: "BELIEF",
    title: "Taste first.",
    desc: "Every detail exists to make the cup feel better. We test hundreds of roast profiles to match perfectly with our single-origin natural date palm sweetener.",
  },
  {
    category: "MOMENT",
    title: "Made for everyday rituals.",
    desc: "One pause. One cup. A small moment that feels special. Made to fit your morning rush, afternoon slow-down, or late-night creative blocks.",
  },
  {
    category: "STYLE",
    title: "Less noise. More feeling.",
    desc: "No loud claims. No clutter. No artificial thickeners, stabilizers, or refined sugar. Pure coffee joy in a minimal premium sachet.",
  },
];

export default function Story() {
  return (
    <section className="page-view">
      <div className="story-container">
        <span className="view-tag">STORY</span>
        <h1 className="story-title font-serif">
          We didn't make another coffee premix.
          <br />
          <span className="text-green">We made it beautifully simple.</span>
        </h1>
        <p className="story-subtitle">
          A café-style cup should feel smooth, balanced, and effortless.
          REDEFINED was born from a simple obsession: recreating high-fidelity
          café beverages at home without chemicals, refined sugar, or massive
          equipment.
        </p>

        <div className="story-grid">
          {CARDS.map(({ category, title, desc }) => (
            <div key={category} className="story-card">
              <span className="card-category">{category}</span>
              <h3 className="story-card-title font-serif">{title}</h3>
              <p className="card-desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="espresso-banner">
          <p className="espresso-banner-text font-serif">
            Premium enough to feel special. Simple enough to become a habit.
          </p>
        </div>

        <div className="d2c-section">
          <h2 className="d2c-title font-serif">
            Direct To Consumer (D2C) Freshness
          </h2>
          <p className="d2c-text font-serif-italic">
            By delivering straight from our roasting facilities to dark stores,
            we bypass distributors, warehouses, and grocery shelves. You get
            your coffee premium-grade and freshly packed, arriving via Blinkit
            in 10 minutes flat.
          </p>
        </div>
      </div>
    </section>
  );
}
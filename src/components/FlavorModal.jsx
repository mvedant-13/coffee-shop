import "./FlavorModal.css";

const BARS = [
  { label: "Sweetness (Date Palm)", key: "sweetness" },
  { label: "Coffee Intensity", key: "intensity" },
  { label: "Creamy Texture", key: "creamy" },
];

export default function FlavorModal({ flavor, onClose }) {
  if (!flavor) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-flavor-name"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          &times;
        </button>

        <div className="modal-layout">
          <div
            className="modal-image-col"
            style={{ backgroundColor: flavor.themeBg }}
          >
            <img src={flavor.image} alt={flavor.name} className="modal-image" />
          </div>

          <div className="modal-info">
            <span className="modal-tag">PREMIUM FLAVOUR</span>
            <h2 className="modal-title" id="modal-flavor-name">
              {flavor.name}
            </h2>
            <p className="modal-tagline">{flavor.tagline}</p>

            <div className="sensory-profile">
              <h4 className="profile-header">SENSORY PROFILE</h4>
              <div className="profile-bars">
                {BARS.map(({ label, key }) => (
                  <div key={key} className="bar-row">
                    <div className="bar-row-header">
                      <span className="bar-label">{label}</span>
                      <span className="bar-value">{flavor.sensory[key]}%</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ width: `${flavor.sensory[key]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ingredients-section">
              <h4 className="ingredients-header">INGREDIENTS & INTEGRITY</h4>
              <p className="ingredients-text">{flavor.ingredients}</p>
            </div>

            <a
              href="https://blinkit.com/s/?q=redefined+coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-large btn-full"
            >
              ORDER INSTANTLY ON BLINKIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
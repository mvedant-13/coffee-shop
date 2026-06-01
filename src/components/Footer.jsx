import { useLocation, Link } from "react-router-dom";
import "./Footer.css";

const PAGE_LABELS = {
  "/": "01 / HOME",
  "/shop": "02 / SHOP",
  "/story": "03 / STORY",
  "/stores": "04 / STORES",
};

const METRICS = [
  "D2C DIRECT",
  "40,000+ HAPPY CUSTOMERS",
  "5 PHYSICAL STORES",
  "SWEETENED WITH DATE PALM",
];

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-indicator">
          {PAGE_LABELS[pathname] ?? "01 / HOME"}
        </span>

        <div className="footer-metrics">
          {METRICS.map((m, i) => (
            <span key={m} className="footer-metrics-item">
              {m}
              {i < METRICS.length - 1 && (
                <span className="footer-divider" aria-hidden="true">
                  •
                </span>
              )}
            </span>
          ))}
        </div>

        <Link to="/stores" className="footer-stores-link">
          5 LOCAL STORES
        </Link>
      </div>
    </footer>
  );
}
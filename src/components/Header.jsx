import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const NAV_ITEMS = [
  { to: "/", label: "HOME" },
  { to: "/shop", label: "SHOP" },
  { to: "/story", label: "STORY" },
  { to: "/stores", label: "STORES" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link
            to="/"
            className="logo"
            aria-label="REDEFINED Home"
            onClick={closeMenu}
          >
            <img
              src="/images/Redefined-monogram.png"
              alt="REDEFINED"
              className="logo-mark"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {NAV_ITEMS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <a
            href="https://blinkit.com/s/?q=redefined+coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary header-cta"
          >
            BUY NOW
          </a>

          <button
            className={`menu-toggle${menuOpen ? " open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`drawer-backdrop${menuOpen ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        className={`mobile-drawer${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `mobile-link${isActive ? " active" : ""}`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://blinkit.com/s/?q=redefined+coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mob-cta"
            onClick={closeMenu}
          >
            BUY ON BLINKIT
          </a>
        </nav>
      </div>
    </>
  );
}
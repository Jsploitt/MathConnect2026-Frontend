const navItems = [
  { page: "home", label: "Home" },
  { page: "speakers", label: "Speakers" },
  { page: "agenda", label: "Agenda" },
  { page: "committee", label: "Committee" },
  { page: "abstracts", label: "Abstracts" },
  { page: "venue", label: "Venue" },
  { page: "registration", label: "Register", cta: true }
];

function NavBar({ activePage, showPage, menuOpen, toggleMenu }) {
  return (
    <nav>
      <div className="nav-inner">
        <button type="button" className="nav-logo" onClick={() => showPage("home")}>
          <div className="nav-logo-badge">
            <img src="/Mathconnect.png" alt="MathConnect logo" />
          </div>
          <div className="nav-logo-text">
            Math<span>Connect</span> 2026
          </div>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.page}>
              <button
                type="button"
                className={`nav-link ${activePage === item.page ? "active" : ""} ${item.cta ? "nav-cta" : ""}`}
                onClick={() => showPage(item.page)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;

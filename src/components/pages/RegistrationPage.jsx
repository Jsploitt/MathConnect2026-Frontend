const registrationCards = [
  {
    type: "Student",
    currency: "Discounted rate for students",
    features: [
      "Full conference access (3 days)",
      "Access to all sessions and workshops",
      "Conference materials",
      "Networking events"
    ]
  },
  {
    type: "Academic / Researcher",
    currency: "Standard academic rate",
    featured: true,
    features: [
      "Full conference access (3 days)",
      "Access to all sessions and workshops",
      "Conference materials and proceedings",
      "Conference dinner and social events",
      "Certificate of attendance"
    ]
  },
  {
    type: "Industry / Professional",
    currency: "Professional rate",
    features: [
      "Full conference access (3 days)",
      "All sessions, workshops and networking",
      "Conference materials and proceedings",
      "Conference dinner and social events"
    ]
  }
];

function RegistrationPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-inner">
          <span className="section-label">Registration</span>
          <h2 className="section-title light">Conference Registration</h2>
          <div className="divider"></div>
          <p className="section-desc light">Registration details and fees for MathConnect 2026 will be announced soon. Secure your spot below.</p>
        </div>
      </section>

      <section id="registration">
        <div className="section-inner">
          <div className="text-centered section-intro-spacing">
            <span className="section-label">Registration Tiers</span>
            <h2 className="section-title">Choose Your Pass</h2>
            <div className="divider centered"></div>
            <p className="section-desc section-desc-centered">
              Registration fees are TBD. The categories below are indicative. Final pricing will be announced with registration opening.
            </p>
          </div>

          <div className="reg-grid">
            {registrationCards.map((card) => (
              <div className={`reg-card ${card.featured ? "featured" : ""}`} key={card.type}>
                {card.featured && <div className="reg-badge-feat">MOST POPULAR</div>}
                <div className="reg-type">{card.type}</div>
                <div className="reg-price">TBD</div>
                <div className="reg-currency">{card.currency}</div>
                <ul className="reg-features">
                  {card.features.map((feature) => (
                    <li key={`${card.type}-${feature}`}>{feature}</li>
                  ))}
                </ul>
                <span className="btn-reg">Coming Soon</span>
              </div>
            ))}
          </div>

          <div className="registration-help-card">
            <h3>Questions about Registration?</h3>
            <p>Contact the conference secretariat for any registration-related inquiries.</p>
            <a href="mailto:mathconnect2026@kfupm.edu.sa">mathconnect2026@kfupm.edu.sa</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegistrationPage;

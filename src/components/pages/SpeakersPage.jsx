function SpeakersPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-inner">
          <span className="section-label">Our Speakers</span>
          <h2 className="section-title light">Invited Speakers</h2>
          <div className="divider"></div>
          <p className="section-desc light">
            MathConnect 2026 brings together distinguished experts from around the world to present recent advances in the mathematical sciences.
          </p>
        </div>
      </section>

      <section id="speakers" className="page-content">
        <div className="section-inner">
          <h3 className="subsection-title">Plenary Speakers</h3>
          <p className="subsection-desc">Distinguished invited speakers giving featured plenary talks.</p>
          <div className="tba-box">
            <div className="tba-icon"></div>
            <div className="tba-badge">TBA</div>
            <h3>Plenary Speakers - To Be Announced</h3>
            <p>Plenary speaker announcements will be made closer to the conference date. Please check back for updates.</p>
          </div>

          <h3 className="subsection-title mt-60">Invited Speakers</h3>
          <p className="subsection-desc">Invited speakers presenting across the five conference themes.</p>
          <div className="tba-box">
            <div className="tba-icon"></div>
            <div className="tba-badge">TBA</div>
            <h3>Invited Speakers - To Be Announced</h3>
            <p>Invited speaker lineup will be published following the abstract submission period.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpeakersPage;

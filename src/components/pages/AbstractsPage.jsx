const dateCards = [
  ["Submission Opens", "May 12, 2026"],
  ["Submission Deadline", "July 20, 2026"],
  ["Acceptance Notification", "~2 weeks after submission"],
  ["Conference Dates", "Dec 14-16, 2026"]
];

function AbstractsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-inner">
          <span className="section-label">Call for Abstracts</span>
          <h2 className="section-title light">Submit Your Abstract</h2>
          <div className="divider"></div>
          <p className="section-desc light">MathConnect 2026 invites submissions from researchers in all thematic areas of the conference.</p>
        </div>
      </section>

      <section id="abstracts">
        <div className="section-inner">
          <div className="dates-grid">
            {dateCards.map(([label, value]) => (
              <div className="date-card" key={label}>
                <div className="date-icon"></div>
                <div className="date-label">{label}</div>
                <div className="date-value">{value}</div>
              </div>
            ))}
          </div>

          <div className="guidelines-box">
            <h3>Abstract Submission Guidelines</h3>
            <ul>
              <li>
                An abstract of <strong>no more than 500 words</strong> should be submitted to the conference secretariat by the deadline.
              </li>
              <li>
                Acceptance of abstracts will be announced after refereeing within <strong>two weeks</strong> after submission.
              </li>
              <li>Source files of abstracts and full-length papers should be prepared in <strong>LaTeX</strong>.</li>
              <li>Submissions must be original and unpublished work not under review elsewhere.</li>
              <li>All submissions will undergo peer review by the Scientific Committee.</li>
              <li>Abstracts should clearly state the research question, methodology, and main results.</li>
              <li>At least one author of each accepted abstract must register for the conference.</li>
            </ul>
          </div>

          <div className="submit-box">
            <h3>Ready to Submit?</h3>
            <p>
              The submission portal opens <strong>May 12, 2026</strong>. Check back then to submit your abstract.
            </p>
            <span className="submit-portal-pill">Portal Opens May 12, 2026</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AbstractsPage;

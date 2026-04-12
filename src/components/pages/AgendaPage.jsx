import { useState } from "react";

const agendaDays = [
  { key: 1, label: "Day 1 - Dec 14" },
  { key: 2, label: "Day 2 - Dec 15" },
  { key: 3, label: "Day 3 - Dec 16" }
];

function AgendaPage() {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-inner">
          <span className="section-label">Schedule</span>
          <h2 className="section-title light">Conference Agenda</h2>
          <div className="divider"></div>
          <p className="section-desc light">MathConnect 2026 spans three full days - December 14, 15, and 16, 2026.</p>
        </div>
      </section>

      <section id="agenda">
        <div className="section-inner">
          <div className="agenda-tabs">
            {agendaDays.map((day) => (
              <button
                key={day.key}
                type="button"
                className={`agenda-tab ${activeDay === day.key ? "active" : ""}`}
                onClick={() => setActiveDay(day.key)}
              >
                {day.label}
              </button>
            ))}
          </div>
          <div className="agenda-tba">
            <h3>Full Program - Coming Soon</h3>
            <p>The conference program and detailed schedule are currently being finalized. Updates will be posted here as sessions are confirmed.</p>
            <div className="tba-badge">TO BE ANNOUNCED</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgendaPage;

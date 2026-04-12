const steeringCommittee = [
  ["Ali Al-Shaikhi", "Vice President of Research and Innovation"],
  ["Mamdouh Al-Harthi", "Dean of Research"],
  ["Abdullah Sultan", "Dean, CCM"],
  ["Monther Alfuraidan", "Mathematics Chair"],
  ["Ashfaque Bokhari", "Steering Member"],
  ["Fahd Alzahrani", "Director, KIKX"]
];

const scientificCommittee = [
  ["Monther Alfuraidan", "Chair (Prof.)", true],
  ["Ashfaque Bokhari", "Co-Chair (Prof.)", true],
  ["Abdelslam Mimouni", "Prof."],
  ["Anatoly Alikhanov", "Dr."],
  ["Khaled Furati", "Prof."],
  ["Majdouline Bourji", "Dr."]
];

const technicalCommittee = [
  ["Monther Alfuraidan", "KFUPM, Saudi Arabia"],
  ["Ashfaque Bokhari", "KFUPM, Saudi Arabia"],
  ["Anatoly Alikhanov", "KFUPM, Saudi Arabia"],
  ["Majdouline Bourji", "KFUPM, Saudi Arabia"]
];

const organizingCommittee = [
  ["Monther Alfuraidan", "Mathematics Chair", true],
  ["Abdeslam Mimouni", "Organizing Member"],
  ["Ashfaque Bokhari", "Organizing Member"],
  ["Anatoly Alikhanov", "Organizing Member"],
  ["Khaled Furati", "Organizing Member"],
  ["Majdouline Bourji", "Organizing Member"],
  ["Shahzad Sarwar", "Organizing Member"]
];

function CommitteeCard({ name, role, chair }) {
  return (
    <div className={`committee-card ${chair ? "chair" : ""}`}>
      <div className="c-name">{name}</div>
      <div className="c-role">{role}</div>
    </div>
  );
}

function CommitteeGrid({ members }) {
  return (
    <div className="committee-grid">
      {members.map(([name, role, chair = false]) => (
        <CommitteeCard key={`${name}-${role}`} name={name} role={role} chair={chair} />
      ))}
    </div>
  );
}

function CommitteePage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-inner">
          <span className="section-label">Organization</span>
          <h2 className="section-title light">Conference Committees</h2>
          <div className="divider"></div>
        </div>
      </section>

      <section id="committee">
        <div className="section-inner">
          <div className="committee-section">
            <h3>Steering Committee</h3>
            <CommitteeGrid members={steeringCommittee} />
          </div>

          <div className="committee-section">
            <h3>Scientific Committee</h3>
            <CommitteeGrid members={scientificCommittee} />
          </div>

          <div className="committee-section">
            <h3>Technical Program Committee</h3>
            <CommitteeGrid members={technicalCommittee} />
          </div>

          <div className="committee-section">
            <h3>Organizing Committee (Local)</h3>
            <CommitteeGrid members={organizingCommittee} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommitteePage;

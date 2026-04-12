const themes = [
  {
    title: "Graphs, Combinatorics and Cryptography",
    description:
      "Discrete structures, algorithmic thinking, and information security intersect. Research spanning structural combinatorics, complex networks, and cryptographic theory."
  },
  {
    title: "Analytical and Modelling Applications",
    description:
      "Analytical methods for describing complex systems. Mathematical modelling translates real-world phenomena into rigorous frameworks for qualitative and quantitative insight."
  },
  {
    title: "Linear Algebra and Applications",
    description:
      "Spectral theory, matrix analysis, numerical algorithms, and large-scale computation for high-dimensional and data-intensive challenges."
  },
  {
    title: "Stochastic Processes and Applications",
    description:
      "Probabilistic modelling and the mathematical study of uncertainty in finance, physics, biology, and engineering."
  },
  {
    title: "ML, Optimization, Statistics and Data Analytics",
    description:
      "Mathematical foundations of learning algorithms, optimization techniques, and statistical inference driving modern AI and data science."
  }
];

function HomePage({ showPage, countdown }) {
  return (
    <div className="page page-visible" id="page-home">
      <div className="hero">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-logo-lockup">
            <img src="/Mathconnect.png" alt="MathConnect conference identity" />
          </div>
          <div className="hero-badge">2nd International Conference - KFUPM, Saudi Arabia</div>
          <h1>
            International Conference of
            <br />
            <span>Mathematics and its Applications</span>
          </h1>
          <div className="hero-sub">A research-first gathering connecting rigorous mathematics with high-impact applications.</div>
          <div className="hero-date">December 14 - 16, 2026</div>
          <div className="hero-venue">King Fahd University of Petroleum and Minerals - Dhahran, Saudi Arabia</div>
          <div className="hero-btns">
            <button type="button" className="btn-primary" onClick={() => showPage("abstracts")}>
              Submit Abstract
            </button>
            <button type="button" className="btn-outline" onClick={() => showPage("registration")}>
              Register Now
            </button>
          </div>
        </div>

        <div className="hero-countdown">
          <div className="count-box">
            <span className="count-num">{countdown.days}</span>
            <div className="count-label">Days</div>
          </div>
          <div className="count-box">
            <span className="count-num">{countdown.hours}</span>
            <div className="count-label">Hours</div>
          </div>
          <div className="count-box">
            <span className="count-num">{countdown.mins}</span>
            <div className="count-label">Minutes</div>
          </div>
          <div className="count-box">
            <span className="count-num">{countdown.secs}</span>
            <div className="count-label">Seconds</div>
          </div>
        </div>
      </div>

      <section id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-label">About the Conference</span>
              <h2 className="section-title">
                Where Mathematics
                <br />
                Meets Application
              </h2>
              <div className="divider"></div>
              <p>
                MathConnect 2026 marks the second edition of the MathConnect conference series, following the successful inaugural meeting held two years ago. The conference provides a dynamic forum where mathematicians, researchers, and practitioners can present and discuss recent advances across a broad spectrum of mathematical sciences.
              </p>
              <p>
                A central objective is to strengthen the dialogue between fundamental mathematical research and its applications in science, engineering, finance, and emerging technological domains. By bringing together experts from diverse mathematical traditions, MathConnect 2026 stimulates exchange of ideas and promotes new perspectives at the interface between theory and practice.
              </p>
              <p>
                The conference also fosters interdisciplinary collaborations and encourages exploration of emerging research directions, while inspiring early-career researchers and students through exposure to leading scholars.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-box">
                <span className="stat-num">3</span>
                <div className="stat-label">Conference Days</div>
              </div>
              <div className="stat-box gold">
                <span className="stat-num">5</span>
                <div className="stat-label">Thematic Tracks</div>
              </div>
              <div className="stat-box gold">
                <span className="stat-num">500</span>
                <div className="stat-label">Word Abstract Limit</div>
              </div>
              <div className="stat-box">
                <span className="stat-num">2nd</span>
                <div className="stat-label">Edition</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="themes">
        <div className="section-inner">
          <div className="text-centered">
            <span className="section-label">Scientific Program</span>
            <h2 className="section-title">Conference Themes</h2>
            <div className="divider centered"></div>
            <p className="section-desc section-desc-centered">
              The scientific program is organized around thematic directions reflecting the depth of modern mathematical research and its growing interdisciplinary reach.
            </p>
          </div>

          <div className="themes-grid">
            {themes.map((theme) => (
              <div className="theme-card" key={theme.title}>
                <div className="theme-icon"></div>
                <h3>{theme.title}</h3>
                <p>{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="org-strip-section">
        <div className="section-inner">
          <div className="org-strip">
            <div className="org-strip-label">Organized by</div>
            <div className="org-chip">KFUPM - Department of Mathematics</div>
            <div className="org-chip">College of Computing and Mathematics (CCM)</div>
            <div className="org-chip">KIKX Initiative</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

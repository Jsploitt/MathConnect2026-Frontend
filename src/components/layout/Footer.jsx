function Footer({ showPage }) {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/Mathconnect.png" alt="MathConnect logo" /> Math<span>Connect</span> 2026
            </div>
            <p>
              2nd International Conference of Mathematics and its Applications.
              <br />
              December 14-16, 2026 - KFUPM, Dhahran, Saudi Arabia.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li>
                <button type="button" onClick={() => showPage("home")}>Home</button>
              </li>
              <li>
                <button type="button" onClick={() => showPage("speakers")}>Speakers</button>
              </li>
              <li>
                <button type="button" onClick={() => showPage("agenda")}>Agenda</button>
              </li>
              <li>
                <button type="button" onClick={() => showPage("committee")}>Committees</button>
              </li>
              <li>
                <button type="button" onClick={() => showPage("abstracts")}>Call for Abstracts</button>
              </li>
              <li>
                <button type="button" onClick={() => showPage("venue")}>Venue</button>
              </li>
              <li>
                <button type="button" onClick={() => showPage("registration")}>Registration</button>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:mathconnect2026@kfupm.edu.sa">mathconnect2026@kfupm.edu.sa</a>
              </li>
              <li>
                <a href="https://www.kfupm.edu.sa" target="_blank" rel="noreferrer">
                  kfupm.edu.sa
                </a>
              </li>
            </ul>
            <h4 className="footer-subheading">Conference Dates</h4>
            <ul>
              <li><span>Dec 14, 2026 - Day 1</span></li>
              <li><span>Dec 15, 2026 - Day 2</span></li>
              <li><span>Dec 16, 2026 - Day 3</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright 2026 MathConnect. Organized by KFUPM Department of Mathematics.</p>
          <a href="https://www.kfupm.edu.sa" target="_blank" rel="noreferrer">
            KFUPM
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

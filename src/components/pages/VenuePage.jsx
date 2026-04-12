function VenuePage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-inner">
          <span className="section-label">Location</span>
          <h2 className="section-title light">Venue and Travel</h2>
          <div className="divider"></div>
          <p className="section-desc light">
            MathConnect 2026 will be held at King Fahd University of Petroleum and Minerals in Dhahran, Saudi Arabia.
          </p>
        </div>
      </section>

      <section id="venue">
        <div className="section-inner">
          <div className="venue-grid">
            <div>
              <div className="venue-info-block">
                <h4>Conference Venue</h4>
                <p>
                  <strong>King Fahd University of Petroleum and Minerals (KFUPM)</strong>
                  <br />
                  Dhahran, Eastern Province
                  <br />
                  Kingdom of Saudi Arabia
                </p>
              </div>

              <div className="venue-info-block">
                <h4>Getting There</h4>
                <ul>
                  <li>The nearest international airport is <strong>King Fahd International Airport (KFIA)</strong>, around 45 km away.</li>
                  <li>Dhahran is well connected by road to Dammam, Al Khobar, and other major Eastern Province cities.</li>
                  <li>Hotel and accommodation information will be published closer to the conference date.</li>
                </ul>
              </div>

              <div className="venue-info-block">
                <h4>Visa Information</h4>
                <p>
                  International attendees requiring a visa to enter the Kingdom of Saudi Arabia should begin the application process well in advance. Detailed guidance on visa application procedures will be available soon.
                </p>
                <p className="extra-gap-top">
                  <strong>TBD</strong> - Visa support letter requests and additional information will be provided.
                </p>
              </div>

              <div className="venue-info-block">
                <h4>Accommodation</h4>
                <p>
                  A list of recommended hotels near the venue and accommodation options close to the event will be shared here once finalized.
                </p>
                <p className="extra-gap-top">
                  <strong>TBD</strong> - Accommodation recommendations coming soon.
                </p>
              </div>
            </div>

            <div>
              <div className="venue-map">
                <div className="map-icon"></div>
                <p>King Fahd University of Petroleum and Minerals</p>
                <p className="venue-map-sub">Dhahran, Saudi Arabia</p>
                <a
                  href="https://maps.google.com/?q=King+Fahd+University+of+Petroleum+and+Minerals"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Google Maps
                </a>
              </div>

              <div className="venue-info-block venue-gap-top">
                <h4>About KFUPM</h4>
                <p>
                  King Fahd University of Petroleum and Minerals is one of the leading universities in the Arab world and a premier destination for research in science, engineering, and mathematics. The campus in Dhahran offers world-class facilities for academic conferences.
                </p>
              </div>

              <div className="venue-info-block">
                <h4>Weather in December</h4>
                <p>
                  Dhahran in December enjoys mild, pleasant weather. Expect temperatures between <strong>12-24C</strong> with little to no rainfall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VenuePage;

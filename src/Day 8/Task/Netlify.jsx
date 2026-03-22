import React from 'react';
import './style.css';

const Netlify = () => {
  return (
    <div className="startup-root">
      {/* 1. HERO & STACKED NAV */}
      <header className="hero-section">
        <nav className="navbar-stacked">
          <div className="container">
            <div className="nav-links-row">
              <a href="#features">Home</a>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#team">Our Team</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="nav-logo-row">Startup 3</div>
          </div>
        </nav>

        <div className="container hero-content">
          <h1>Forget About Code</h1>
          <p>Startup Framework gives you complete freedom over your creative process — you don't have to think about any technical aspects. There are no limits and absolutely no coding.</p>
          <div className="hero-buttons">
            <button className="btn-cyan">Create an Account</button>
          </div>
        </div>
      </header>

      {/* 2. CLIENT BRANDS */}
      <section className="brands-strip">
        <div className="container brands-flex">
          <div className="brand">Google</div>
          <div className="brand">Netflix</div>
          <div className="brand">Microsoft</div>
          <div className="brand">Airbnb</div>
        </div>
      </section>

      {/* 3. MACBOOK FEATURE */}
      <section id="features" className="feature-block">
        <div className="container grid-2">
          <div className="feature-text">
            <h2>Powerful Generator and Free Figma Sources</h2>
            <p>Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style.</p>
          </div>
          <div className="feature-visual">
            <div className="macbook-mockup">Macbook Pro</div>
          </div>
        </div>
      </section>

      {/* 4. VIDEO FEATURE */}
      <section className="feature-block reverse">
        <div className="container grid-2">
          <div className="feature-text">
            <h2>We Create Something New</h2>
            <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
            <div className="icon-list">
              <div className="icon-item">
                <span className="icon-diamond">◈</span>
                <div>
                  <h4>30 NEW FEATURE PAGES</h4>
                  <p>Startup Framework contains components and complex blocks.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-visual">
            <div className="video-placeholder">
              <div className="play-button">▶</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Our Happy Clients</h2>
          <div className="testi-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="testi-card">
                <p>"Get a fully retina ready site when you build with Startup Framework. Websites look sharper."</p>
                <div className="user-info">
                  <div className="avatar"></div>
                  <span>Rayhan Curran</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LAST WORKS (PORTFOLIO) */}
      <section className="works">
        <div className="container">
          <div className="works-header">
            <h2>Last Works</h2>
            <button className="btn-outline-white">View all Works</button>
          </div>
          <div className="works-grid">
            <div className="work-card"><span>UI KIT</span><h3>Mozart Project</h3></div>
            <div className="work-card"><span>FRAMEWORK</span><h3>Startup Framework 2.0</h3></div>
            <div className="work-card"><span>PHOTOS</span><h3>From the Sky</h3></div>
            <div className="work-card"><span>PICTURES</span><h3>Air Forces</h3></div>
          </div>
        </div>
      </section>

      {/* 7. TEAM SECTION */}
      <section id="team" className="team-section">
        <div className="container">
          <h2 className="section-title">Startup Crew</h2>
          <div className="team-grid">
            {['Leah Salomon', 'Colin Timmons', 'Miguel Osborne', 'Taylor Simon', 'Steven MacAlister'].map(name => (
              <div key={name} className="team-member">
                <div className="member-photo"></div>
                <h4>{name}</h4>
                <p>Designer / Developer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRICING */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <h2 className="section-title text-white">Plans & Pricing</h2>
          <div className="price-grid">
            <PriceCard type="Starter" price="9.99" />
            <PriceCard type="Professional" price="19.99" active={true} />
            <PriceCard type="Team" price="49.99" />
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer id="contact" className="main-footer">
        <div className="container foot-content">
          <h3>Startup3</h3>
          <div className="foot-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="container">
          <hr className="footer-line" />
          <p className="copyright">© 2026 Designmodo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const PriceCard = ({ type, price, active }) => (
  <div className={`price-card ${active ? 'active' : ''}`}>
    <h4>{type}</h4>
    <div className="amt">${price}<span>/mo</span></div>
    <ul>
      <li>2 GB of space</li>
      <li>14 days of backups</li>
      <li>Social integrations</li>
    </ul>
    <button className={active ? 'btn-cyan w-full' : 'btn-outline-dark w-full'}>Get Started</button>
  </div>
);

export default Netlify;
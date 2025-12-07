import React from "react";

/*
  App.jsx — PackNgo landing (rewritten)
  - Each destination now has its own image (use images in public/)
  - Includes fallback to /card-placeholder.jpg if an image fails to load
  - Keeps original class names so it works with your existing App.css
  - Add or change image filenames to match what's actually in your public/ folder
*/

export default function App() {
  const features = [
    {
      title: "Interest-Based\nMatching",
      desc: "Find travel partners who share your passion and travel style.",
      icon: "★",
    },
    {
      title: "Verified Solo Traveler Safety",
      desc: "Rigorous verification to build a safe community.",
      icon: "✔",
    },
    {
      title: "AI Chatbot Travel Assistant",
      desc: "Get travel guidance, local insights, and itineraries.",
      icon: "🤖",
    },
    {
      title: "Curated Destination Ideas",
      desc: "Destination ideas and trip inspiration for solo travelers.",
      icon: "🗺",
    },
  ];

  // Each destination has its own "img" path (place these files in public/)
  const destinations = [
    { name: "Santorini, Greece", likes: "9.3k Likes", img: "/santorini.jpg" },
    { name: "Ha Long Bay, Vietnam", likes: "8.7k Likes", img: "/halong.jpg" },
    { name: "Bagan, Myanmar", likes: "6.2k Likes", img: "/bagan.jpg" },
    { name: "Cappadocia, Turkey", likes: "10.3k Likes", img: "/cappadocia.jpg" },
    { name: "Kyoto, Japan", likes: "7.8k Likes",  img: "/kyoto.jpg" },
    { name: "Patagonia, Chile", likes: "5.9k Likes", img: "/patagonia.jpg" },
    { name: "Rome, Italy", likes: "12.1k Likes", img: "/rome.jpg" },
    { name: "Queenstown, New Zealand", likes: "4.4k Likes",  img: "/queestowm.jpg" },
  ];

  const travelers = [
    { initials: "ER", name: "Elena Rodriguez", tag: "Photography" },
    { initials: "MC", name: "Marcus Chen", tag: "Hiking" },
    { initials: "SK", name: "Sophia Kim", tag: "Culinary Tours" },
    { initials: "DL", name: "David Lee", tag: "Adventure Sports" },
    { initials: "CD", name: "Chloe Dubois", tag: "Art & Culture" },
    { initials: "OS", name: "Omar Sharif", tag: "History" },
  ];

  // helper: render image with fallback
  const Img = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="dest-img"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/traveler.jpg";
      }}
    />
  );

  return (
    <div className="app">
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <div className="logo">P</div>
            <span className="brand-text">PackNgo</span>
          </div>

          <nav className="nav-links">
            <a href="#communitypage">Community Page</a>
            <a href=" http://localhost:5177/">Destinations</a>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
          </nav>

          <div className="nav-actions">
            <input className="search" placeholder="Search destinations..." />
            <button className="btn outline" onClick={() => window.location.href = " http://localhost:5175/"}>
  Sign in
</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-content container">
            <h1>Find Your Solo Adventure Partner</h1>
            <p className="sub">
              Connect with like-minded solo travelers and explore the world together safely, with shared
              interests and AI-powered guidance.
            </p>
            <div className="hero-ctas">
              <button className="btn primary">Find Your Solo Match</button>
              <button className="btn ghost">Explore Features</button>
            </div>
          </div>
        </section>

        <section id="features" className="container section features">
          <h2 className="section-title">How PackNgo Works</h2>
          <div className="grid features-grid">
            {features.map((f, i) => (
              <div key={i} className="card feature-card">
                <div className="icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="destinations" className="container section">
          <div className="section-head">
            <h2 className="section-title">Featured Destinations</h2>
            <button className="btn outline small">View All Destinations</button>
          </div>

          <div className="grid dest-grid">
            {destinations.map((d, i) => (
              <article key={i} className="dest-card">
                {/* show unique image for each destination */}
                <Img src={d.img} alt={d.name} />
                <div className="dest-info">
                  <div className="dest-name">{d.name}</div>
                  <div className="dest-meta">{d.price} • {d.likes}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container section">
          <div className="section-head">
            <h2 className="section-title">Traveler Spotlights</h2>
            <button className="btn outline small">Join the Community</button> 
          </div>

          <div className="grid traveler-grid">
            {travelers.map((t, i) => (
              <div key={i} className="card traveler-card">
                <div className="avatar">{t.initials}</div>
                <div className="traveler-name">{t.name}</div>
                <div className="traveler-tag">{t.tag}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="container section two-col">
          <div className="card safety">
            <h3>Your Safety, Our Priority</h3>
            <p>SoloMatch employs rigorous safety verification measures to ensure every connection is trustworthy. Travel confidently, knowing you're part of a secure and supportive community.</p>
            <button className="btn outline">Learn More About Safety</button>
          </div>

          <div className="card ai">
            <h3>Your Personal AI Travel Assistant</h3>
            <p>Need itinerary ideas, local tips, or packing advice? Our AI chatbot is available 24/7 to provide personalized guidance, making your solo travel planning seamless and stress-free.</p>
            <button className="btn primary">Chat with AI Guide</button>
          </div>
        </section>

        <section id="testimonials" className="container section">
          <h2 className="section-title">What Our Travelers Say</h2>
          <div className="grid testimonial-grid">
            {[1,2,3].map(i => (
              <div key={i} className="card testimonial">
                <div className="t-head">
                  <div>
                    <div className="t-name">Jessica L.</div>
                    <div className="t-loc">New York, USA</div>
                  </div>
                  <div className="stars">★★★★★</div>
                </div>
                <p className="t-text">"SoloMatch helped me find the perfect travel buddy for my trip to Patagonia! Highly recommend for any solo traveler."</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="subscribe card">
            <h3>Join Our Solo Traveler Community!</h3>
            <p>Subscribe for exclusive travel tips, destination alerts, and stories from our community.</p>
            <div className="subscribe-row">
              <input placeholder="Enter your email" />
              <button className="btn primary">Subscribe</button>
            </div>
            <div className="copyright">© 2025 PackNgo</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from "react";

const destinations = [
  { title: "Kyoto, Japan", img: "/kyoto.jpg", desc: "Immerse yourself in ancient traditions and modern serenity." },
  { title: "Patagonia, Chile", img: "/patagonia.jpg", desc: "Conquer epic landscapes and untouched wilderness." },
  { title: "Marrakech, Morocco", img: "/Marrakech.webp", desc: "Lose yourself in vibrant souks and rich cultural tapestry." },
  { title: "Reykjavik, Iceland", img: "/Reykjavik.jpg", desc: "Experience the magic of the Northern Lights and volcanic landscapes." },
  { title: "Costa Rica", img: "/costarika.jpg", desc: "Adventure through biodiversity and pristine nature." },
  { title: "Rome, Italy", img: "/rome.jpg", desc: "Walk through history and savor exquisite cuisine." },
  { title: "Queenstown, New Zealand", img: "/queenstown.jpg", desc: "Thrill-seeking capital amidst stunning natural backdrops." },
  { title: "Seville, Spain", img: "/seville.webp", desc: "Experience passion of flamenco and Moorish grandeur." },
];

const collections = [
  { title: "Adventure Hubs", img: "/adventurehubs.webp", subtitle: "For adrenaline seekers and thrill chasers" },
  { title: "Cultural Immersion", img: "/culturalimmersion.jpg", subtitle: "Dive deep into local traditions and history" },
  { title: "Relaxing Escapes", img: "/relaxing.webp", subtitle: "Unwind in serene landscapes and peaceful retreats" },
  { title: "Urban Explorations", img: "/urban.webp", subtitle: "Discover the hidden gems of the world's greatest cities" },
  { title: "Wildlife & Nature", img: "/nature.jpg", subtitle: "Encounters with untamed landscapes and animals" },
];

const highlights = [
  "Lisbon, Portugal",
  "Chiang Mai, Thailand",
  "Vancouver, Canada",
  "Dublin, Ireland",
  "Helsinki, Finland",
  "Seoul, South Korea",
];

export default function App() {
  return (
    <div className="page-root">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <div className="logo">P</div>
            <div className="brand-name">PackNgo</div>
          </div>

          <nav className="navlinks">
            <a href="#">Traveler Profiles</a>
            <a href="#" className="accent">Destinations</a>
            <a href="#">Features</a>
            <a href="#">Testimonials</a>
          </nav>

          <div className="search">
            <input placeholder="Search destinations..." />
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <h1>Unleash Your Next<br />Solo Adventure</h1>
          <p className="lead">Explore breathtaking destinations curated for independent travelers. Find your perfect journey, safely and authentically.</p>
          <button className="btn-cta">Start Exploring</button>
        </div>
      </section>

      <main>
        <section className="container section featured">
          <h2 className="section-title">Featured Destinations</h2>
          <div className="grid dest-grid">
            {destinations.map((d, i) => (
              <article className="dest-card" key={i}>
                <div className="img-wrap">
                  <img src={d.img} alt={d.title} />
                </div>
                <div className="dest-body">
                  <h3>{d.title}</h3>
                  <p className="muted">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container section collections">
          <h2 className="section-title">Curated Collections</h2>
          <div className="grid collection-grid">
            {collections.map((c, i) => (
              <div className="collection-card" key={i}>
                <img src={c.img} alt={c.title} />
                <div className="collection-overlay">
                  <h4>{c.title}</h4>
                  <p className="muted small">{c.subtitle}</p>
                  <a className="explore">Explore Collection →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container section highlights">
          <h2 className="section-title">Solo-Friendly Highlights</h2>
          <p className="muted center">Discover places renowned for their welcoming atmosphere, safety, and ease of solo exploration.</p>

          <div className="grid highlight-grid">
            {highlights.map((h, i) => (
              <div className="highlight-card" key={i}>
                <div className="icon">★</div>
                <div className="hl-title">{h}</div>
                <div className="muted small">Known for its safety and welcoming locals.</div>
              </div>
            ))}
          </div>
        </section>

        <section className="container section cta-card-wrap">
          <div className="cta-card">
            <h3>Ready to Find Your Travel Partner?</h3>
            <p className="muted">Connect with like-minded solo travelers for shared adventures, safety, and unforgettable experiences. Your next journey starts here.</p>
            <button className="btn-cta alt">Find Your Match ✈︎</button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="copy">© 2025 PackNgo</div>
          <div className="socials">🐦 📸 ⚙</div>
        </div>
      </footer>
    </div>
  );
}

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      {/* ============================================================
          HERO SECTION
          TODO: Replace the name, tagline, and button text with yours.
          ============================================================ */}
      <section className="hero">
        <h1>Sunshine Coast Grill</h1>
        <p className="tagline">A taste of the coast in every bite.</p>
        <Link to="/menu" className="cta-button">
          View Our Menu
        </Link>
      </section>

      {/* ============================================================
          WELCOME SECTION
          TODO: Write 1-2 paragraphs about YOUR restaurant.
          What makes it special? What's your story?
          ============================================================ */}
      <section className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome</h2>
          <p>
            Sunshine Coast Grill is all about chill beach vibes and really good food. 
            We serve fresh seafood like grilled mahi and fried shrimp, plus tacos, sandwiches, and sides that hit every time.
          </p>
          <p style={{ marginTop: "1rem" }}>
            What makes us different is the Florida-style flavor and relaxed atmosphere it feels like you’re eating by the ocean. 
            If you want tasty food, good vibes, and something quick but still really good, this is the place to be.
          </p>
        </div>
        <div className="welcome-image">
          {/* TODO: Replace with an <img> tag once you add images in Week 4 */}
          
          <img src="coastalview.jpg" alt="Amazing View at Sunshine Coast Grill" />
        </div>
      </section>

      {/* ============================================================
          FEATURE CARDS
          TODO: Change the icons, titles, and descriptions below
          to highlight 3 things that make YOUR restaurant special.
          ============================================================ */}
      <section>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>Fresh Coastal Seafood</h3>
            <p>Enjoy fresh, flavorful seafood like grilled mahi and crispy shrimp made with a Florida style twist.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Laid Back Beach Vibes</h3>
            <p>Relax and enjoy a chill, beach-inspired atmosphere that makes every visit feel like a vacation.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Something for Everyone</h3>
            <p>From tacos and sandwiches to sides and smoothies, there’s something on the menu for everyone.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

function About() {
  return (
    <div className="page">
      {/* ============================================================
          ABOUT HEADER
          TODO: Change the heading and subtitle for YOUR restaurant.
          ============================================================ */}
      <div className="about-header">
        <h1>About Sunshine Coast Grill</h1>
        <p className="subtitle">A taste of the coast in every bite.</p>
      </div>

      {/* ============================================================
          YOUR STORY
          TODO: Write 2-3 paragraphs telling YOUR restaurant's story.
          Be creative! You can make it all up. Think about:
          - How did the restaurant start?
          - Who founded it and why?
          - What is the restaurant's mission or philosophy?
          ============================================================ */}
      <div className="about-story">
        <p>
          Sunshine Coast Grill was founded by Dyllon Houghton, inspired by the laid-back lifestyle and bold flavors of Florida’s coast. 
          The goal was simple, create a place where people could enjoy fresh seafood and feel like they’re on a beach vacation, even if they’re just grabbing a quick meal.
        </p>
        <p>
          Over time, Sunshine Coast Grill grew into a local favorite known for its grilled mahi, crispy shrimp, and flavorful tacos. 
          Like any new business, there were challenges, but the focus on quality food and a great atmosphere helped it stand out. 
          Today, it’s known for bringing real coastal flavor and good vibes to every customer.
        </p>
        <p>
          The mission is to serve great food in a fun, relaxed environment where everyone feels welcome. 
          Whether you’re coming in with family or friends, Sunshine Coast Grill is all about good energy, good food, and making people want to come back again.
        </p>
        <div className="about-image-wrapper">
          <img src="/daytona-boardwalk.jpg" alt="Daytona boardwalk scene" className="about-image" />
        </div>
      </div>

      <div className="about-divider"></div>

      {/* ============================================================
          MEET THE TEAM
          TODO: Create 2-3 fictional team members for YOUR restaurant.
          Change the emoji, name, role, and bio for each person.
          ============================================================ */}
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👨🏽‍💼</div>
            <h3>Dyllon Houghton</h3>
            <p className="role">Owner</p>
            <p>Dyllon is the visionary behind Sunshine Coast Grill, bringing his passion for coastal cuisine and community to life. 
              He believes in creating a welcoming space where everyone can enjoy delicious food and good vibes.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨🏿‍💼</div>
            <h3>Barack Obama</h3>
            <p className="role">Restaurant Manager</p>
            <p>Barack is dedicated to ensuring every guest has a memorable experience at Sunshine Coast Grill. 
              With a background in hospitality, he brings a friendly smile and a commitment to excellent service.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨🏻‍🍳</div>
            <h3>Gordon Ramsay</h3>
            <p className="role">Head Chef</p>
            <p>Gordon is a world renowned chef known for his exceptional culinary skills and high standards. 
              He brings a wealth of experience and creativity to the Sunshine Coast Grill kitchen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

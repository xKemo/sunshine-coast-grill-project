function Location() {
  return (
    <div className="page">
      <div className="location-header">
        <h1>Find Us</h1>
      </div>

      <div className="location-content">
        {/* ============================================================
            LEFT COLUMN: Restaurant info
            TODO: Replace ALL placeholder text with YOUR restaurant's
            address, phone number, and hours of operation.
            ============================================================ */}
        <div className="location-info">
          <h2>Address</h2>
          <p>127 S Ocean Ave, Daytona Beach, FL 32118</p>
          <p>Daytona Beach, FL 32118</p>
          <p className="phone">(352) 431-8561</p>

          <h2>Hours of Operation</h2>
          <div>
            <div className="hours-row">
              <span className="day">Monday – Thursday</span>
              <span className="time">11:00 AM – 10:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Friday</span>
              <span className="time">11:00 AM – 11:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Saturday</span>
              <span className="time">11:00 AM – 11:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Sunday</span>
              <span className="time">11:00 AM – 10:00 PM</span>
            </div>
          </div>

          <h2>Getting Here</h2>
          <p>
            We are located at 127 S Ocean Ave in Daytona Beach, just a short walk from the beach and nearby boardwalk area. 
            Street parking and nearby public parking lots are available, and the location is also accessible via local Votran bus routes along Ocean Avenue.
          </p>

          <div className="location-image-wrapper">
            <img src="/beach-view.jpeg" alt="Beach view near Sunshine Coast Grill" className="location-image location-image-large" />
          </div>
        </div>

        {/* ============================================================
            RIGHT COLUMN: Map
            WEEK 4: Replace the placeholder below with a Google Maps embed.
            Instructions:
            1. Go to Google Maps and search for any address
            2. Click "Share" > "Embed a map"
            3. Copy the src URL from the iframe code
            4. Uncomment the iframe below and paste your URL
            ============================================================ */}
        <div className="map-container">
          <div className="map-placeholder">
            <p>
              <iframe
    title="Restaurant Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.682!2d-81.0089!3d29.2108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6d8b0b6c7c7c7%3A0x0!2s127%20S%20Ocean%20Ave%2C%20Daytona%20Beach%2C%20FL%2032118!5e0!3m2!1sen!2sus!4v0000000000000"
    width="120%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
              <br />
              <small></small>
            </p>
          </div>

          {/* UNCOMMENT THIS in Week 4 and replace the URL:
          <iframe
            title="Restaurant Location"
            src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          */}
        </div>
      </div>
    </div>
  );
}

export default Location;

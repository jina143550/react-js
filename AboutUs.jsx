import './AboutUs.css'

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-container">
        <h1 className="about-title">About Paradise Nursery</h1>
        
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Welcome to Paradise Nursery, where green meets serenity. Founded with a passion 
            for bringing nature closer to people, we have been serving plant enthusiasts and 
            gardening lovers for years. Our mission is to provide high-quality plants that 
            transform your spaces into lush, vibrant sanctuaries.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <p>
            At Paradise Nursery, we specialize in a wide variety of houseplants, from air-purifying 
            varieties to exotic tropical species. Each plant is carefully selected and nurtured to 
            ensure it arrives at your doorstep healthy and ready to thrive. Whether you're a seasoned 
            gardener or just starting your green journey, we have the perfect plant for you.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Commitment</h2>
          <p>
            We are committed to sustainable practices and eco-friendly packaging. Every plant we sell 
            comes with detailed care instructions to help you create a thriving indoor garden. Our 
            expert team is always available to answer your questions and provide guidance on plant care.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="features-list">
            <li>
              <strong>Premium Quality:</strong> Hand-picked, healthy plants from trusted growers
            </li>
            <li>
              <strong>Expert Guidance:</strong> Comprehensive care instructions and customer support
            </li>
            <li>
              <strong>Wide Selection:</strong> Diverse range of indoor and outdoor plants
            </li>
            <li>
              <strong>Sustainable Practices:</strong> Eco-friendly packaging and ethical sourcing
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> We stand behind every plant we sell
            </li>
          </ul>
        </div>

        <div className="about-section mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              To inspire and enable everyone to experience the joy and benefits of living with plants, 
              making green living accessible and enjoyable for all.
            </p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To become the most trusted destination for plant lovers, creating a greener, healthier 
              world one plant at a time.
            </p>
          </div>
        </div>

        <div className="about-section contact-info">
          <h2>Get In Touch</h2>
          <p>
            Have questions or need help choosing the perfect plant? Our team is here to help! 
            Reach out to us and let's grow together.
          </p>
          <div className="contact-details">
            <p>📧 Email: info@paradisenursery.com</p>
            <p>📞 Phone: +1 (555) 123-4567</p>
            <p>📍 Location: 123 Green Street, Garden City, GC 12345</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

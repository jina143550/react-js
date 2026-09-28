<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>TravelWorld - Contact Us</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- Navigation Bar -->
  <nav class="navbar">
    <div class="logo">🌍 TravelWorld</div>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html" class="active">Contact Us</a></li>
      <li class="dropdown">
        <a href="#">Recommendations ▾</a>
        <ul class="dropdown-menu">
          <li><a href="index.html#beaches">Beaches</a></li>
          <li><a href="index.html#temples">Temples</a></li>
          <li><a href="index.html#countries">Countries</a></li>
        </ul>
      </li>
    </ul>
  </nav>

  <section class="page-hero">
    <h1>Contact Us</h1>
    <p>Have a question or suggestion? We'd love to hear from you!</p>
  </section>

  <section class="page-content">
    <form class="contact-form" onsubmit="handleSubmit(event)">
      <label>Full Name</label>
      <input type="text" placeholder="Your full name" required />

      <label>Email Address</label>
      <input type="email" placeholder="your@email.com" required />

      <label>Subject</label>
      <input type="text" placeholder="What is this about?" required />

      <label>Message</label>
      <textarea rows="5" placeholder="Write your message here..." required></textarea>

      <button type="submit" class="btn">Send Message</button>
    </form>
    <p id="form-success" class="success-msg" style="display:none;">✅ Message sent successfully!</p>
  </section>

  <footer>
    <p>© 2024 TravelWorld. All rights reserved.</p>
  </footer>

  <script>
    function handleSubmit(event) {
      event.preventDefault();
      event.target.reset();
      document.getElementById('form-success').style.display = 'block';
      setTimeout(() => document.getElementById('form-success').style.display = 'none', 4000);
    }
  </script>

</body>
</html>

<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch with the Kakobuy Spreadsheet team</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form">
            <h2>Send us a Message</h2>
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Your name">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com">
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message"></textarea>
              </div>
              <button type="submit" class="submit-button">Send Message</button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <h2>Contact Information</h2>
            <div class="info-item">
              <h3>Email</h3>
              <p>Placeholder email address</p>
            </div>
            <div class="info-item">
              <h3>Phone</h3>
              <p>Placeholder phone number</p>
            </div>
            <div class="info-item">
              <h3>Address</h3>
              <p>Placeholder address</p>
            </div>
            <div class="info-item">
              <h3>Hours</h3>
              <p>Placeholder business hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Kakobuy Spreadsheet. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
  padding: 80px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #000;
}

.hero p {
  font-size: 24px;
  color: #666;
}

/* Contact Content */
.contact-content {
  padding: 60px 20px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

/* Contact Form */
.contact-form h2 {
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #d4af37;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #8b0000;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background-color: #a00000;
  transform: translateY(-2px);
}

/* Contact Info */
.contact-info h2 {
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin-bottom: 25px;
}

.info-item {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.info-item h3 {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
}

.info-item p {
  font-size: 14px;
  color: #666;
}

/* Footer */
.footer {
  background: #1a1a1a;
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.footer p {
  color: #999;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 32px;
  }

  .hero p {
    font-size: 18px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 24px;
  }

  .hero p {
    font-size: 14px;
  }

  .contact-content {
    padding: 40px 15px;
  }

  .contact-form h2,
  .contact-info h2 {
    font-size: 22px;
  }
}
</style>

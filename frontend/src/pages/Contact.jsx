import '../styles/contact.css';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-page">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-sub">We’d love to hear from you!</p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaPhoneAlt /> <span>+254 711 701 263</span>
          </div>
          <div className="info-item">
            <FaEnvelope /> <span>info@smoothcrunchcafe.com</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt /> <span>Chuka</span>
          </div>

          <h3 className="social-heading">Connect with us</h3>
          <div className="social-links">
            <a
              href="https://wa.me/254117012632"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon whatsapp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/smoothcrunchcafe"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com/@smoothcrunchcafe"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon tiktok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message..." rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

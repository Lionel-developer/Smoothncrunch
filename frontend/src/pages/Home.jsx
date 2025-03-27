import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Hero background images
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

// Gallery images
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';

const heroImages = [hero1, hero2, hero3];
const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(bgInterval);
  }, []);

  return (
    <>
      <div
        className="hero rotating-bg"
        style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
      >
        <div className="hero-text">
          <h1>Smooth and Crunch</h1>
          <p>Where every bite is a celebration</p>
          <Link to="/menu">
            <button>Explore Menu</button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <section className="features" data-aos="fade-up">
        <div className="feature feature-left">
          <h3><span>Custom Cakes</span></h3>
          <p>Birthday, Wedding, Graduation & more.</p>
        </div>
        <div className="feature feature-up">
          <h3><span>Ice Cream</span></h3>
          <p>Silky, smooth scoops of heaven.</p>
        </div>
        <div className="feature feature-right">
          <h3><span>Snacks & Treats</span></h3>
          <p>Crunchy goodness for every craving.</p>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="menu-preview" data-aos="zoom-in-up" data-aos-delay="200">
        <h2>Our Best Bites</h2>
        <div className="menu-items">
          <div className="menu-item">Chocolate Truffle Cake</div>
          <div className="menu-item">Vanilla Almond Scoop</div>
          <div className="menu-item">Strawberry Danish</div>
        </div>
      </section>

      {/* Scatter Gallery */}
      <section className="gallery-scatter" data-aos="fade-up" data-aos-delay="300">
        <h2>Gallery</h2>
        <div className="scatter-grid">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="scatter-card"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="testimonials-carousel" data-aos="fade-up" data-aos-delay="400">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-track">
          <div className="testimonial">“Absolutely delicious! The cake melted in my mouth.” – Jemma</div>
          <div className="testimonial">“The best snack spot in town. Period.” – Malik</div>
          <div className="testimonial">“We had the ice cream bar at our wedding — unforgettable!” – Priya</div>
          <div className="testimonial">“Smooth and Crunch? More like Sweet and Addictive 😍” – Brian</div>
          <div className="testimonial">“Great staff, fresh snacks, and cute vibes all around.” – Lana</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta" data-aos="zoom-in-up" data-aos-delay="500">
        <h2>Ready to taste the magic?</h2>
        <Link to="/orders">
          <button>Order Now</button>
        </Link>
      </section>

      {/* Footer with Social Icons */}
      <footer>
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/smoothcrunchcafe?igsh=NXNwYXcxMG0yaWY2"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <FaTiktok />
          </a>
          <a href="https://wa.me/254117012632" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
        <p style={{ marginTop: '1rem' }}>
          © {new Date().getFullYear()} Smooth and Crunch. All rights reserved.
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254117012632"
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default Home;

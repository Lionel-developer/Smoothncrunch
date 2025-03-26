// src/pages/About.jsx
import '../styles/about.css'; // Ensure this is linked properly

function About() {
  return (
    <section className="about-page">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to Smooth and Crunch! We're passionate about creating delicious treats that
        bring joy to every bite. From custom cakes to silky ice creams and crunchy snacks, we
        aim to delight your taste buds with every bite. Join us on a journey of unforgettable
        flavors and memories.
      </p>
      <div className="about-vision">
        <h2>Our Vision</h2>
        <p>
          Our goal is to create a space where people can experience the perfect blend of sweet
          and savory. We believe that food is more than just nourishment; it’s a celebration of life!
        </p>
      </div>
    </section>
  );
}

export default About;

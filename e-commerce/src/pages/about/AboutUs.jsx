import React from 'react';
import './aboutus.css'; 
import 'font-awesome/css/font-awesome.min.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Legends Choice</h1>
      <p>
        Welcome to Legends Choice, your trusted source for high-quality products and services in e-commerce market. Our mission is to [Your Mission or Values].
      </p>
      <p>
        At Legends Choice, we offer a wide range of products and services that cater to your [Product/Service Category] needs. Whether you're looking for [Specific Products/Services], we've got you covered.
      </p>
      <p>
        Our dedicated team works diligently to ensure that you receive the best products, outstanding customer service, and a seamless shopping experience.
      </p>
      <h2>Connect with Us</h2>
      <div className="social-links">
        <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.youtube.com/yourcompany" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-youtube"></i>
        </a>
        <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook"></i>
        </a>
        {/* Add links to other social media platforms as needed */}
      </div>
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, feel free to reach out to us:</p>
      <p>Email: contact@yourcompany.com</p>
    </div>
  );
};

export default AboutUs;

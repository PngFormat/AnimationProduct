import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
    
        <div className={styles.footerColumn}>
          <h4>About Us</h4>
          <p>We are a leading company in providing top-notch services and products to our clients all around the globe.</p>
        </div>
        <div className={styles.footerColumn}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

    
        <div className={styles.footerColumn}>
          <h4>Follow Us</h4>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" className={styles.socialIcon}>Facebook</a>
            <a href="https://twitter.com" className={styles.socialIcon}>Twitter</a>
            <a href="https://instagram.com" className={styles.socialIcon}>Instagram</a>
            <a href="https://linkedin.com" className={styles.socialIcon}>LinkedIn</a>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter to get the latest updates straight to your inbox!</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" className={styles.emailInput} />
            <button type="submit" className={styles.subscribeButton}>Subscribe</button>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

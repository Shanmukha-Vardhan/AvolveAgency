import React from 'react';
import { Mail, Instagram, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h2 className="footer-cta-title">
                            Looking for professional <br /> website design services?
                        </h2>
                        <p className="footer-cta-desc">
                            Let’s build your website together. Reach out to us and let's start the conversation.
                        </p>
                        <div className="footer-buttons">
                            <a href="https://wa.me/918639146620" className="btn btn-primary">
                                <MessageCircle size={20} /> WhatsApp
                            </a>
                            <a href="mailto:salapuvardhan4@gmail.com" className="btn btn-secondary">
                                <Mail size={20} /> Email Us
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-container">
                        <div className="footer-links-grid">
                            <div>
                                <h3 className="footer-heading">Navigation</h3>
                                <ul className="footer-list">
                                    {['Services', 'Work', 'Process', 'About'].map((item) => (
                                        <li key={item}>
                                            <a href={`#${item.toLowerCase()}`} className="footer-link">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="footer-heading">Socials</h3>
                                <ul className="footer-list">
                                    <li><a href="https://www.instagram.com/avolvestudio/?utm_source=ig_web_button_share_sheet" className="footer-link"><Instagram size={16} /> Instagram</a></li>
                                    <li><a href="https://wa.me/918639146620" className="footer-link"><MessageCircle size={16} /> WhatsApp</a></li>
                                    <li><a href="mailto:salapuvardhan4@gmail.com" className="footer-link"><Mail size={16} /> Email</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright-container">
                        <p className="copyright">
                            © {new Date().getFullYear()} Avolve Agency. All rights reserved.
                        </p>
                        <p className="copyright" style={{ marginTop: '0.5rem' }}>
                            Web design studio in Visakhapatnam, India. Serving clients across India and globally.
                        </p>
                    </div>
                    <p className="copyright">
                        Designed with precision.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

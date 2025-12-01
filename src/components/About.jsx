import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="about-container"
                >
                    <h2 className="about-title">About Avolve</h2>
                    <p className="about-text">
                        Meet the creative minds behind AVOLVE. We design, build and scale websites that convert visitors into customers.
                        As a premier <strong>web design agency</strong> and <strong>branding company in India</strong>, we are passionate about helping startups and established businesses find their unique voice in the digital landscape.
                    </p>
                    <p className="about-text" style={{ marginTop: '1rem' }}>
                        From <strong>custom website development</strong> to full-scale <strong>digital marketing</strong> strategies, our team provides end-to-end solutions.
                        We don't just build websites; we build digital products that drive growth. Whether you are looking for a <strong>freelance web development agency</strong> partner or a dedicated <strong>UI UX design service</strong>, Avolve is here to bring your vision to life.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

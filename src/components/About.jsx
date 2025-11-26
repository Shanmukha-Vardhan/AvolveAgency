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
                        Avolve is a creative web development and UI/UX design agency focused on building modern websites for startups and businesses.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

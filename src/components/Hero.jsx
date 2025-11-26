import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-blob blob-1" />
                <div className="hero-blob blob-2" />
                <div className="hero-blob blob-3" />
            </div>

            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-title"
                >
                    Modern Web Development & <br className="desktop-break" />
                    <span className="text-gradient">UI/UX Design for Growing Brands</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="hero-subtitle"
                >
                    We build fast, SEO-friendly websites and clean UI/UX designs that help businesses grow online.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="hero-buttons"
                >
                    <a href="#work" className="btn btn-primary">
                        View Work
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Contact Us <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

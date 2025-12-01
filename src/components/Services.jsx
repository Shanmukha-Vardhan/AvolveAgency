import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layout, RefreshCw, Server } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Monitor size={32} />,
        title: "WEBSITE DEVELOPMENT",
        description: "We offer custom website development, responsive design, and fast-loading business websites built with modern front-end technologies."
    },
    {
        icon: <Layout size={32} />,
        title: "UI/UX DESIGN",
        description: "Our UI/UX design services focus on clean layouts, user-friendly experiences, and conversion-focused interface design."
    },
    {
        icon: <RefreshCw size={32} />,
        title: "WEBSITE REDESIGN & REVAMP",
        description: "Modernize your outdated site with our website redesign service. We improve aesthetics, performance, and mobile responsiveness."
    },
    {
        icon: <Server size={32} />,
        title: "DEPLOYMENT & HOSTING SETUP",
        description: "Secure, scalable hosting setup and seamless deployment to ensure your business website is always online and performing fast."
    }
];

const Services = () => {
    const handleMouseMove = (e) => {
        const cards = document.getElementsByClassName("service-card");
        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };

    return (
        <section id="services" className="section services-section" onMouseMove={handleMouseMove}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid-2"
                >
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-content">
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <div className="services-seo-content" style={{ marginTop: '4rem', color: 'var(--text-secondary)' }}>
                    <div className="grid-2">
                        <div>
                            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Why Choose AVOLVE?</h3>
                            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                As a leading <strong>web design agency in India</strong>, we specialize in creating high-performance digital experiences.
                                Unlike other <strong>freelance web development agencies</strong>, we combine strategic branding with cutting-edge technology
                                to deliver results. Whether you need a <strong>startup website design</strong> or a complete <strong>business branding service</strong>,
                                our team ensures your digital presence stands out.
                            </p>

                            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Industries We Serve</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                <li>✓ SaaS & Tech Startups</li>
                                <li>✓ E-commerce Brands</li>
                                <li>✓ Healthcare & Medical</li>
                                <li>✓ Real Estate & Construction</li>
                                <li>✓ Educational Institutions</li>
                                <li>✓ Creative Portfolios</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Process</h3>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                                <strong>1. Discovery:</strong> We understand your business goals and target audience.
                            </p>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                                <strong>2. Design:</strong> Our <strong>UI UX design service</strong> team creates stunning, user-centric mockups.
                            </p>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                                <strong>3. Development:</strong> We build using modern tech stacks for speed and SEO.
                            </p>
                            <p style={{ marginBottom: '0', lineHeight: '1.6' }}>
                                <strong>4. Launch & Growth:</strong> We deploy and help you scale with our <strong>digital marketing agency</strong> expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

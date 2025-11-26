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
            </div>
        </section>
    );
};

export default Services;

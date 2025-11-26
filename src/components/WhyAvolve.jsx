import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageSquare, TrendingUp, Layers } from 'lucide-react';
import './WhyAvolve.css';

const features = [
    {
        icon: <Layers size={28} />,
        title: "Minimal & Modern Design",
        description: "Aesthetics that stand out by stripping away the unnecessary."
    },
    {
        icon: <Zap size={28} />,
        title: "Fast Delivery",
        description: "We respect your time. Rapid turnaround without compromising quality."
    },
    {
        icon: <MessageSquare size={28} />,
        title: "Clear Communication",
        description: "No jargon. Just transparent, honest collaboration."
    },
    {
        icon: <TrendingUp size={28} />,
        title: "Growth-Focused Mindset",
        description: "We design with your business goals and conversion in mind."
    }
];

const WhyAvolve = () => {
    return (
        <section className="section why-section">
            <div className="container">
                <div className="grid-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="feature-item"
                        >
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyAvolve;

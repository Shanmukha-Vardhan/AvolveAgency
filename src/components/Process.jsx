import React from 'react';
import { motion } from 'framer-motion';
import './Process.css';

const steps = [
    { number: "01", title: "Understand", description: "We dive deep into your brand and goals." },
    { number: "02", title: "Design", description: "We craft visuals that align with your vision." },
    { number: "03", title: "Build", description: "We develop pixel-perfect, responsive solutions." },
    { number: "04", title: "Launch", description: "We help you go live and make an impact." }
];

const Process = () => {
    return (
        <section id="process" className="section process-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="process-title"
                >
                    Our Process
                </motion.h2>

                <div className="process-grid">
                    {/* Connecting Line (Desktop) */}
                    <div className="process-line" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="process-step"
                        >
                            <div className="step-number-container">
                                <span className="step-number">{step.number}</span>
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        text: "Avolve transformed our digital presence completely. The attention to detail and premium feel they delivered is unmatched.",
        name: "Sarah Jenkins",
        role: "CEO, Lumina Tech",
        initials: "SJ"
    },
    {
        text: "Working with Avolve was seamless. They understood our vision instantly and executed it with precision. Highly recommended.",
        name: "David Chen",
        role: "Founder, Apex Labs",
        initials: "DC"
    },
    {
        text: "The ROI we've seen since launching our new site has been incredible. The design isn't just beautiful, it works.",
        name: "Elena Rodriguez",
        role: "Marketing Director, Velvet Co.",
        initials: "ER"
    }
];

const Testimonials = () => {
    return (
        <section className="section testimonials-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Client Stories
                </motion.h2>

                <div className="grid-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="testimonial-card"
                        >
                            <div>
                                <Quote size={32} className="quote-icon" />
                                <p className="testimonial-text">"{item.text}"</p>
                            </div>
                            <div className="client-info">
                                <div className="client-avatar">{item.initials}</div>
                                <div className="client-details">
                                    <h4>{item.name}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

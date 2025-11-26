import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Most website projects take between 4-8 weeks, depending on complexity. Branding projects usually take 3-5 weeks. We provide a detailed timeline before starting."
    },
    {
        question: "Do you work with startups?",
        answer: "Yes! We love working with ambitious startups. We have specific packages designed to help early-stage companies launch with a premium presence."
    },
    {
        question: "What are your payment terms?",
        answer: "Typically, we require a 50% deposit to secure your slot, with the remaining 50% due upon project completion and launch."
    },
    {
        question: "Do you offer ongoing support?",
        answer: "Absolutely. We offer monthly maintenance packages to ensure your site remains secure, fast, and up-to-date."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section faq-section">
            <div className="container faq-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                    style={{ textAlign: 'center' }}
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <ChevronDown
                                    className={`faq-icon ${activeIndex === index ? 'open' : ''}`}
                                    size={20}
                                />
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="faq-answer"
                                    >
                                        <div className="faq-answer-content">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

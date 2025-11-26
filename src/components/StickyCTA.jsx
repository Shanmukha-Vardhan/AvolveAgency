import React from 'react';
import { MessageCircle } from 'lucide-react';
import './StickyCTA.css';

const StickyCTA = () => {
    return (
        <div className="sticky-cta-container">
            <div className="sticky-cta-text">Book a Call</div>
            <a href="#contact" className="sticky-cta-btn" aria-label="Book a Call">
                <MessageCircle size={24} />
            </a>
        </div>
    );
};

export default StickyCTA;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="logo-container">
                    <a href="#" className="logo">Avolve.</a>
                </div>
                <div className="nav-links">
                    {['Services', 'Work', 'Process', 'About'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                            {item}
                        </a>
                    ))}
                    <a href="#contact" className="nav-cta">
                        Book a Call
                    </a>
                </div>
                <div className="mobile-menu-btn">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu">
                    {['Services', 'Work', 'Process', 'About'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                            {item}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setIsOpen(false)} style={{ color: '#fff', fontWeight: '700' }}>
                        Book a Call
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

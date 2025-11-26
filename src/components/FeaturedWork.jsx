import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './FeaturedWork.css';

// Import project images
import facultyImg from '../assets/FacultyAllocation.png';
import attendanceImg from '../assets/AttendanceCalculator.png';
import gitamImg from '../assets/GitamAttandanceCalculator.png';
import brewenImg from '../assets/BrewenCafe.png';
import ironDistrictImg from '../assets/IronDistrictGym.png';

const projects = [
    {
        title: "Faculty Course Allocator",
        subtitle: "Intelligent Course Management",
        tag: "Web Platform",
        image: facultyImg,
        link: "https://auth-9345d.web.app/login",
        desc: "A role-based web platform that streamlines course assignment for faculty using an intelligent allocation algorithm.",
        stack: "React • Firebase • Firestore • Node.js"
    },
    {
        title: "Worldwide Attendance Calculator",
        subtitle: "Student Utility Tool",
        tag: "Web Tool",
        image: attendanceImg,
        link: "https://gitam-attendance-calculator.web.app",
        desc: "A web tool that visually predicts how many classes any student can safely miss to maintain their attendance goals.",
        stack: "React • Chart.js • Firebase • Node.js"
    },
    {
        title: "Gitam Attendance Calculator",
        subtitle: "University Portal Integration",
        tag: "Automation Tool",
        image: gitamImg,
        link: "https://gitamtracker-8626f.web.app",
        desc: "An automated calculator for GITAM students that instantly parses attendance data directly from the university portal.",
        stack: "React • Firebase • Firestore • Node.js"
    },
    {
        title: "Brewen Café",
        subtitle: "Premium Coffee Brand",
        tag: "Concept Project",
        image: brewenImg,
        link: "https://brewencafe.vercel.app",
        desc: "Concept website project by Avolve Design Studio. Web design & front-end development.",
        stack: "React • Framer Motion • CSS"
    },
    {
        title: "IronDistrict Gym",
        subtitle: "Fitness & Transformation",
        tag: "Concept Project",
        image: ironDistrictImg,
        link: "https://iron-district.vercel.app",
        desc: "Concept website project by Avolve Design Studio. Web design & front-end development.",
        stack: "React • CSS • Animation"
    }
];

const FeaturedWork = () => {
    return (
        <section id="work" className="section work-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Selected Projects
                </motion.h2>

                <div className="grid-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="project-card"
                        >
                            <div className="project-image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </div>
                            <div className="project-overlay">
                                <div className="project-content">
                                    <span className="project-tag">
                                        {project.tag}
                                    </span>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-subtitle">{project.subtitle}</p>
                                    <p className="project-desc-small">{project.desc}</p>
                                    <p className="project-stack">{project.stack}</p>
                                    <a href={project.link} className="project-link">
                                        View Project <ArrowUpRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;

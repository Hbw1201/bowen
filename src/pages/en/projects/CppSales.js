import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

export default function CppSales() {
    const navigate = useNavigate();

    return (
        <section className="project-detail-section">
            <div className="project-detail-card">
                <h1>💻 Personal Project – C++ Sales Management System</h1>

                <p className="project-description">
                    During an internship conducted over the local Hari Raya holiday, I independently developed a simple C++-based sales management system for managing inventory and sales analytics.
                </p>

                <h3>📋 Project Features</h3>
                <ul>
                    <li>Implemented product entry, sales records, inventory search, and daily report functions</li>
                    <li>Used class encapsulation for product and order entities</li>
                    <li>Tested and optimized the logic with real retail scenarios</li>
                </ul>

                <h3>🛠️ Tools & Techniques</h3>
                <ul>
                    <li>C++</li>
                    <li>Object-Oriented Programming (OOP)</li>
                    <li>Class design, inheritance, constructors</li>
                </ul>

                <h3>📚 Personal Gain</h3>
                <p>
                    This project enhanced my understanding of class structures and abstraction in C++, and gave me confidence in using code to solve practical, real-world problems.
                </p>

                <button className="back-button" onClick={() => navigate('/en/projects')}>
                    Back to Projects
                </button>
            </div>
        </section>
    );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const projects = [
    {
        icon: '📘',
        title: 'Research: The application of machine learning in credit risk management',
        description: 'Explored different ML models for credit risk prediction and optimized classification accuracy.',
        tech: ['Random Forest', 'KNN', 'SVM', 'Feature Engineering', 'Cross-validation'],
        path: '/en/projects/hkust'
    },
    {
        icon: '💻',
        title: 'Personal Project: C++ Sales System',
        description: 'Developed a sales management system using C++ during internship to manage inventory and reporting.',
        tech: ['C++', 'Class Design', 'Report Optimization'],
        path: '/en/projects/cpp-sales'
    },
    {
        icon: '📊',
        title: 'Team Project: Car Market Forecast',
        description: 'Predicted 3-year demand using Python models trained on 10+ years of Malaysian car market data.',
        tech: ['Python', 'Data Cleaning', 'Model Visualization'],
        path: '/en/projects/car-forecast'
    }
];

export default function Projects() {
    const navigate = useNavigate();

    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-column">
                {projects.map((project, index) => (
                    <div key={index} className="project-card full-width">
                        <div className="card-header">
                            <h3>{project.icon} {project.title}</h3>
                            <p>{project.description}</p>
                        </div>

                        <div className="tech-tags">
                            {project.tech.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>

                        <div className="card-footer">
                            <button
                                className="detail-button"
                                onClick={() => navigate(project.path)}
                            >
                                View Details →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

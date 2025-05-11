import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

export default function CarForecast() {
    const navigate = useNavigate();

    return (
        <section className="project-detail-section">
            <div className="project-detail-card">
                <h1>🚗 Group Project: Car Market Price Forecast</h1>

                <p className="project-description">
                    Analyzed 10 years of Malaysia’s used car transaction records, using Python for data cleaning, modeling, and visualization.
                </p>

                <h3>📋 Project Overview</h3>
                <ul>
                    <li>Identified key variables affecting price such as brand, year, mileage, and car type</li>
                    <li>Built linear regression and random forest models to predict car price ranges</li>
                    <li>Visualized model outputs to interpret performance and results</li>
                </ul>

                <h3>🛠️ Tools & Techniques</h3>
                <ul>
                    <li>Python (Pandas, Matplotlib, Scikit-learn)</li>
                    <li>Data preprocessing and feature engineering</li>
                    <li>Regression models, ensemble methods, and visualization</li>
                </ul>

                <h3>🤝 Team Collaboration</h3>
                <p>
                    Worked closely with teammates in model development and evaluation. Gained experience in team collaboration and practical data science applications.
                </p>

                <button className="back-button" onClick={() => navigate('/en/projects')}>
                    Back to Projects
                </button>
            </div>
        </section>
    );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

export default function HKUST() {
    const navigate = useNavigate();

    return (
        <section className="project-detail-section">
            <div className="project-detail-card">
                <h1>📘 Research Project – Hong Kong University of Science and Technology</h1>

                <p className="project-description">
                    This research focused on evaluating and comparing different machine learning models for credit risk assessment, and improving classification accuracy through feature selection and model tuning.
                </p>

                <h3>📋 Project Highlights</h3>
                <ul>
                    <li>Compared Random Forest, KNN, and SVM models for classification performance</li>
                    <li>Applied feature engineering, cross-validation, and hyperparameter tuning</li>
                    <li>Implemented a hybrid feature selection strategy combining RF and RFE</li>
                </ul>

                <h3>🛠️ Tools & Techniques</h3>
                <ul>
                    <li>Python & Scikit-learn</li>
                    <li>Random Forest, KNN, SVM</li>
                    <li>Feature selection, cross-validation, visualization</li>
                </ul>

                <h3>📚 Takeaways</h3>
                <p>
                    Strengthened my ability to conduct independent research, optimize models, and present results academically. Improved hands-on skills in machine learning and data processing.
                </p>

                <h3>🔗 Paper Link</h3>
                <a
                    href="https://doi.org/10.54254/2755-2721/112/20251785"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                >
                    https://doi.org/10.54254/2755-2721/112/20251785
                </a>

                <button className="back-button" onClick={() => navigate('/en/projects')}>
                    Back to Projects
                </button>
            </div>
        </section>
    );
}

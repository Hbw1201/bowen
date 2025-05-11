import React from 'react';
import './About.css';

const qaList = [
    {
        icon: '👤',
        question: 'Who am I?',
        answer:
            "I'm Han Bowen, a Computer Science student passionate about machine learning and intelligent systems.",
    },
    {
        icon: '🎓',
        question: 'What am I studying?',
        answer:
            "I'm currently pursuing a Bachelor's degree in Computer Science, with a focus on artificial intelligence. I'm training a machine learning model for pneumonia diagnosis.",
    },
    {
        icon: '💡',
        question: 'What have I learned?',
        answer:
            'I’ve studied machine learning, deep learning, data mining, Python programming, and web development — and I continue to deepen my understanding through hands-on projects.',
    },
    {
        icon: '🎯',
        question: "What's my goal?",
        answer:
            'To build models rooted in real-life scenarios that truly benefit society, making technology better serve every individual.',
    },
];

export default function About() {
    return (
        <section className="about-section">
            <div className="qa-grid">
                {qaList.map((item, index) => (
                    <div key={index} className="qa-card">
                        <h3>{item.icon} {item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

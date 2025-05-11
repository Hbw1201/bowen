import React from 'react';
import './About.css';

const qaList = [
    {
        icon: '👤',
        question: 'Siapa saya?',
        answer: 'Saya Han Bowen, pelajar Sains Komputer yang berminat dalam pembelajaran mesin dan sistem pintar.',
    },
    {
        icon: '🎓',
        question: 'Apa yang saya pelajari?',
        answer: 'Saya sedang mengikuti pengajian dalam Sains Komputer dengan tumpuan kepada kecerdasan buatan. Kini saya sedang melatih model pembelajaran mesin untuk diagnosis pneumonia.',
    },
    {
        icon: '💡',
        question: 'Apa yang telah saya pelajari?',
        answer: 'Saya telah mempelajari pembelajaran mesin, pembelajaran mendalam, perlombongan data, pengaturcaraan Python, dan pembangunan web — serta terus memperdalam pemahaman melalui projek praktikal.',
    },
    {
        icon: '🎯',
        question: 'Apakah matlamat saya?',
        answer: 'Untuk membina model yang berguna dalam senario dunia sebenar dan menjadikan teknologi berkhidmat dengan lebih baik kepada setiap individu.',
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

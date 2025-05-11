import React from 'react';
import { useLocation } from 'react-router-dom';
import './HeroSection.css';

export default function HeroSection() {
    const location = useLocation();
    const lang = location.pathname.startsWith('/zh')
        ? 'zh'
        : location.pathname.startsWith('/ms')
            ? 'ms'
            : 'en';

    const content = {
        en: {
            title: 'Exploring the World of Machine Learning',
            subtitle: "I'm Han Bowen — a computer science student building intelligent systems through data and code."
        },
        zh: {
            title: '探索机器学习的世界',
            subtitle: '我是韩博文，一名专注于数据与算法的计算机学生，热衷于构建智能系统。'
        },
        ms: {
            title: 'Meneroka Dunia Pembelajaran Mesin',
            subtitle: 'Saya Han Bowen, pelajar sains komputer yang membina sistem pintar menggunakan data dan kod.'
        }
    };

    const { title, subtitle } = content[lang];

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <div className="hero-image">
                    <img
                        src={process.env.PUBLIC_URL + '/images/image1.png'}
                        alt="developer illustration"
                    />
                </div>
            </div>
        </section>
    );
}

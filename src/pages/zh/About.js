import React from 'react';
import './About.css';

const qaList = [
    {
        icon: '👤',
        question: '我是谁？',
        answer: '我叫韩博文，是一名热爱机器学习和智能系统的计算机科学专业学生。',
    },
    {
        icon: '🎓',
        question: '我在学习什么？',
        answer: '我目前就读于计算机科学专业，主要学习人工智能方向，目前正在训练一个用于肺炎诊断的机器学习模型。',
    },
    {
        icon: '💡',
        question: '我都学了什么？',
        answer: '我学习了机器学习、深度学习、数据挖掘、Python 编程、网页开发等技能，并不断通过项目实践加深理解。',
    },
    {
        icon: '🎯',
        question: '我的目标是什么？',
        answer: '结合生活实际使用场景，搭建对社会真正有用处的模型，让科技更好地服务每一个人。',
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

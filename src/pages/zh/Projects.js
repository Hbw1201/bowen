import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const projects = [
    {
        icon: '📘',
        title: '科研经历：机器学习在信贷风险把控中的应用',
        description: '探索不同机器学习模型在信用风险评估中的表现，并优化分类精度。',
        tech: ['随机森林', 'KNN', 'SVM', '特征工程', '交叉验证'],
        path: '/zh/projects/hkust'
    },
    {
        icon: '💻',
        title: '个人项目：C++销售系统',
        description: '实习期间编写销售管理系统，实现库存管理和报表优化。',
        tech: ['C++', '类和对象', '报表处理'],
        path: '/zh/projects/cpp-sales'
    },
    {
        icon: '📊',
        title: '小组项目：车市交易预测',
        description: '基于十年车市数据，训练Python模型预测未来三年需求趋势。',
        tech: ['Python', '数据清洗', '模型可视化'],
        path: '/zh/projects/car-forecast'
    }
];

export default function Projects() {
    const navigate = useNavigate();

    return (
        <section className="projects-section">
            <h2>我的项目</h2>
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
                                更多细节 →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

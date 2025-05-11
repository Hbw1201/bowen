import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

export default function HKUST() {
    const navigate = useNavigate();

    return (
        <section className="project-detail-section">
            <div className="project-detail-card">
                <h1>📘 科研经历 - 机器学习在信贷风险把控中的应用</h1>

                <p className="project-description">
                    本项目探索不同机器学习模型（如随机森林、KNN、SVM）在信用风险评估中的应用效果，并优化其分类性能。
                </p>

                <h3>🧠 项目内容</h3>
                <ul>
                    <li>比较不同模型在分类准确率、稳定性上的表现</li>
                    <li>进行特征工程、交叉验证与超参数调优</li>
                    <li>构建RF+RFE联合特征筛选策略</li>
                </ul>

                <h3>🛠️ 使用技术</h3>
                <ul>
                    <li>Python + Sklearn</li>
                    <li>随机森林、KNN、SVM</li>
                    <li>特征选择、交叉验证、可视化</li>
                </ul>

                <h3>📚 个人收获</h3>
                <p>
                    提升了数据分析与建模能力，掌握了模型优化方法；具备独立完成科研项目、撰写学术论文与展示的能力。
                </p>

                <h3>🔗 项目链接</h3>
                <a
                    href="https://doi.org/10.54254/2755-2721/112/20251785"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                >
                    https://doi.org/10.54254/2755-2721/112/20251785
                </a>

                <button className="back-button" onClick={() => navigate('/zh/projects')}>
                    返回项目列表
                </button>
            </div>
        </section>
    );
}

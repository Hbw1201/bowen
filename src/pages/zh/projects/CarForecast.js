import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

export default function CarForecast() {
    const navigate = useNavigate();

    return (
        <section className="project-detail-section">
            <div className="project-detail-card">
                <h1>🚗 小组项目：车市预测数据建模</h1>

                <p className="project-description">
                    参与团队分析马来西亚近十年二手车交易记录，通过 Python 完成数据清洗、整合、建模与可视化。
                </p>

                <h3>📋 项目内容</h3>
                <ul>
                    <li>探索影响价格的关键变量，如车型、里程、年份、品牌等</li>
                    <li>构建线性回归模型与随机森林模型，预测价格区间</li>
                    <li>通过可视化图表展示预测结果与模型表现</li>
                </ul>

                <h3>🛠️ 使用技术</h3>
                <ul>
                    <li>Python (Pandas, Matplotlib, Scikit-learn)</li>
                    <li>数据清洗与特征工程</li>
                    <li>线性回归、随机森林、可视化</li>
                </ul>

                <h3>🤝 项目协作</h3>
                <p>
                    与团队成员分工合作，掌握了从真实场景出发完成完整建模流程，提升了实战能力与沟通协作技巧。
                </p>

                <button className="back-button" onClick={() => navigate('/zh/projects')}>
                    返回项目列表
                </button>
            </div>
        </section>
    );
}

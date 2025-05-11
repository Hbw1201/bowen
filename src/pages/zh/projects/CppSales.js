import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetail.css';


export default function CppSales() {
    const navigate = useNavigate();

    return (
        <section className="project-detail-section">
            <div className="project-detail-card">
                <h1>💻 个人项目 - C++ 销售系统</h1>

                <p className="project-description">
                    在当地开斋节期间，独立开发了一个基于 C++ 的简易销售管理系统，用于商品出入库管理与销售数据分析。
                </p>

                <h3>📋 项目内容</h3>
                <ul>
                    <li>实现了商品录入、销售记录、库存查询、日报输出等核心功能</li>
                    <li>使用 class 封装商品与订单类，构建简洁的逻辑结构</li>
                    <li>在真实场景中测试并优化了部分模块逻辑</li>
                </ul>

                <h3>🛠️ 使用技术</h3>
                <ul>
                    <li>C++</li>
                    <li>面向对象编程（OOP）</li>
                    <li>类的封装、继承、构造函数</li>
                </ul>

                <h3>📚 个人收获</h3>
                <p>
                    提高了 C++ 项目开发能力，加深了对类和对象、封装与抽象的理解。并培养了用代码解决实际问题的意识。
                </p>

                <button className="back-button" onClick={() => navigate('/zh/projects')}>
                    返回项目列表
                </button>
            </div>
        </section>
    );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const projects = [
    {
        icon: '📘',
        title: 'Penyelidikan: Aplikasi pembelajaran mesin dalam pengurusan risiko kredit',
        description: 'Meneroka model pembelajaran mesin untuk penilaian risiko kredit dan pengoptimuman ketepatan.',
        tech: ['Random Forest', 'KNN', 'SVM', 'Ciri Pilihan', 'Pengesahan Silang'],
        path: '/ms/projects/hkust'
    },
    {
        icon: '💻',
        title: 'Projek Peribadi: Sistem Jualan C++',
        description: 'Membangunkan sistem pengurusan jualan menggunakan C++ semasa latihan industri.',
        tech: ['C++', 'Reka Bentuk Kelas', 'Laporan'],
        path: '/ms/projects/cpp-sales'
    },
    {
        icon: '📊',
        title: 'Projek Berkumpulan: Ramalan Pasaran Kereta',
        description: 'Meramalkan permintaan 3 tahun berdasarkan data 10 tahun pasaran kereta Malaysia menggunakan Python.',
        tech: ['Python', 'Pembersihan Data', 'Visualisasi Model'],
        path: '/ms/projects/car-forecast'
    }
];

export default function Projects() {
    const navigate = useNavigate();

    return (
        <section className="projects-section">
            <h2>Projek Saya</h2>
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
                                Maklumat Lanjut →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

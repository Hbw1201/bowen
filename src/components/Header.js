import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const location = useLocation();

    const pathname = location.pathname;
    const currentLangPath = pathname.startsWith('/zh')
        ? 'zh'
        : pathname.startsWith('/ms')
            ? 'ms'
            : 'en';

    const currentLang = currentLangPath === 'zh' ? '中文' : currentLangPath === 'ms' ? 'BM' : 'EN';

    return (
        <header className="header">
            <div className="logo">
                <img
                    src="/images/avatar.jpg"
                    alt="avatar"
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>

            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <Link to={`/${currentLangPath}`} className="nav-item">Home</Link>
                <Link to={`/${currentLangPath}/about`} className="nav-item">About</Link>
                <Link to={`/${currentLangPath}/projects`} className="nav-item">Projects</Link>
                <Link to={`/${currentLangPath}/contact`} className="nav-item">Contact</Link>
            </nav>

            <div
                className="lang-dropdown"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                style={{ position: 'relative' }}
            >
                <span className="current-lang">{currentLang}</span>
                <div className={`lang-options ${langMenuOpen ? 'show' : ''}`}>
                    <Link to="/en" className="lang-link">EN</Link>
                    <Link to="/zh" className="lang-link">中文</Link>
                    <Link to="/ms" className="lang-link">BM</Link>
                </div>
            </div>
        </header>
    );
}

// ✅ Header.js 完整版（修复语言下拉异常定位）

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const location = useLocation();

    const currentLang = location.pathname.startsWith('/zh')
        ? '中文'
        : location.pathname.startsWith('/ms')
            ? 'BM'
            : 'EN';

    return (
        <header className="header">
            {/* Logo avatar */}
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

            {/* Mobile menu button */}
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>

            {/* Navigation menu */}
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/projects" className="nav-item">Projects</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </nav>

            {/* Language switcher with animation and position fix */}
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
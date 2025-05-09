import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">
                <img
                    src="/images/avatar.jpg" // 👈 确保你头像放在 public/images/avatar.jpg
                    alt="avatar"
                    style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '60%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/projects" className="nav-item">Projects</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </nav>
        </header>
    );
}

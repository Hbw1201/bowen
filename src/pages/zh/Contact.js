import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWeixin } from 'react-icons/fa';

export default function Contact() {
    return (
        <motion.section
            className="contact-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h1 className="contact-title">联系方式</h1>
            <p className="contact-subtitle">欢迎通过以下方式联系我：</p>

            <div className="contact-methods">
                <div className="contact-card">
                    <FaEnvelope className="contact-icon" />
                    <span>hanbowen@student.usm.my</span>
                </div>

                <div className="contact-card">
                    <FaWeixin className="contact-icon" />
                    <span>微信/电话同号：+86 188 5588 0105</span>
                </div>
            </div>
        </motion.section>
    );
}

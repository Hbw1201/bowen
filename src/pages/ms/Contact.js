import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
    return (
        <motion.section
            className="contact-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h1 className="contact-title">Hubungi Saya</h1>
            <p className="contact-subtitle">Sila hubungi saya melalui cara berikut:</p>

            <div className="contact-methods">
                <div className="contact-card">
                    <FaEnvelope className="contact-icon" />
                    <span>hanbowen@student.usm.my</span>
                </div>
                <div className="contact-card">
                    <FaPhone className="contact-icon" />
                    <span>Telefon / WhatsApp (+60)0111 076 8885</span>
                </div>
            </div>
        </motion.section>
    );
}

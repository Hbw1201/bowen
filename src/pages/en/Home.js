import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.section
            id="home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
                height: '100vh',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #0072ff, #00c6ff)',
                color: 'white',
                textAlign: 'center'
            }}
        >
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                Welcome to Han Bowen Personal Website
            </h1>
            <p style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
                Explore who I am, what I do, and what I love — all in one place.
            </p>
        </motion.section>
    );
}

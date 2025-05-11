import { motion } from 'framer-motion';
import HeroSection from '../../components/HeroSection';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <HeroSection />
        </motion.div>
    );
}

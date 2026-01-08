import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './Hero';
import { ProductShowcase } from './ProductShowcase';
import { Benefits } from './Benefits';

export const Home: React.FC = () => {
    return (
        <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero />
            <ProductShowcase />
            <Benefits />
        </motion.div>
    );
};



import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import './Hero.css';

export const Hero: React.FC = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg">
                {/* Placeholder for the slow-motion mechanical video */}
            </div>

            <div className="hero-container">
                <div className="hero-headline-wrapper">
                    <motion.h1
                        className="hero-headline"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        INGENIEURSKUNST
                        <br />
                        <motion.span
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            style={{ display: 'block', paddingLeft: '0.5em', color: 'transparent', WebkitTextStroke: '1px black', opacity: 0.6 }}
                        >
                            ZUM SCHLAFEN.
                        </motion.span>
                    </motion.h1>
                </div>

                <div className="hero-cta-wrapper">
                    <MagneticButton className="cta-button">
                        Discover the System
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
};

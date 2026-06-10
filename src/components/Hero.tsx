import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MagneticButton } from './MagneticButton';
import './Hero.css';

export const Hero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5500);
        return () => clearTimeout(timer);
    }, []);
    return (
        <section className="hero-section">
            <div className="hero-presentation">
                <div className="hero-bg">
                    <iframe 
                        className="hero-video"
                        src="https://www.youtube.com/embed/izQx9iOvNY0?autoplay=1&mute=1&loop=1&playlist=izQx9iOvNY0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&end=136&disablekb=1&iv_load_policy=3&start=3"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <motion.div 
                        className="hero-video-overlay"
                        animate={{ opacity: isVisible ? 1 : 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ delay: 2.5, duration: 1 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#000',
                            zIndex: 2,
                            pointerEvents: 'none'
                        }}
                    />
                </div>

            <div className="hero-container">
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            layout
                            className="hero-headline-wrapper"
                            initial={{ opacity: 1, filter: 'blur(0px)' }}
                            exit={{ 
                                opacity: 0, 
                                filter: 'blur(5px)', 
                                height: 0, 
                                overflow: 'hidden',
                                marginTop: 0,
                                marginBottom: 0,
                                scale: 0.95,
                                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
                            }}
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="hero-subline text-accent"
                            >
                                {t('hero_subline')}
                            </motion.p>
                            <motion.h1
                                className="hero-headline"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {t('hero_headline_1')}
                                <br />
                                <motion.span
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="hero-headline-accent"
                                >
                                    {t('hero_headline_2')}
                                </motion.span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                className="hero-description"
                                dangerouslySetInnerHTML={{ __html: t('hero_desc') }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div 
                    layout
                    className="hero-cta-wrapper" 
                    transition={{ layout: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
                    style={{ 
                        gridColumn: isVisible ? undefined : '1 / 13',
                        justifyContent: isVisible ? undefined : 'center',
                        gap: '1.5rem',
                        alignItems: 'center'
                    }}
                >
                    <motion.div
                        layout
                        transition={{ layout: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
                    >
                        <Link 
                            to="/models" 
                            style={{ textDecoration: 'none' }}
                        >
                            <MagneticButton
                                className="cta-button"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(12px)',
                                    WebkitBackdropFilter: 'blur(12px)',
                                    color: '#fff',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                {t('to_klabine')}
                            </MagneticButton>
                        </Link>
                    </motion.div>
                </motion.div>
                </div>
            </div>
        </section>
    );
};

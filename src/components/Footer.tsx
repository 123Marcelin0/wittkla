import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <footer style={{ background: '#050505', color: '#fff', padding: '15vh 5vw 5vh 5vw' }}>
            <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', textAlign: 'center' }}>
                <motion.a
                    href="mailto:info@wittkla.com"
                    style={{
                        fontSize: 'clamp(2rem, 6vw, 5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        display: 'block',
                        marginBottom: '6rem',
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                    }}
                    whileHover={{ color: 'var(--color-accent)' }}
                >
                    info@wittkla.com
                </motion.a>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', fontSize: '0.875rem', color: '#666' }}>

                    <Link to="/impressum" style={{ transition: 'color 0.2s', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', color: 'inherit' }}>{t('footer_imprint')}</Link>
                    <Link to="/datenschutz" style={{ transition: 'color 0.2s', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', color: 'inherit' }}>{t('footer_privacy')}</Link>
                </div>

                <div style={{ marginTop: '4rem', color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    <p>Wittkla</p>
                    <p>Wellendorfer Straße 124, 49124 Georgsmarienhütte, Germany</p>
                    <p>Mobil: +49 1725966830</p>
                </div>

                <div style={{ marginTop: '3rem', fontSize: '12px', color: '#444', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                    &copy; {new Date().getFullYear()} Wittkla.
                </div>
            </div>
        </footer>
    );
};

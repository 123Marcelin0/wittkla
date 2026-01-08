import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
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
                    <a href="#" style={{ transition: 'color 0.2s', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Impressum</a>
                    <a href="#" style={{ transition: 'color 0.2s', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Datenschutz</a>
                </div>

                <div style={{ marginTop: '8rem', fontSize: '12px', color: '#333', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                    &copy; {new Date().getFullYear()} Wittkla GmbH.
                </div>
            </div>
        </footer>
    );
};

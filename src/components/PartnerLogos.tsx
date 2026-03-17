import React from 'react';
import { motion } from 'framer-motion';

// List of logo files moved to public/logos
const logos = [
    '/logos/LOGOCITROEN.png',
    '/logos/LOGOFIAT.webp',
    '/logos/LOGOFORD.png',
    '/logos/LOGOIVECO.png',
    '/logos/LOGOMAN.png',
    '/logos/LOGOMERCEDES.png',
    '/logos/LOGORENAULT.png',
    '/logos/LOGOVOLKSWAGEN.png'
];

export const PartnerLogos: React.FC = () => {
    return (
        <section style={{
            padding: '8vh 5vw',
            backgroundColor: '#f9f9f9',
            color: '#000'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#888',
                    marginBottom: '1rem'
                }}>
                    Kompatibel mit
                </p>
            </div>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {logos.map((logo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        style={{
                            flex: '0 0 auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '60px', // Fixed height container
                            width: '120px', // Fixed width container for alignment
                            filter: 'grayscale(100%) opacity(0.7)', // Clean, uniform look
                            transition: 'filter 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.filter = 'grayscale(100%) opacity(0.7)';
                        }}
                    >
                        <img
                            src={logo}
                            alt={`Partner Logo ${index}`}
                            style={{
                                maxHeight: '100%',
                                maxWidth: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

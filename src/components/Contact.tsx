import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';

export const Contact: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '20vh', minHeight: '100vh', background: '#F5F5F5' }}
        >
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5vw' }}>

                <div>
                    <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '2rem' }}>
                        Kontakt
                    </span>
                    <h1 className="h2" style={{ marginBottom: '3rem' }}>
                        JETZT ANFRAGEN.
                    </h1>
                    <p className="text-body" style={{ marginBottom: '2rem' }}>
                        Wittkla GmbH<br />
                        Wellendorfer Straße 124<br />
                        49124 Georgsmarienhütte
                    </p>
                    <p className="text-body" style={{ marginBottom: '2rem' }}>
                        T: +49 172 5966830<br />
                        E: info@wittkla.com
                    </p>
                </div>

                <div>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: '#888' }}>Name</label>
                            <input type="text" style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '1.25rem', outline: 'none' }} />
                        </div>

                        <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: '#888' }}>Email</label>
                            <input type="email" style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '1.25rem', outline: 'none' }} />
                        </div>

                        <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: '#888' }}>Fahrzeugmodell</label>
                            <select style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '1.25rem', outline: 'none' }}>
                                <option>Bitte wählen...</option>
                                <option>Mercedes Sprinter</option>
                                <option>Fiat Ducato</option>
                                <option>VW Crafter</option>
                                <option>Ford Transit</option>
                                <option>Andere</option>
                            </select>
                        </div>

                        <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: '#888' }}>Nachricht</label>
                            <textarea rows={4} style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '1.25rem', outline: 'none', resize: 'none' }}></textarea>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <MagneticButton className="cta-button" style={{ width: '100%', background: '#000', color: '#fff' }}>
                                Absenden
                            </MagneticButton>
                        </div>
                    </form>
                </div>

            </div>
        </motion.section>
    );
};

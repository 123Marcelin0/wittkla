import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '20vh', minHeight: '100vh', background: '#050505', color: '#fff' }}
        >
            <div className="container">
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '2rem' }}>
                        Unsere Mission
                    </span>
                    <h1 className="h1" style={{ marginBottom: '5rem', color: '#fff' }}>
                        GESUNDHEIT.<br />SICHERHEIT.<br />FREUDE.
                    </h1>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        <div>
                            <p className="text-body" style={{ color: '#aaa', fontSize: '1.25rem', lineHeight: '1.8' }}>
                                Seit 2011 fertigen wir die Klabine mit einem klaren Ziel: Das Wohlbefinden von Fahrern zu revolutionieren. Wir glauben, dass guter Schlaf kein Luxus ist, sondern die Basis für Sicherheit und Leistung auf der Straße.
                            </p>
                        </div>
                        <div>
                            <p className="text-body" style={{ color: '#aaa', fontSize: '1.25rem', lineHeight: '1.8' }}>
                                Jede Klabine ist ein Stück Ingenieurskunst "Made in Germany". Präzision ist für uns kein Marketingbegriff, sondern der einzige Standard, den wir akzeptieren. Von der ersten Skizze bis zur finalen Montage in Georgsmarienhütte.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '10vh', height: '50vh', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#333', letterSpacing: '0.1em' }}>WORKSHOP VISUALIZATION</span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

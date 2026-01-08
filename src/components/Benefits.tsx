import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Zap } from 'lucide-react';

const benefits = [
    { id: '01', title: '5 SEKUNDEN SETUP.', icon: Clock, desc: 'Von Fahren zu Schlafen in Rekordzeit. Keine Matratzen schleppen.' },
    { id: '02', title: 'MAXIMALE ERGONOMIE.', icon: Zap, desc: 'Orthopädisch optimiert für erholsamen Schlaf unterwegs.' },
    { id: '03', title: 'MADE IN GERMANY.', icon: ShieldCheck, desc: 'Gefertigt nach höchsten Qualitätsstandards in Deutschland.' },
];

export const Benefits: React.FC = () => {
    return (
        <section style={{ padding: '15vh 5vw', background: '#FFFFFF', position: 'relative', zIndex: 10 }}>
            <div style={{ height: '1px', width: '100%', maxWidth: '1600px', margin: '0 auto 10vh auto', background: '#f0f0f0' }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', maxWidth: '1600px', margin: '0 auto' }}>
                {benefits.map((b, i) => (
                    <motion.div
                        key={b.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div style={{ marginBottom: '2rem', color: 'var(--color-accent)' }}>
                            <b.icon size={48} strokeWidth={1} style={{ opacity: 0.8 }} />
                        </div>
                        <h3 className="h3" style={{ marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '2rem' }}>
                            <span style={{ color: '#E0E0E0', display: 'block', fontSize: '0.5em', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>{b.id}</span>
                            {b.title}
                        </h3>
                        <p className="text-body" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>{b.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

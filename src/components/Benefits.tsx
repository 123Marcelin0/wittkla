import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Benefits: React.FC = () => {
    const { t } = useTranslation();
    
    const benefits = [
        { id: '01', title: t('benefit_1_title'), icon: Clock, desc: t('benefit_1_desc') },
        { id: '02', title: t('benefit_2_title'), icon: Zap, desc: t('benefit_2_desc') },
        { id: '03', title: t('benefit_3_title'), icon: ShieldCheck, desc: t('benefit_3_desc') },
    ];

    return (
        <section style={{ padding: '15vh 5vw', background: '#FFFFFF', position: 'relative', zIndex: 10 }}>
            <div style={{ height: '1px', width: '100%', maxWidth: '1600px', margin: '0 auto 10vh auto', background: '#f5f5f5' }} />

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '4rem',
                maxWidth: '1600px',
                margin: '0 auto'
            }}>
                {benefits.map((b) => (
                    <motion.div
                        key={b.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            padding: '3rem 2rem',
                            borderLeft: '1px solid #eee',
                            transition: 'background 0.3s',
                            cursor: 'default'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#fafafa'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                    >
                        <div style={{
                            marginBottom: '2.5rem',
                            color: 'var(--color-accent)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <b.icon size={40} strokeWidth={1} />
                            <span style={{
                                fontSize: '4rem',
                                fontWeight: 800,
                                opacity: 0.05,
                                lineHeight: 0.8,
                                color: '#000'
                            }}>
                                {b.id}
                            </span>
                        </div>

                        <h3 className="h3" style={{
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            fontSize: '1.75rem',
                            letterSpacing: '-0.02em'
                        }}>
                            {b.title}
                        </h3>

                        <p className="text-body" style={{
                            fontSize: '1.125rem',
                            lineHeight: '1.6',
                            color: '#666'
                        }}>
                            {b.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

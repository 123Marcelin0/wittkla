import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Philosophy: React.FC = () => {
    const { t } = useTranslation();
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
                        {t('phil_tag')}
                    </span>
                    <h1 className="h1" style={{ marginBottom: '5rem', color: '#fff' }} dangerouslySetInnerHTML={{ __html: t('phil_title') }} />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        <div>
                            <p className="text-body" style={{ color: '#aaa', fontSize: '1.25rem', lineHeight: '1.8' }}>
                                {t('phil_p1')}
                            </p>
                            <p className="text-body" style={{ color: '#aaa', fontSize: '1.25rem', lineHeight: '1.8', marginTop: '1rem' }}>
                                {t('phil_p2')}
                            </p>
                        </div>
                        <div>
                            <p className="text-body" style={{ color: '#aaa', fontSize: '1.25rem', lineHeight: '1.8' }}>
                                {t('phil_p3')}
                            </p>
                            <p className="text-body" style={{ color: '#aaa', fontSize: '1.25rem', lineHeight: '1.8', marginTop: '1rem' }}>
                                {t('phil_p4')}
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '10vh', height: '50vh', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#333', letterSpacing: '0.1em' }}>{t('phil_visual')}</span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

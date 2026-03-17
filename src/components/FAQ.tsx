import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FAQ: React.FC = () => {
    const [active, setActive] = useState<number | null>(null);
    const { t } = useTranslation();

    const questions = [
        { q: t('faq_1_q'), a: t('faq_1_a') },
        { q: t('faq_2_q'), a: t('faq_2_a') },
        { q: t('faq_3_q'), a: t('faq_3_a') },
        { q: t('faq_4_q'), a: t('faq_4_a') },
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '20vh', minHeight: '100vh', background: '#fff' }}
        >
            <div className="container" style={{ maxWidth: '1000px' }}>
                <h1 className="h1" style={{ marginBottom: '5rem', textAlign: 'center' }}>{t('faq_title')}</h1>

                <div style={{ borderTop: '1px solid #000' }}>
                    {questions.map((item, i) => (
                        <div key={i} style={{ borderBottom: '1px solid #e0e0e0' }}>
                            <button
                                onClick={() => setActive(active === i ? null : i)}
                                style={{
                                    width: '100%',
                                    padding: '2rem 0',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    textAlign: 'left'
                                }}
                            >
                                <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>{item.q}</span>
                                <div style={{ color: active === i ? 'var(--color-accent)' : '#000' }}>
                                    {active === i ? <Minus /> : <Plus />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {active === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <p className="text-body" style={{ paddingBottom: '2rem', paddingTop: '0' }}>
                                            {item.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

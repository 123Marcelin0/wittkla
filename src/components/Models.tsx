import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Models.css';

// System Features Data
export const Models: React.FC = () => {
    const { t } = useTranslation();

    const systemFeatures = [
        {
            title: t('model_feat_1_title'),
            desc: t('model_feat_1_desc'),
            icon: "M13 10V3L4 14h7v7l9-11h-7z"
        },
        {
            title: t('model_feat_2_title'),
            desc: t('model_feat_2_desc'),
            icon: "M12 2v20M2 12h20"
        },
        {
            title: t('model_feat_3_title'),
            desc: t('model_feat_3_desc'),
            icon: "M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"
        },
        {
            title: t('model_feat_4_title'),
            desc: t('model_feat_4_desc'),
            icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        }
    ];

    const expandedModels = [
        {
            id: 'V8 ULTRA',
            for: 'Mercedes Sprinter',
            desc: t('model_v8_desc'),
            images: [
                '/V8 Website_Mercedes Benz/20220619_134121.jpg',
                '/V8 Website_Mercedes Benz/20211218_130152_HDR.jpg',
                '/V8 Website_Mercedes Benz/20221209_143029.jpg',
                '/V8 Website_Mercedes Benz/20230114_120128.jpg',
                '/V8 Website_Mercedes Benz/MB Sprinter zugeklappt.jpg'
            ],
            specs: {
                weight: '24 kg',
                load: '170 kg',
                install: t('model_v8_install'),
                compatibility: t('model_v8_compat'),
                height: '90 cm',
                clearance: '102 cm',
                bed: '190 × 95 cm',
                mattress: '167 × 86 cm'
            },
            features: [
                t('model_v8_f1'),
                t('model_v8_f2'),
                t('model_v8_f3'),
                t('model_v8_f4'),
                t('model_v8_f5')
            ]
        },
        {
            id: 'V7 PROFI',
            for: 'MAN TGE / VW Crafter',
            desc: t('model_v7_desc'),
            images: [
                '/V7 Website_Volkswagen,MAN/20220611_130115.jpg',
                '/V7 Website_Volkswagen,MAN/20211216_151229.jpg',
                '/V7 Website_Volkswagen,MAN/20211216_151627.jpg',
                '/V7 Website_Volkswagen,MAN/DSC05156.JPG',
                '/V7 Website_Volkswagen,MAN/DSC05211.JPG'
            ],
            specs: {
                weight: '24 kg',
                load: '170 kg',
                install: t('model_v7_install'),
                compatibility: t('model_v7_compat'),
                height: '90 cm',
                clearance: '102 cm',
                bed: '190 × 95 cm',
                mattress: '167 × 86 cm'
            },
            features: [
                t('model_v7_f1'),
                t('model_v7_f2'),
                t('model_v7_f3'),
                t('model_v7_f4')
            ]
        },
        {
            id: 'V1 MAXI',
            for: 'Fiat Ducato / Jumper',
            desc: t('model_v1_desc'),
            images: [
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/20201221_103500.jpg',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/DSC03541.JPG',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/20190722_113028.jpg',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/20250320_112744.jpg',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/20180618_111955.jpg'
            ],
            specs: {
                weight: '22 kg',
                load: '180 kg',
                install: t('model_v1_install'),
                compatibility: t('model_v1_compat'),
                height: '60–90 cm',
                clearance: '110 cm',
                bed: '200 × 85 cm',
                mattress: '180 × 75 cm'
            },
            features: [
                t('model_v1_f1'),
                t('model_v1_f2'),
                t('model_v1_f3'),
                t('model_v1_f4')
            ]
        },
        {
            id: 'V5 TRANSIT',
            for: 'Ford Transit',
            desc: t('model_v5_desc'),
            images: [
                '/V5 Website_Ford/20190512_170902.jpg',
                '/V5 Website_Ford/20190512_171019.jpg',
                '/V5 Website_Ford/20190512_171136.jpg',
                '/V5 Website_Ford/20190512_171802.jpg',
                '/V5 Website_Ford/20220321_205153.jpg'
            ],
            specs: {
                weight: '24 kg',
                load: '170 kg',
                install: t('model_v5_install'),
                compatibility: t('model_v5_compat'),
                height: '95 cm',
                clearance: '85 cm',
                bed: '185 × 90 cm',
                mattress: '170 × 86 cm'
            },
            features: [
                t('model_v5_f1'),
                t('model_v5_f2'),
                t('model_v5_f3'),
                t('model_v5_f4')
            ]
        },
        {
            id: 'V6 DAILY',
            for: 'Iveco Daily',
            desc: t('model_v6_desc'),
            images: [
                '/Website_Individuelle Loesungen/20250607_115009.jpg',
                '/Website_Individuelle Loesungen/IMG_20170704_153912.jpg',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/20190722_113028.jpg',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/DSC03541.JPG'
            ],
            specs: {
                weight: '29 kg',
                load: '150 kg',
                install: t('model_v6_install'),
                compatibility: t('model_v6_compat'),
                height: '85 cm',
                clearance: '105 cm',
                bed: '195 × 90 cm',
                mattress: '180 × 80 cm'
            },
            features: [
                t('model_v6_f1'),
                t('model_v6_f2'),
                t('model_v6_f3'),
                t('model_v6_f4')
            ]
        },
         {
            id: 'V4 MASTER',
            for: 'Renault Master',
            desc: t('model_v4_desc'),
            images: [
                '/V4 Website_Renault/20190806_103915.jpg',
                '/V4 Website_Renault/20190726_114109.jpg',
                '/V4 Website_Renault/20190726_114807.jpg',
                '/V4 Website_Renault/IMG_20171215_134449.jpg',
                '/V4 Website_Renault/20231002_131307.jpg'
            ],
            specs: {
                weight: '24 kg',
                load: '150 kg',
                install: t('model_v4_install'),
                compatibility: t('model_v4_compat'),
                height: '80 cm',
                clearance: '102 cm',
                bed: '185 × 90 cm',
                mattress: '172 × 84 cm'
            },
            features: [
                t('model_v4_f1'),
                t('model_v4_f2'),
                t('model_v4_f3'),
                t('model_v4_f4')
            ]
        }
    ];

    const [selectedId, setSelectedId] = useState(expandedModels[0].id);
    const selectedModel = expandedModels.find(m => m.id === selectedId) || expandedModels[0];

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        setCurrentImgIndex(0);
    }, [selectedId]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIndex(prev => (prev + 1) % selectedModel.images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [selectedModel.images.length, selectedId]);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            className="system-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* --- 1. SYSTEM / CONCEPT INTRO --- */}
            <section className="concept-section">
                <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '1rem', color: '#00AEEF', marginBottom: '1rem' }}>
                            {t('model_subtitle')}
                        </h2>
                        <h1 className="concept-title" dangerouslySetInnerHTML={{ __html: t('model_title') }} />
                        <p className="concept-subtitle">
                            {t('model_desc')}
                        </p>
                    </motion.div>

                    <div className="features-grid">
                        {systemFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                            >
                                <div className="feature-icon">
                                    {/* Using SVG paths directly for simplicity without extra icon imports */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={feature.icon} />
                                    </svg>
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-desc">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 2. MODEL SELECTOR (STICKY) --- */}
            <div className="selector-section">
                <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
                    <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#888', marginBottom: '1rem', letterSpacing: '0.1em' }}>
                        {t('model_select_vehicle')}
                    </h3>
                    <div className="selector-nav">
                        {expandedModels.map((model) => (
                            <button
                                key={model.id}
                                onClick={() => setSelectedId(model.id)}
                                className={`model-btn ${selectedId === model.id ? 'active' : ''}`}
                            >
                                {model.for}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- 3. DETAILED PRODUCT VIEW --- */}
            <div className="detail-view">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedId}
                        className="detail-grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Visuals */}
                        <div className="visual-container">
                            <AnimatePresence mode="wait">
                                <motion.img 
                                    key={currentImgIndex}
                                    src={selectedModel.images[currentImgIndex]} 
                                    alt={selectedModel.id} 
                                    className="main-image"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: '12px', background: '#f8f8f8' }}
                                />
                            </AnimatePresence>
                            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                                {selectedModel.images.map((img: string, idx: number) => {
                                    if (idx === currentImgIndex) return null;
                                    return (
                                        <div 
                                            key={idx} 
                                            onClick={() => setCurrentImgIndex(idx)}
                                            style={{ 
                                                width: '120px', 
                                                height: '80px', 
                                                borderRadius: '8px', 
                                                background: '#f0f0f0', 
                                                flexShrink: 0,
                                                cursor: 'pointer',
                                                overflow: 'hidden',
                                                border: '1px solid #eaeaea'
                                            }}
                                        >
                                            <img src={img} alt={`Thumbnail ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="info-container">
                            <h1 className="model-name">KLABINE {selectedModel.id}</h1>
                            <span className="model-sub">{t('model_for')} {selectedModel.for}</span>
                            
                            <p className="model-desc">
                                {selectedModel.desc}
                            </p>

                            <div className="specs-grid">
                                <div className="spec-item">
                                    <h4>{t('model_spec_weight')}</h4>
                                    <p>{selectedModel.specs.weight}</p>
                                </div>
                                <div className="spec-item">
                                    <h4>{t('model_spec_load')}</h4>
                                    <p>{selectedModel.specs.load}</p>
                                </div>
                                <div className="spec-item">
                                    <h4>{t('sys_col_height')}</h4>
                                    <p>{selectedModel.specs.height}</p>
                                </div>
                                <div className="spec-item">
                                    <h4>{t('sys_col_clearance')}</h4>
                                    <p>{selectedModel.specs.clearance}</p>
                                </div>
                                <div className="spec-item">
                                    <h4>{t('sys_col_bed')}</h4>
                                    <p>{selectedModel.specs.bed}</p>
                                </div>
                                <div className="spec-item">
                                    <h4>{t('sys_col_mat')}</h4>
                                    <p>{selectedModel.specs.mattress}</p>
                                </div>
                                <div className="spec-item">
                                    <h4>{t('model_spec_install')}</h4>
                                    <p>{selectedModel.specs.install}</p>
                                </div>
                                <div className="spec-item">
                                    <h4>{t('model_spec_compat')}</h4>
                                    <p>{selectedModel.specs.compatibility}</p>
                                </div>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem' }}>{t('model_highlights')}</h4>
                                <ul className="key-features-list" style={{ listStyle: 'none', padding: 0 }}>
                                    {selectedModel.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <Check size={20} color="#00AEEF" style={{ marginRight: '1rem' }} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a href="/contact" style={{ display: 'inline-block', textDecoration: 'none' }}>
                                <button style={{
                                    background: '#000',
                                    color: '#fff',
                                    padding: '1.2rem 3rem',
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
                                }}>
                                    {t('model_submit')}
                                    <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                                </button>
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

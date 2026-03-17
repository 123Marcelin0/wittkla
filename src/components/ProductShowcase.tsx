import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './ProductShowcase.css';

interface Hotspot {
    id: number;
    x: number;
    y: number;
    title: string;
    desc: string;
}

export const ProductShowcase: React.FC = () => {
    const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
    const { t } = useTranslation();

    const hotspots: Hotspot[] = [
        { id: 1, x: 20, y: 30, title: t('showcase_h1_title'), desc: t('showcase_h1_desc') },
        { id: 2, x: 50, y: 50, title: t('showcase_h2_title'), desc: t('showcase_h2_desc') },
        { id: 3, x: 80, y: 40, title: t('showcase_h3_title'), desc: t('showcase_h3_desc') },
        { id: 4, x: 30, y: 70, title: t('showcase_h4_title'), desc: t('showcase_h4_desc') },
        { id: 5, x: 70, y: 70, title: t('showcase_h5_title'), desc: t('showcase_h5_desc') },
    ];

    const GeometricBg = () => (
        <svg className="watermark-logo" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" width="50" height="50" stroke="#f0f0f0" strokeWidth="1" transform="rotate(45 50 50)" />
            <rect x="35" y="35" width="30" height="30" stroke="#f0f0f0" strokeWidth="1" />
        </svg>
    );

    return (
        <section className="product-section">
            <div className="product-bg-logo">
                <GeometricBg />
            </div>

            <h2 className="section-title">{t('showcase_title')}</h2>

            <div className="product-container">
                <div className="product-visual">
                    <div className="product-image-container">
                        {/* Actual Klabine Image from previous site */}
                        <img
                            src="https://le-cdn.website-editor.net/s/43de1bcbf83a48fa8480f618520974da/dms3rep/multi/opt/Klabine+Renault+Master-1920w.jpg"
                            alt={t('showcase_alt')}
                            className="product-image"
                        />
                    </div>

                    {hotspots.map((spot) => (
                        <div
                            key={spot.id}
                            className="hotspot-wrapper"
                            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            onMouseEnter={() => setActiveHotspot(spot.id)}
                            onMouseLeave={() => setActiveHotspot(null)}
                        >
                            <motion.div
                                className="hotspot-point"
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.3 }}
                            />
                            <AnimatePresence>
                                {activeHotspot === spot.id && (
                                    <motion.div
                                        className="hotspot-card"
                                        initial={{ opacity: 0, x: 10, y: '-50%' }}
                                        animate={{ opacity: 1, x: 20, y: '-50%' }}
                                        exit={{ opacity: 0, x: 10, y: '-50%' }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <h4 className="hotspot-title">{spot.title}</h4>
                                        <p className="hotspot-desc">{spot.desc}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

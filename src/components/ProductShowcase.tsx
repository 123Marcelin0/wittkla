import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductShowcase.css';

interface Hotspot {
    id: number;
    x: number;
    y: number;
    title: string;
    desc: string;
}

const hotspots: Hotspot[] = [
    { id: 1, x: 50, y: 55, title: 'Titan-Scharnier', desc: 'Geräuschlose Faltmechanik. Für 10.000 Zyklen getestet.' },
    { id: 2, x: 30, y: 45, title: 'Smart-Mesh', desc: 'High-Tech Gewebe für optimale Belüftung und Isolation.' },
    { id: 3, x: 70, y: 65, title: 'Modular-Mount', desc: 'Universelle Passform für Sprinter, Crafter & Co.' },
];

export const ProductShowcase: React.FC = () => {
    const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

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

            <h2 className="section-title">DAS SYSTEM</h2>

            <div className="product-container">
                <div className="product-visual">
                    <div className="product-image-container">
                        {/* Minimalist Bed / Structure Placeholder */}
                        <img
                            src="https://images.unsplash.com/photo-1505693375584-b5843dcbe3a2?q=80&w=2069&auto=format&fit=crop"
                            alt="Klabine System"
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

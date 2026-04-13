import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Gallery: React.FC = () => {
    const { t } = useTranslation();
    
    // Actual images of the vans from public directory (excluding logos)
    const images = [
        '/V8 Website_Mercedes Benz/20220619_134121.jpg',
        '/V8 Website_Mercedes Benz/20221209_143029.jpg',
        '/V8 Website_Mercedes Benz/20230114_120128.jpg',
        '/V7 Website_Volkswagen,MAN/20220611_130115.jpg',
        '/V7 Website_Volkswagen,MAN/DSC05156.JPG',
        '/V1 Website_Fiat,Citroen,Peugeot,Opel/20201221_103500.jpg',
        '/V1 Website_Fiat,Citroen,Peugeot,Opel/DSC03541.JPG',
        '/V1 Website_Fiat,Citroen,Peugeot,Opel/20250320_112744.jpg',
        '/V5 Website_Ford/20190512_170902.jpg',
        '/V5 Website_Ford/20190512_171019.jpg',
        '/V4 Website_Renault/20190806_103915.jpg',
        '/V4 Website_Renault/20190726_114109.jpg',
        '/V4 Website_Renault/20231002_131307.jpg',
        '/Website_Individuelle Loesungen/20250607_115009.jpg',
        '/Website_Individuelle Loesungen/IMG_20170704_153912.jpg'
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '20vh', paddingBottom: '10vh', minHeight: '100vh', background: '#fcfcfc' }}
        >
            <div className="container" style={{ maxWidth: '1600px', margin: '0 auto' }}>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="h1" style={{ marginBottom: '1rem', textAlign: 'center', color: '#000' }}>{t('nav_portfolio')}</h1>
                    <p className="text-body" style={{ margin: '0 auto 5rem auto', textAlign: 'center', maxWidth: '600px', color: '#666' }}>
                        Einblicke in unsere Arbeit.
                    </p>
                </motion.div>

                <div style={{ columns: '3 300px', columnGap: '2rem' }}>
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                            style={{ 
                                marginBottom: '2rem', 
                                borderRadius: 'var(--radius)',
                                overflow: 'hidden',
                                position: 'relative',
                                cursor: 'crosshair',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                            }}
                            whileHover="hover"
                        >
                            <motion.img 
                                src={src} 
                                alt={`Wittkla Portfolio ${i + 1}`} 
                                loading="lazy"
                                style={{ 
                                    width: '100%', 
                                    display: 'block', 
                                    height: 'auto',
                                    backgroundColor: '#eee',
                                    objectFit: 'cover'
                                }}
                                variants={{
                                    hover: { scale: 1.05 }
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                            <motion.div 
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)',
                                    opacity: 0
                                }}
                                variants={{
                                    hover: { opacity: 1 }
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

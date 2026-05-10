import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Zap, ShieldAlert, ThermometerSnowflake } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './SystemSpecs.css';

const vehicleLogos = [
    { id: 'fiat', name: 'Fiat', logo: '/logos/LOGOFIAT.webp', modelId: 'v1' },
    { id: 'citroen', name: 'Citroën', logo: '/logos/LOGOCITROEN.png', modelId: 'v1' },
    { id: 'renault', name: 'Renault', logo: '/logos/LOGORENAULT.png', modelId: 'v4' },
    { id: 'ford', name: 'Ford', logo: '/logos/LOGOFORD.png', modelId: 'v5' },
    { id: 'iveco', name: 'Iveco', logo: '/logos/LOGOIVECO.png', modelId: 'v6' },
    { id: 'vw', name: 'Volkswagen', logo: '/logos/LOGOVOLKSWAGEN.png', modelId: 'v7' },
    { id: 'man', name: 'MAN', logo: '/logos/LOGOMAN.png', modelId: 'v7' },
    { id: 'mercedes', name: 'Mercedes-Benz', logo: '/logos/LOGOMERCEDES.png', modelId: 'v8' }
];

export const SystemSpecs: React.FC = () => {
    const { t } = useTranslation();

    const modelsData: Record<string, any> = {
        v1: {
            id: 'v1',
            title: 'V1 MAXI',
            compatible: 'Fiat Ducato, Citroën Jumper, Peugeot Boxer, Opel Movano',
            desc: t('sys_v1_desc'),
            heroImg: '/V1 Website_Fiat,Citroen,Peugeot,Opel/20250320_112744.jpg',
            gallery: [
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/20180618_111955.jpg',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/20190722_113028.jpg',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/20201221_101541_HDR.jpg',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/20201221_103500.jpg',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/20250320_112538.jpg',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/Bildschirmfoto_1-2-2026_191147_www.instagram.com.jpeg',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/DSC03541.JPG',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/DSC03543.JPG',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/DSC04121.JPG',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/Fiat DUCATO 13.JPG',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/IMG_0672.JPG',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/RAM Promaster 3.JPG',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/RAM Promaster 4.JPG',
                '/V1 Website_Fiat,Citroen,Peugeot,Opel/RAM Promaster 7.jpg'
            ]
        },
        v4: {
            id: 'v4',
            title: 'V4 MASTER',
            compatible: 'Renault Master, Nissan Interstar, Opel Movano',
            desc: t('sys_v4_desc'),
            heroImg: '/V4 Website_Renault/20190726_114133.jpg',
            gallery: [
                '/V4 Website_Renault/20190726_114109.jpg',
                '/V4 Website_Renault/20190726_114745.jpg',
                '/V4 Website_Renault/20190726_114807.jpg',
                '/V4 Website_Renault/20190806_103915.jpg',
                '/V4 Website_Renault/20190806_104235.jpg',
                '/V4 Website_Renault/20190806_104257.jpg',
                '/V4 Website_Renault/20231002_131307.jpg',
                '/V4 Website_Renault/IMG_20171215_134449.jpg',
                '/V4 Website_Renault/Renault 1.jpg'
            ]
        },
        v5: {
            id: 'v5',
            title: 'V5 TRANSIT',
            compatible: 'Ford Transit',
            desc: t('sys_v5_desc'),
            heroImg: '/V5 Website_Ford/20190512_171136.jpg',
            gallery: [
                '/V5 Website_Ford/20190512_170902.jpg',
                '/V5 Website_Ford/20190512_171019.jpg',
                '/V5 Website_Ford/20190512_171253.jpg',
                '/V5 Website_Ford/20190512_171802.jpg',
                '/V5 Website_Ford/20220321_205153.jpg',
                '/V5 Website_Ford/Internet IMAG0089.jpg'
            ]
        },
        v6: {
            id: 'v6',
            title: 'V6 DAILY',
            compatible: 'Iveco Daily',
            desc: t('sys_v6_desc'),
            heroImg: '/Website_Individuelle Loesungen/20250607_115009.jpg',
            gallery: [
                '/Website_Individuelle Loesungen/IMG_20170704_153912.jpg',
                '/Website_Individuelle Loesungen/IMG_20170704_153723.jpg',
                '/Website_Individuelle Loesungen/Screenshot_20250302_175204_Instagram.jpg',
                '/Website_Individuelle Loesungen/20250607_115009.jpg'
            ]
        },
        v7: {
            id: 'v7',
            title: 'V7 PROFI',
            compatible: 'Volkswagen Crafter, MAN TGE',
            desc: t('sys_v7_desc'),
            heroImg: '/V7 Website_Volkswagen,MAN/20220611_130115.jpg',
            gallery: [
                '/V7 Website_Volkswagen,MAN/20211216_151229.jpg',
                '/V7 Website_Volkswagen,MAN/20211216_151627.jpg',
                '/V7 Website_Volkswagen,MAN/Bildschirmfoto_1-2-2026_195737_www.instagram.com.jpeg',
                '/V7 Website_Volkswagen,MAN/Bildschirmfoto_1-2-2026_19598_www.instagram.com.jpeg',
                '/V7 Website_Volkswagen,MAN/DSC05156.JPG',
                '/V7 Website_Volkswagen,MAN/DSC05211.JPG',
                '/V7 Website_Volkswagen,MAN/DSC05292.JPG'
            ]
        },
        v8: {
            id: 'v8',
            title: 'V8 ULTRA',
            compatible: 'Mercedes-Benz Sprinter',
            desc: t('sys_v8_desc'),
            heroImg: '/V8 Website_Mercedes Benz/Bildschirmfoto_1-2-2026_20644_www.instagram.com.jpeg',
            gallery: [
                '/V8 Website_Mercedes Benz/20211218_130152_HDR.jpg',
                '/V8 Website_Mercedes Benz/20220619_134121.jpg',
                '/V8 Website_Mercedes Benz/20221209_143029.jpg',
                '/V8 Website_Mercedes Benz/20230114_120128.jpg',
                '/V8 Website_Mercedes Benz/Bildschirmfoto_1-2-2026_2034_www.instagram.com.jpeg',
                '/V8 Website_Mercedes Benz/MB Sprinter zugeklappt.jpg'
            ]
        }
    };

const specsTable = [
    { id: 'v1', model: 'V1 Maxi', load: '180 kg', weight: '22 kg', height: '60–90 cm', clearance: '110 cm', bed: '200 × 85 cm', mattress: '180 × 75 cm' },
    { id: 'v4', model: 'V4 Master', load: '150 kg', weight: '24 kg', height: '80 cm', clearance: '102 cm', bed: '185 × 90 cm', mattress: '172 × 84 cm' },
    { id: 'v5', model: 'V5 Transit', load: '170 kg', weight: '24 kg', height: '95 cm', clearance: '85 cm', bed: '185 × 90 cm', mattress: '170 × 86 cm' },
    { id: 'v6', model: 'V6 Daily', load: '150 kg', weight: '29 kg', height: '100 cm', clearance: '90 cm', bed: '190 × 95 cm', mattress: '167 × 86 cm' },
    { id: 'v7', model: 'V7 Profi', load: '170 kg', weight: '24 kg', height: '90 cm', clearance: '102 cm', bed: '190 × 95 cm', mattress: '167 × 86 cm' },
    { id: 'v8', model: 'V8 Ultra', load: '170 kg', weight: '24 kg', height: '90 cm', clearance: '102 cm', bed: '190 × 95 cm', mattress: '167 × 86 cm' },
];

    const [activeVehicle, setActiveVehicle] = useState(vehicleLogos[0]);
    const activeModel = modelsData[activeVehicle.modelId];
    
    // Auto-rotating Image Logic
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const allImages = [activeModel.heroImg, ...activeModel.gallery];

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [activeVehicle]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % allImages.length);
        }, 5000); // Auto rotate every 5 seconds
        return () => clearInterval(timer);
    }, [allImages.length, activeVehicle]);

    return (
        <section className="configurator-section">
            <div className="configurator-container">
                
                {/* Header & Logo Switcher */}
                <div className="configurator-header">
                    <motion.p 
                        className="configurator-subtag"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t('sys_subtitle')}
                    </motion.p>
                    
                    <div className="vehicle-switcher-container">
                        <span style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            {t('model_select_vehicle')}
                        </span>
                        <div className="vehicle-switcher-track">
                            {vehicleLogos.map((vehicle) => (
                                <button 
                                    key={vehicle.id}
                                    className={`vehicle-switcher-btn ${activeVehicle.id === vehicle.id ? 'active' : ''}`}
                                    onClick={() => setActiveVehicle(vehicle)}
                                >
                                    <img src={vehicle.logo} alt={vehicle.name} className="logo-image" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dynamic Content Area (Crossfade when changing models) */}
                <div className="configurator-dynamic-area">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeVehicle.modelId} /* Forces re-render and animation on model change */
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="model-presentation"
                        >
                            
                            {/* Title & Info */}
                            <div className="model-info-block">
                                <h2 className="model-title">
                                    {activeModel.title.startsWith('V') ? (
                                        <><span className="text-accent">{activeModel.title.split(' ')[0]}</span> {activeModel.title.split(' ').slice(1).join(' ')}</>
                                    ) : activeModel.title}
                                </h2>
                                <div className="model-compatible-wrap">
                                    <span className="compatible-label">{t('sys_compat')}: </span>
                                    <span className="compatible-list">{activeModel.compatible}</span>
                                </div>
                                <p className="model-desc" dangerouslySetInnerHTML={{ __html: activeModel.desc }} />
                            </div>

                            {/* Images Grid */}
                            <div className="model-gallery">
                                <div className="gallery-hero">
                                    <AnimatePresence mode="wait">
                                        <motion.img 
                                            key={currentImageIndex}
                                            src={allImages[currentImageIndex]} 
                                            alt={`${activeModel.title} Main`} 
                                            loading="lazy"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'contain',
                                                objectPosition: 'center',
                                                transform: (allImages[currentImageIndex].includes('20250320_112744') || allImages[currentImageIndex].includes('20190512_171136')) ? 'scale(1.15)' : 'scale(1)',
                                                background: '#f8f8f8'
                                            }}
                                        />
                                    </AnimatePresence>
                                </div>
                                <div className="gallery-grid">
                                    {(() => {
                                        const indices = [];
                                        for(let i=1; i<=4; i++) {
                                            indices.push((currentImageIndex + i) % allImages.length);
                                        }
                                        return indices.map((idx) => {
                                            const img = allImages[idx];
                                            const isZoomed = img.includes('20250320_112744') || img.includes('20190512_171136');
                                            return (
                                                <div key={idx} className="gallery-grid-item" onClick={() => setCurrentImageIndex(idx)}>
                                                    <img 
                                                        src={img} 
                                                        alt={`${activeModel.title} Detail ${idx}`} 
                                                        style={{ 
                                                            objectFit: 'contain', 
                                                            transform: isZoomed ? 'scale(1.15)' : 'scale(1)',
                                                            width: '100%', 
                                                            height: '100%',
                                                            background: '#f8f8f8'
                                                        }} 
                                                        loading="lazy" 
                                                    />
                                                </div>
                                            );
                                        });
                                    })()}
                                </div>
                            </div>
                            
                            <p className="swipe-hint">{t('sys_swipe')}</p>

                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Technical Specifications Table */}
                <div className="specs-table-wrapper">
                    <h3 className="table-title">{t('sys_table_title')}</h3>
                    <div className="table-scroll-container">
                        <table className="specs-table">
                            <thead>
                                <tr>
                                    <th>{t('sys_col_model')}</th>
                                    <th>{t('sys_col_load')}</th>
                                    <th>{t('sys_col_weight')}</th>
                                    <th>{t('sys_col_height')}</th>
                                    <th>{t('sys_col_clearance')}</th>
                                    <th>{t('sys_col_bed')}</th>
                                    <th>{t('sys_col_mat')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {specsTable.map((row) => (
                                    <tr key={row.id} className={row.id === activeModel.id ? 'active-row' : ''}>
                                        <td className="fw-500">{row.model}</td>
                                        <td>{row.load}</td>
                                        <td>{row.weight}</td>
                                        <td>{row.height}</td>
                                        <td>{row.clearance}</td>
                                        <td>{row.bed}</td>
                                        <td>{row.mattress}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Standard Features Blocks */}
                <div className="features-wrapper">
                    <h3 className="features-title">{t('sys_features_title')}</h3>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon"><Moon size={28} /></div>
                            <p>{t('sys_feat_1')}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><Zap size={28} /></div>
                            <p>{t('sys_feat_2')}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><ShieldAlert size={28} /></div>
                            <p>{t('sys_feat_3')}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><ThermometerSnowflake size={28} /></div>
                            <p>{t('sys_feat_4')}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './AboutSection.css'; // Importing our new timeline styles

export const AboutSection: React.FC = () => {
    const { t } = useTranslation();
    
    // Animation variants for floating in elements smoothly
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemLeftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const itemRightVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className="about-section">
            <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                width: '1px',
                height: '100px',
                background: 'linear-gradient(to bottom, transparent, #000)',
                opacity: 0.1
            }} />

            <div className="about-header-content">
                <motion.span 
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="about-subtitle"
                >
                    {t('about_since')}
                </motion.span>

                <motion.h2 
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="about-title"
                >
                    {t('about_title_1')}<br />
                    <span className="about-title-bold">{t('about_title_2')}</span>
                </motion.h2>
            </div>

            {/* The Timeline Section */}
            <motion.div 
                className="timeline-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
            >
                {/* Timeline Item 1 */}
                <div className="timeline-item">
                    <motion.div className="timeline-content image" variants={itemLeftVariants}>
                        <div className="timeline-image-wrapper">
                            <img src="/timeline/DSC05156.JPG" alt="Wittkla Klabine Platzsparendes Design" />
                        </div>
                    </motion.div>
                    <motion.div className="timeline-content text" variants={itemRightVariants}>
                        <div className="timeline-text">
                            <span className="timeline-step-number">{t('about_step1_tag')}</span>
                            <h3 className="timeline-step-title">{t('about_step1_title')}</h3>
                            <p className="timeline-step-desc">
                                {t('about_step1_desc')}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Timeline Item 2 */}
                <div className="timeline-item">
                    <motion.div className="timeline-content image" variants={itemRightVariants}>
                        <div className="timeline-image-wrapper">
                            <img src="/timeline/Gemini_Generated_Image_cipgvdcipgvdcipg.png" alt="Wittkla Klabine Ergonomie" />
                        </div>
                    </motion.div>
                    <motion.div className="timeline-content text" variants={itemLeftVariants}>
                        <div className="timeline-text">
                            <span className="timeline-step-number">{t('about_step2_tag')}</span>
                            <h3 className="timeline-step-title">{t('about_step2_title')}</h3>
                            <p className="timeline-step-desc">
                                {t('about_step2_desc')}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Timeline Item 3 */}
                <div className="timeline-item">
                    <motion.div className="timeline-content image" variants={itemLeftVariants}>
                        <div className="timeline-image-wrapper">
                            <img src="/timeline/Gemini_Generated_Image_tsgvxgtsgvxgtsgv.png" alt="Wittkla Klabine Handhabung" />
                        </div>
                    </motion.div>
                    <motion.div className="timeline-content text" variants={itemRightVariants}>
                        <div className="timeline-text">
                            <span className="timeline-step-number">{t('about_step3_tag')}</span>
                            <h3 className="timeline-step-title">{t('about_step3_title')}</h3>
                            <p className="timeline-step-desc">
                                {t('about_step3_desc')}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Timeline Item 4 */}
                <div className="timeline-item">
                    <motion.div className="timeline-content image" variants={itemRightVariants}>
                        <div className="timeline-image-wrapper">
                            <img src="/timeline/Bildschirmfoto_1-2-2026_195737_www.instagram.com.jpeg" alt="Wittkla Klabine Materialqualität" />
                        </div>
                    </motion.div>
                    <motion.div className="timeline-content text" variants={itemLeftVariants}>
                        <div className="timeline-text">
                            <span className="timeline-step-number">{t('about_step4_tag')}</span>
                            <h3 className="timeline-step-title">{t('about_step4_title')}</h3>
                            <p className="timeline-step-desc">
                                {t('about_step4_desc')}
                            </p>
                        </div>
                    </motion.div>
                </div>

            </motion.div>

        </section>
    );
};

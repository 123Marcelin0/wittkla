import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Montage.css';

export const Montage: React.FC = () => {
    const { t } = useTranslation();

    const steps = [
        {
            id: 1,
            title: t('montage_step1_title'),
            subtitle: t('montage_step1_subtitle'),
            desc: t('montage_step1_desc'),
            img: "/Website_Montage, Versand/20221007_173739.jpg"
        },
        {
            id: 2,
            title: t('montage_step2_title'),
            subtitle: t('montage_step2_subtitle'),
            desc: t('montage_step2_desc'),
            img: "/Website_Montage, Versand/20250426_102304.jpg"
        },
        {
            id: 3,
            title: t('montage_step3_title'),
            subtitle: t('montage_step3_subtitle'),
            desc: t('montage_step3_desc'),
            img: "/Website_Montage, Versand/20230902_114202.jpg"
        },
        {
            id: 4,
            title: t('montage_step4_title'),
            subtitle: t('montage_step4_subtitle'),
            desc: t('montage_step4_desc'),
            img: "/Website_Montage, Versand/20220903_082710.jpg"
        }
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="montage-section">
            <div className="montage-container">
                {/* Left Side: Sticky Text Content */}
                <div className="montage-text-side">
                    <div className="montage-header">
                        <motion.span 
                            className="montage-tag text-accent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                        >
                            {t('montage_tag')}
                        </motion.span>
                        <motion.h2 
                            className="montage-main-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ delay: 0.1 }}
                            dangerouslySetInnerHTML={{ __html: t('montage_title') }}
                        />
                    </div>

                    <div className="montage-steps-container">
                        {steps.map((step) => (
                            <motion.div 
                                key={step.id} 
                                className="montage-step-block"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <motion.div 
                                    className="step-number"
                                    initial={{ color: "#e0e0e0" }}
                                    whileInView={{ color: "#0078D6" }}
                                    viewport={{ margin: "-35% 0px -35% 0px" }}
                                    transition={{ duration: 0.4 }}
                                >
                                    0{step.id}
                                </motion.div>
                                <div className="step-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <h4 className="step-subtitle">{step.subtitle}</h4>
                                    <p className="step-desc" dangerouslySetInnerHTML={{ __html: step.desc }} />
                                </div>
                                
                                {/* Mobile Image */}
                                <div className="step-image-mobile">
                                    <img src={step.img} alt={step.title} loading="lazy" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Sticky Image Crossfade */}
                <div className="montage-visual-side">
                    <div className="sticky-visual-wrapper">
                        {steps.map((step, index) => {
                            const stepSize = 1 / steps.length;
                            // Start fading in slightly before this step is fully centered
                            const startFadeIn = Math.max(0, (index - 0.5) * stepSize);
                            const endFadeIn = index * stepSize;
                            // Start fading out when the next step starts coming in
                            const startFadeOut = (index + 0.5) * stepSize;
                            const endFadeOut = Math.min(1, (index + 1) * stepSize);

                            const opacity = useTransform(
                                scrollYProgress,
                                [startFadeIn, endFadeIn, startFadeOut, endFadeOut],
                                [0, 1, 1, 0]
                            );

                            // The last image stays visible till the very end of the section
                            const finalOpacity = index === steps.length - 1 
                                ? useTransform(scrollYProgress, [startFadeIn, endFadeIn], [0, 1]) 
                                : opacity;

                            const scale = useTransform(
                                scrollYProgress,
                                [startFadeIn, endFadeOut],
                                [1.1, 1]
                            );

                            return (
                                <motion.div 
                                    key={`visual-${step.id}`}
                                    className="visual-layer"
                                    style={{ 
                                        opacity: finalOpacity,
                                        zIndex: index 
                                    }}
                                >
                                    <motion.img 
                                        src={step.img} 
                                        alt={step.title} 
                                        style={{ scale }}
                                        className="visual-image"
                                    />
                                    <div className="visual-overlay" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

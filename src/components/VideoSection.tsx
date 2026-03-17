import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const VideoSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            style={{
                padding: '5vh 5vw',
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
            }}
        >
            <motion.div
                style={{
                    width: '100%',
                    maxWidth: '1400px',
                    aspectRatio: '16/9',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    scale,
                    opacity
                }}
            >
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/izQx9iOvNY0?autoplay=1&mute=1&loop=1&playlist=izQx9iOvNY0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                        title="Wittkla Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    ></iframe>
                    {/* Overlay to prevent interaction if desired, or just to add a tint. Keeping it clean for now. */}
                </div>
            </motion.div>
        </section>
    );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './Hero';
import { GoogleReviews } from './GoogleReviews';
import { SystemSpecs } from './SystemSpecs';
import { Benefits } from './Benefits';
import { Montage } from './Montage';

import { AboutSection } from './AboutSection';
import { VideoSection } from './VideoSection';

export const Home: React.FC = () => {
    return (
        <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero />
            <GoogleReviews />
            <AboutSection />
            <VideoSection />
            <SystemSpecs />
            <Montage />
            <Benefits />
        </motion.div>
    );
};



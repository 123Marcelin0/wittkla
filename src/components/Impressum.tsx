import React from 'react';
import { motion } from 'framer-motion';

export const Impressum: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '15vh', minHeight: '100vh', background: '#fff', color: '#000' }}
        >
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 5vw', paddingBottom: '10vh' }}>
                <h1 className="h1" style={{ marginBottom: '3rem', fontSize: '2.5rem', fontWeight: 700 }}>Impressum</h1>

                <div className="text-body" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#333' }}>
                    
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem' }}>Verantwortlich:</h2>
                    <p style={{ marginBottom: '1.5rem' }}>Alexander Wittmann</p>

                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem' }}>Kontakt:</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Wittmanns Klappschlafkabinen<br />
                        Firma WITTKLA<br />
                        Wellendorfer Straße 124, Germany, 49124 Georgsmarienhütte<br />
                        Telefon: +49 5401831598, Mobil: +49 1725966830<br />
                        E-mail: info@wittkla.com<br />
                        www.wittkla.com
                    </p>

                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem' }}>Umsatzsteuer-ID:</h2>
                    <p style={{ marginBottom: '1.5rem' }}>DE 253543585</p>

                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem' }}>Hier finden Sie uns:</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Wellendorfer Straße 124,<br />
                        49124 Georgsmarienhütte, Germany<br />
                        E-Mail: info@wittkla.com<br />
                        Telefon: + 49 1725966830
                    </p>

                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem' }}>SOZIALE NETZWERKE</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        In den sozialen Netzwerken können Sie uns jederzeit kontaktieren und erfahren regelmäßig mehr über unser Unternehmen und unsere Produkte
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const expandedModels = [
    {
        id: 'V1 MAXI',
        for: 'Fiat Ducato, Citroën Jumper, Peugeot Boxer, Opel Movano',
        desc: 'Der Bestseller seit 2009. Maximale Raumnutzung für die großen Transporter. Entwickelt für Spedition, Hobby und Motorsport.',
        img: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=2674&auto=format&fit=crop', // Interior van mood
        details: [
            'Optimiert für maximale Breite im Ducato/Jumper Chassis.',
            'Extrem robustes Titan-Gelenk für täglichen Einsatz.',
            'Inklusive Verdunkelung und Belüftungssystem.'
        ],
        technical: [
            'Gewicht: ca. 25kg',
            'Material: Leichtbau-Composite & Alu',
            'Montagezeit: ca. 3 Std.'
        ]
    },
    {
        id: 'V8 ULTRA',
        for: 'Mercedes Sprinter',
        desc: 'Das Flaggschiff für den Sprinter (ab 2006). Kompromissloser Schlafkomfort mit maximaler Raumausnutzung.',
        img: 'https://images.unsplash.com/photo-1694073383021-e40348737c54?q=80&w=2671&auto=format&fit=crop', // Sprinter mood
        details: [
            'Perfekte Anpassung an die Sprinter-Seitenwandkontur.',
            'High-End Matratze mit Memory-Effect.',
            'Optionales Isolationspaket für Wintereinsatz.'
        ],
        technical: [
            'Gewicht: ca. 22kg',
            'Kompatibilität: H2/H3 Dach',
            'Made in Germany'
        ]
    },
    {
        id: 'V4 MASTER',
        for: 'Renault Master, Nissan NV400, Opel Movano (bis 2021)',
        desc: 'Perfekte Integration in die Master-Klasse. Robust und langlebig für den harten Arbeitsalltag.',
        img: 'https://images.unsplash.com/photo-1605218427306-633ba87c9408?q=80&w=2670&auto=format&fit=crop',
        details: [
            'Nahtlose Integration ohne Raumverlust.',
            'Hohe Stabilität auch bei dynamischer Fahrt.',
            'Strapazierfähige Stoffbezüge, leicht zu reinigen.'
        ],
        technical: [
            'Gewicht: ca. 24kg',
            'Belastbarkeit: bis 120kg',
            'Zertifizierte Materialien'
        ]
    },
    {
        id: 'V5 TRANSIT',
        for: 'Ford Transit',
        desc: 'Maßgeschneidert für den Ford Transit. Ergonomie trifft Design für erholsamen Schlaf.',
        img: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=2670&auto=format&fit=crop', // Cozy interior
        details: [
            'Spezielle Geometrie für die Transit-Karosserie.',
            'Schneller Auf- und Abbau in Sekunden.',
            'Integrierte Staufächer für Wertsachen.'
        ],
        technical: [
            'Gewicht: ca. 23kg',
            'Farbe: Anthrazit / Grau',
            'Garantie: 2 Jahre'
        ]
    },
    {
        id: 'V6 DAILY',
        for: 'Iveco Daily',
        desc: 'Raumwunder für den Daily. Komfort wie zuhause, auch auf der Baustelle.',
        img: 'https://images.unsplash.com/photo-1469796466635-c74338473877?q=80&w=2669&auto=format&fit=crop',
        details: [
            'Großzügige Liegefläche auch für große Personen.',
            'Premium Materialien für lange Lebensdauer.',
            'Einfache Nachrüstung möglich.'
        ],
        technical: [
            'Für Iveco Daily ab 2014',
            'Maximale Kopffreiheit',
            'Verstärkter Rahmen'
        ]
    },
    {
        id: 'V7 TGE/CRAFTER',
        for: 'MAN TGE & VW Crafter',
        desc: 'Business-Class für TGE und Crafter. Präzision trifft auf Volkswagen-Qualität.',
        img: 'https://images.unsplash.com/photo-1510662145379-13537db782dc?q=80&w=2576&auto=format&fit=crop',
        details: [
            'Exakt auf die Maße des Crafter/TGE abgestimmt.',
            'Hochwertige Haptik, passend zum Fahrzeuginterieur.',
            'Dämpfungssystem für vibrationsfreien Schlaf.'
        ],
        technical: [
            'Für Modelle ab 2017',
            'Gewichtsoptimiert',
            'ISO-zertifizierte Fertigung'
        ]
    },
];

export const Models: React.FC = () => {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '15vh', minHeight: '100vh', background: '#fff' }}
        >
            <div className="container">
                <h1 className="h1" style={{ marginBottom: '2rem', textAlign: 'center' }}>Die Flotte</h1>
                <p className="text-body" style={{ margin: '0 auto 8rem auto', textAlign: 'center', maxWidth: '600px' }}>
                    Präzision für jedes Chassis. Wählen Sie Ihr Fahrzeug für die perfekte Schlaflösung.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {expandedModels.map((model, i) => (
                        <motion.div
                            key={model.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{ borderTop: '1px solid #eee', position: 'relative' }}
                        >
                            <div
                                onClick={() => setSelected(selected === model.id ? null : model.id)}
                                style={{
                                    padding: '4rem 0',
                                    cursor: 'pointer',
                                    display: 'grid',
                                    gridTemplateColumns: 'minmax(200px, 1fr) 2fr 100px',
                                    alignItems: 'center',
                                    gap: '2rem'
                                }}
                                className="model-row"
                            >
                                <h3 className="h2" style={{ margin: 0, fontSize: 'clamp(2rem, 3vw, 3rem)' }}>{model.id}</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        For {model.for.split(',')[0]}
                                    </span>
                                    <span style={{ color: '#666', maxWidth: '500px' }} className="hide-mobile">
                                        {model.desc}
                                    </span>
                                </div>
                                <div style={{ marginLeft: 'auto' }}>
                                    <MagneticButton
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            background: selected === model.id ? 'var(--color-accent)' : '#000',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            transition: 'background 0.3s'
                                        }}
                                    >
                                        <ArrowRight style={{ transform: selected === model.id ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                                    </MagneticButton>
                                </div>
                            </div>

                            <AnimatePresence>
                                {selected === model.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div style={{ paddingBottom: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                                            <div style={{ height: '400px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                                                <img src={model.img} alt={model.id} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0%) contrast(1.1)' }} />
                                            </div>

                                            <div>
                                                <h4 className="h3" style={{ marginBottom: '2rem' }}>Spezifikationen</h4>
                                                <p className="text-body" style={{ marginBottom: '2rem' }}>{model.desc}</p>

                                                <div style={{ marginBottom: '3rem' }}>
                                                    {model.details.map((d, idx) => (
                                                        <div key={idx} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                                                            <Check size={20} color="var(--color-accent)" style={{ marginTop: '3px' }} />
                                                            <span style={{ fontSize: '1rem', color: '#444' }}>{d}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                                                    {model.technical.map((t, idx) => (
                                                        <div key={idx} style={{ padding: '1rem', borderLeft: '2px solid #eee' }}>
                                                            <span style={{ fontSize: '0.85rem', color: '#666', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                                {t.split(':')[0]}
                                                            </span>
                                                            <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                                                                {t.split(':')[1] || ''}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <MagneticButton className="cta-button" style={{ background: '#000', color: '#fff', width: '100%' }}>
                                                    Konfiguration anfragen
                                                </MagneticButton>
                                            </div>

                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                    <div style={{ borderTop: '1px solid #eee' }} />
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none; }
          .model-row { grid-template-columns: 1fr auto !important; }
        }
      `}</style>
        </motion.section>
    );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const questions = [
    { q: 'Für welche Fahrzeuge ist die Klabine geeignet?', a: 'Die Klabine ist verfügbar für Fiat Ducato, Mercedes Sprinter, VW Crafter, Renault Master, Ford Transit, Iveco Daily, MAN TGE, Citroën Jumper, Peugeot Boxer und Opel Movano. Wir decken nahezu alle gängigen Transporter ab.' },
    { q: 'Wie lange dauert die Installation?', a: 'Die Installation ist extrem effizient gestaltet und dauert in der Regel etwa 3 Stunden. Wir bieten auch einen mobilen Einbauservice an, der direkt zu Ihnen kommt.' },
    { q: 'Was ist das Hauptmaterial?', a: 'Wir nutzen hochwertige, leichte und dennoch extrem robuste Materialien aus dem Flugzeug- und Fahrzeugbau, um Langlebigkeit bei minimalem Gewicht zu garantieren.' },
    { q: 'Kann ich die Klabine selbst einbauen?', a: 'Ja, das System ist modular konzipiert. Allerdings empfehlen wir für die perfekte Passform und Sicherheit unseren professionellen Einbauservice.' },
];

export const FAQ: React.FC = () => {
    const [active, setActive] = useState<number | null>(null);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '20vh', minHeight: '100vh', background: '#fff' }}
        >
            <div className="container" style={{ maxWidth: '1000px' }}>
                <h1 className="h1" style={{ marginBottom: '5rem', textAlign: 'center' }}>Q & A</h1>

                <div style={{ borderTop: '1px solid #000' }}>
                    {questions.map((item, i) => (
                        <div key={i} style={{ borderBottom: '1px solid #e0e0e0' }}>
                            <button
                                onClick={() => setActive(active === i ? null : i)}
                                style={{
                                    width: '100%',
                                    padding: '2rem 0',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    textAlign: 'left'
                                }}
                            >
                                <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>{item.q}</span>
                                <div style={{ color: active === i ? 'var(--color-accent)' : '#000' }}>
                                    {active === i ? <Minus /> : <Plus />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {active === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <p className="text-body" style={{ paddingBottom: '2rem', paddingTop: '0' }}>
                                            {item.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

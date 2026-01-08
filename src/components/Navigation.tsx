import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import { Logo } from './Logo';

export const Navigation: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setOpen(false);
    }, [location]);

    const menuItems = [
        { title: 'The System', path: '/' },
        { title: 'Models & Specs', path: '/models' },
        { title: 'Philosophy', path: '/philosophy' },
        { title: 'Questions', path: '/faq' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '2rem 5vw',
                zIndex: 100,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pointerEvents: 'none',
                mixBlendMode: isOpen ? 'normal' : 'difference', // Ensure visible on white/black
                color: isOpen ? 'black' : 'white'
            }}>
                <div style={{ pointerEvents: 'auto' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Logo color={isOpen ? 'black' : 'white'} />
                    </Link>
                </div>
                <div style={{ pointerEvents: 'auto', color: isOpen ? 'black' : 'white' }}>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={24} duration={0.8} />
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 100% 0)" }}
                        animate={{ clipPath: "circle(150% at 100% 0)" }}
                        exit={{ clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: '#FFFFFF',
                            zIndex: 90,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '2vh', textAlign: 'center' }}>
                            {menuItems.map((item, i) => (
                                <div key={item.path} style={{ overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 100, opacity: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Link
                                            to={item.path}
                                            className="h1"
                                            style={{
                                                fontSize: 'clamp(2rem, 5vw, 4rem)',
                                                color: location.pathname === item.path ? 'var(--color-accent)' : '#000',
                                                textDecoration: 'none',
                                                transition: 'color 0.3s'
                                            }}
                                        >
                                            {item.title}
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            style={{ position: 'absolute', bottom: '5vh', fontSize: '0.875rem', color: '#999' }}
                        >
                            INGENIEURSKUNST ZUM SCHLAFEN.
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

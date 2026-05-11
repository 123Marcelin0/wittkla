import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';

export const Navigation: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isPhilosophy = location.pathname === '/philosophy';

    const { scrollY } = useScroll();
    const rawClipInset = useTransform(scrollY, [0, 400], [0, 50]);
    const clipInset = useSpring(rawClipInset, { stiffness: 400, damping: 40 });
    const clipPath = useTransform(clipInset, val => `inset(0% ${val}% 0% ${val}%)`);

    // Close menu on route change
    useEffect(() => {
        setOpen(false);
    }, [location]);

    interface MenuItem {
        title: string;
        path: string;
        external?: boolean;
    }

    const menuItems: MenuItem[] = [
        { title: t('nav_system'), path: '/' },
        { title: t('nav_models'), path: '/models' },
        { title: t('nav_philosophy'), path: '/philosophy' },
        { title: t('nav_portfolio'), path: '/gallery' },
        { title: t('nav_faq'), path: '/faq' },
        { title: t('nav_contact'), path: '/contact' },
    ];

    const getLangColor = (lang: string) => {
        if (i18n.language === lang) return 'var(--color-accent)';
        if (isPhilosophy && !isOpen) return 'rgba(255,255,255,0.6)';
        return '#888';
    };

    return (
        <>
            {/* Premium Tags for Front Page - Static Absolute */}
            {location.pathname === '/' && !isMobile && (
                <div
                    style={{
                        position: 'absolute',
                        top: '2.5rem',
                        left: '5vw',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        zIndex: 101,
                        pointerEvents: 'none'
                    }}
                    className="premium-text-tags"
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ 
                            fontFamily: 'var(--font-main, Inter)', 
                            fontWeight: 400, 
                            fontSize: '0.65rem', 
                            letterSpacing: '0.3em', 
                            color: '#111',
                            textTransform: 'uppercase'
                        }}>
                            {t('made_in')}
                        </span>
                        <div style={{ display: 'flex', height: '10px', width: '14px', flexDirection: 'column', boxShadow: '0 0 1px rgba(0,0,0,0.3)', borderRadius: '1.5px', overflow: 'hidden' }}>
                            <div style={{ flex: 1, backgroundColor: '#000000' }} />
                            <div style={{ flex: 1, backgroundColor: '#DD0000' }} />
                            <div style={{ flex: 1, backgroundColor: '#FFCE00' }} />
                        </div>
                        <span style={{ 
                            fontFamily: 'var(--font-main, Inter)', 
                            fontWeight: 400, 
                            fontSize: '0.65rem', 
                            letterSpacing: '0.3em', 
                            color: '#111',
                            textTransform: 'uppercase'
                        }}>
                            {t('germany')}
                        </span>
                    </div>
                    <span style={{ 
                        fontFamily: 'var(--font-main, Inter)', 
                        fontWeight: 400, 
                        fontSize: '0.65rem', 
                        letterSpacing: '0.3em', 
                        color: '#111',
                        textTransform: 'uppercase',
                        marginTop: '6px'
                    }}>
                        {t('installation')}
                    </span>
                </div>
            )}

            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: isMobile ? '1rem 5vw' : '2rem 5vw',
                zIndex: 100,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pointerEvents: 'none',
                color: isPhilosophy && !isOpen ? 'white' : 'black'
            }}>
                {/* Left Side: Spacer (Desktop) or Logo + Tags (Mobile) */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: isMobile ? 1 : 'none' }}>
                    {!isMobile && <div style={{ width: '24px' }} />}
                    
                    {isMobile && (
                        <motion.div style={{ position: 'relative', pointerEvents: 'auto', clipPath }}>
                            <Link to="/" style={{ textDecoration: 'none', display: 'block' }}>
                                <Logo color={isPhilosophy && !isOpen ? 'white' : 'black'} />
                            </Link>
                            
                            {location.pathname === '/' && (
                                <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.8, width: 'max-content' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <span style={{ fontFamily: 'var(--font-main, Inter)', fontWeight: 500, fontSize: '0.55rem', letterSpacing: '0.2em', color: isPhilosophy && !isOpen ? 'white' : '#111', textTransform: 'uppercase' }}>
                                            {t('made_in')}
                                        </span>
                                        <div style={{ display: 'flex', height: '8px', width: '12px', flexDirection: 'column', borderRadius: '1px', overflow: 'hidden' }}>
                                            <div style={{ flex: 1, backgroundColor: '#000000' }} />
                                            <div style={{ flex: 1, backgroundColor: '#DD0000' }} />
                                            <div style={{ flex: 1, backgroundColor: '#FFCE00' }} />
                                        </div>
                                        <span style={{ fontFamily: 'var(--font-main, Inter)', fontWeight: 500, fontSize: '0.55rem', letterSpacing: '0.2em', color: isPhilosophy && !isOpen ? 'white' : '#111', textTransform: 'uppercase' }}>
                                            {t('germany')}
                                        </span>
                                    </div>
                                    <span style={{ fontFamily: 'var(--font-main, Inter)', fontWeight: 500, fontSize: '0.55rem', letterSpacing: '0.2em', color: isPhilosophy && !isOpen ? 'white' : '#111', textTransform: 'uppercase' }}>
                                        {t('installation')}
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    )}
                </div>

                {/* Center Logo - Static Absolute (Desktop Only) */}
                {!isMobile && (
                    <motion.div style={{ 
                        position: 'absolute', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        pointerEvents: 'auto', 
                        clipPath 
                    }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Logo color={isPhilosophy && !isOpen ? 'white' : 'black'} />
                        </Link>
                    </motion.div>
                )}

                <div style={{ pointerEvents: 'auto', color: isPhilosophy && !isOpen ? 'white' : 'black', display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <button 
                            onClick={() => i18n.changeLanguage('de')} 
                            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-main, Inter)', fontSize: isMobile ? '0.7rem' : '0.8rem', fontWeight: i18n.language === 'de' ? 600 : 300, color: getLangColor('de'), padding: 0 }}
                        >DE</button>
                        <span style={{ fontSize: isMobile ? '0.7rem' : '0.8rem', color: isPhilosophy && !isOpen ? 'rgba(255,255,255,0.4)' : '#ccc' }}>|</span>
                        <button 
                            onClick={() => i18n.changeLanguage('en')} 
                            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-main, Inter)', fontSize: isMobile ? '0.7rem' : '0.8rem', fontWeight: i18n.language === 'en' ? 600 : 300, color: getLangColor('en'), padding: 0 }}
                        >EN</button>
                    </div>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={isMobile ? 20 : 24} duration={0.8} color={isPhilosophy && !isOpen ? "white" : "black"} />
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
                                        {item.external ? (
                                            <a
                                                href={item.path}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="h1"
                                                style={{
                                                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                                                    color: '#000',
                                                    textDecoration: 'none',
                                                    transition: 'color 0.3s',
                                                    display: 'block'
                                                }}
                                            >
                                                {item.title}
                                            </a>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className="h1"
                                                style={{
                                                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                                                    color: location.pathname === item.path ? 'var(--color-accent)' : '#000',
                                                    textDecoration: 'none',
                                                    transition: 'color 0.3s',
                                                    display: 'block'
                                                }}
                                            >
                                                {item.title}
                                            </Link>
                                        )}
                                    </motion.div>
                                </div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

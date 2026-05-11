import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm, ValidationError } from '@formspree/react';
import { MagneticButton } from './MagneticButton';
import './Contact.css';

export const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("xzdkqjnj");

    return (
        <motion.section
            className="contact-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="contact-container">
                <div className="contact-grid">
                    
                    {/* Left Side: Info & Links */}
                    <div className="contact-left">
                        <span className="contact-label text-accent">{t('contact_label')}</span>
                        <h1 className="contact-title">
                            {t('contact_title_prefix')} <span className="text-accent">{t('contact_title_accent')}</span>
                        </h1>
                        
                        <div className="contact-info-block">
                            <h3 className="contact-info-title">{t('contact_hq')}</h3>
                            <p className="contact-info-text">
                                Wittkla<br />
                                Wellendorfer Straße 124<br />
                                49124 Georgsmarienhütte, DE
                            </p>
                        </div>

                        <div className="contact-info-block" style={{ marginBottom: '1.5rem' }}>
                            <h3 className="contact-info-title">{t('contact_direct')}</h3>
                        </div>

                        <div className="contact-links-grid">
                            <a href="https://api.whatsapp.com/send/?phone=%2B491725966830&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="direct-contact-btn whatsapp">
                                <svg viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>
                                WhatsApp Chat
                            </a>
                            <a href="mailto:info@wittkla.com" className="direct-contact-btn email">
                                <svg viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                info@wittkla.com
                            </a>
                            <a href="https://www.instagram.com/wittkla_klabine/" target="_blank" rel="noopener noreferrer" className="direct-contact-btn instagram">
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                Instagram
                            </a>
                            <a href="https://youtube.com/@wittkla" target="_blank" rel="noopener noreferrer" className="direct-contact-btn youtube">
                                <svg viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                YouTube
                            </a>
                            <a href="https://www.facebook.com/WittklaKlabine" target="_blank" rel="noopener noreferrer" className="direct-contact-btn facebook">
                                <svg viewBox="0 0 320 512">
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                </svg>
                                Facebook
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="contact-right">
                        <AnimatePresence mode="wait">
                            {state.succeeded ? (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="contact-success"
                                    style={{ textAlign: 'center', padding: '3rem' }}
                                >
                                    <div className="success-icon" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✅</div>
                                    <h2 className="h2" style={{ marginBottom: '1rem' }}>{t('contact_success_title')}</h2>
                                    <p className="text-body" style={{ margin: '0 auto' }}>{t('contact_success_body')}</p>
                                </motion.div>
                            ) : (
                                <motion.form 
                                    key="form"
                                    onSubmit={handleSubmit} 
                                    className="contact-form"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: -20 }}
                                >
                                    <div className="form-group">
                                        <label className="form-label">{t('contact_form_name')}</label>
                                        <input type="text" name="name" className="form-input" placeholder={t('contact_form_name_ph')} required />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">{t('contact_form_email')}</label>
                                        <input type="email" name="email" className="form-input" placeholder="info@wittkla.com" required />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">{t('contact_form_phone')}</label>
                                        <input type="tel" name="phone" className="form-input" placeholder="+49 ..." />
                                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">{t('contact_form_vehicle')}</label>
                                        <div className="select-wrapper">
                                            <select name="vehicle" className="form-select" defaultValue="">
                                                <option value="" disabled>{t('contact_form_vehicle_ph')}</option>
                                                <option value="sprinter">Mercedes Sprinter</option>
                                                <option value="ducato">Fiat Ducato</option>
                                                <option value="crafter">VW Crafter</option>
                                                <option value="transit">Ford Transit</option>
                                                <option value="other">{t('contact_form_vehicle_other')}</option>
                                            </select>
                                        </div>
                                        <ValidationError prefix="Vehicle" field="vehicle" errors={state.errors} />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">{t('contact_form_msg')}</label>
                                        <textarea name="message" className="form-textarea" rows={4} placeholder={t('contact_form_msg_ph')} required></textarea>
                                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                                    </div>

                                    <MagneticButton 
                                        type="submit" 
                                        disabled={state.submitting} 
                                        className="submit-btn" 
                                        style={{marginTop: '1rem'}}
                                    >
                                        {state.submitting ? "..." : t('contact_submit')}
                                    </MagneticButton>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </motion.section>
    );
};

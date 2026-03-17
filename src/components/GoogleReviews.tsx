import React from 'react';
import { useTranslation } from 'react-i18next';
import './GoogleReviews.css';

export const GoogleReviews: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="google-reviews-section">
            <div className="reviews-container">
                <h2 className="section-title">
                    {t('review_title')}
                </h2>

                <div className="reviews-grid">
                    {/* Review 1 */}
                    <div className="review-card">
                        <div className="stars">★★★★★</div>
                        <div className="review-date">{t('review_1_time')}</div>
                        <div className="review-text-wrapper">
                            <p className="review-text original-text">
                                "Servizio impeccabile partito dalla Germania mi ha raggiunto in Italia in meno di 4 ore... Super soddisfatto lo consiglio a tutti."
                            </p>
                            <p className="review-text translation-text">
                                {t('review_1_translation')}
                            </p>
                        </div>
                        <div className="reviewer-info">
                            <div className="reviewer-avatar">T</div>
                            <div>
                                <div className="reviewer-name">Tommaso Secco</div>
                                <div className="reviewer-status">{t('review_1_status')}</div>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="review-card">
                        <div className="stars">★★★★★</div>
                        <div className="review-date">{t('review_2_time')}</div>
                        <div className="review-text-wrapper" style={{ display: 'block' }}>
                            <p className="review-text">
                                {t('review_2_text')}
                            </p>
                        </div>
                        <div className="reviewer-info">
                            <div className="reviewer-avatar">C</div>
                            <div>
                                <div className="reviewer-name">Carsten Schneider</div>
                                <div className="reviewer-status">{t('review_2_status')}</div>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="review-card">
                        <div className="stars">★★★★★</div>
                        <div className="review-date">{t('review_3_time')}</div>
                        <div className="review-text-wrapper">
                            <p className="review-text original-text">
                                "A good partner to work with, delivering good quality and honouring agreements."
                            </p>
                            <p className="review-text translation-text">
                                {t('review_3_translation')}
                            </p>
                        </div>
                        <div className="reviewer-info">
                            <div className="reviewer-avatar">v</div>
                            <div>
                                <div className="reviewer-name">van den Hurk brijfswagens</div>
                                <div className="reviewer-status">{t('review_3_status')}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cta-wrapper">
                    <a href="https://search.google.com/local/writereview?placeid=ChIJdcpZOubuuUcRwvxxHcaOsiw" className="review-button" target="_blank" rel="noopener noreferrer">
                        {t('review_submit_btn')}
                    </a>
                    <div className="google-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg viewBox="0 0 24 24" width="24" height="24" style={{ marginRight: '8px' }}>
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l2.49-1.93l1.19-.91z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span style={{ fontWeight: 600, color: '#333' }}>Google {t('review_label')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

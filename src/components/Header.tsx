import React from 'react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
    return (
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
            pointerEvents: 'none'
        }}>
            <div style={{ pointerEvents: 'auto' }}>
                <Logo />
            </div>
        </header>
    );
};

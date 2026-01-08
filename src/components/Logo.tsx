import React from 'react';

interface LogoProps {
    color?: string;
    width?: string;
}

export const Logo: React.FC<LogoProps> = ({ color = 'white', width = '140px' }) => {
    // Use filter to invert the likely dark text of the logo for dark backgrounds
    const filterStyle = color === 'white'
        ? 'brightness(0) invert(1)'
        : 'none';

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src="/wittkla-logo.webp"
                alt="Wittkla Logo"
                style={{
                    width: width,
                    height: 'auto',
                    filter: filterStyle,
                    transition: 'filter 0.3s ease',
                    objectFit: 'contain'
                }}
            />
        </div>
    );
};

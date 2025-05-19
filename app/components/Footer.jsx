import React from 'react';

const Footer = ({ desc = '© 2025 Rafael Fernández - Zstral'}) => {
    return (
        <div className="footer">
            <p>{desc}</p>
        </div>
    );
};

export default Footer;
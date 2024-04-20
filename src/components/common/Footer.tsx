import React from 'react';

interface FooterProps {
    title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
    return (
        <footer style={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'center' }}>
            Proudly built with React.ts in React Bootstrap
            &copy; 2024 by {title}
        </footer>
    );
};

export default Footer;
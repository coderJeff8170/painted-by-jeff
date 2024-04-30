import React from "react";

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer style={{ bottom: 0, width: "100%", textAlign: "center", margin: "2rem 0 1rem 0 " }}>
      Proudly built with React.ts in React Bootstrap &copy; 2024 by {title}
    </footer>
  );
};

export default Footer;

import React from "react";
import styles from "./Footer.module.css";

interface FooterProps {
  title: string;
}

export const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer className={styles.footer}>
      Proudly built with React.ts in React Bootstrap &copy; 2024 by {title}
    </footer>
  );
};


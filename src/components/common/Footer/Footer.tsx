interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer className="mt-4 mb-4 text-center">
      Proudly built with React.ts in React Bootstrap &copy; 2024 by {title}
    </footer>
  );
};

export default Footer;


interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="mt-4 mb-4 text-center">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default Header;

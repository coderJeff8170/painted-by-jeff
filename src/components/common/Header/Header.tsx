interface HeaderProps {
  supertitle?: string | JSX.Element;
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
}

const Header: React.FC<HeaderProps> = ({ supertitle, title, subtitle }) => {
  return (
    <header className="mt-4 mb-4 text-center">
      {supertitle && <div>{supertitle}</div>}
      <h1>{title}</h1>
      {subtitle && <div>{subtitle}</div>}
    </header>
  );
};

export default Header;

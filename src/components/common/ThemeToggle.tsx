import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ToggleIconLight } from "../../assets/icons/ToggleIconLight";
import { ToggleIconDark } from "../../assets/icons/ToggleIconDark";

export const ThemeToggle: React.FC = () => {

  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Button
      onClick={toggleTheme}
      className="clean-btn toggleButton"
      type="button"
      title={`Switch between dark and light mode (currently ${theme} mode)`}
      aria-label={`Switch between dark and light mode (currently ${theme} mode)`}
      aria-live="polite"
    >
      {theme === "light" ? <ToggleIconLight /> : <ToggleIconDark />}
    </Button>
  );
};

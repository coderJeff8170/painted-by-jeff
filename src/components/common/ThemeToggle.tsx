import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]);

    return (
        <Button onClick={toggleTheme} >
            Toggle Theme to {theme === "light" ? "Dark" : "Light"}
        </Button>
    );
};
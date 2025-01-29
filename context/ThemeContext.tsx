import {
  ReactNode,
  useContext,
  useState,
  useEffect,
  createContext,
} from "react";

interface Props {
  children: ReactNode;
}

interface Context {
  theme: "light" | "dark";
  handleTheme: () => void;
}

const initialState: Context = {
  theme: "dark",
  handleTheme: () => {},
};

const ThemeContext = createContext(initialState);

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<"light" | "dark">(initialState.theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as "light" | "dark");
    }
  }, []);

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const themeState = {
    theme,
    handleTheme,
  };

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  // example shows that default methods can be passed too.
  isDarkMode: false,
  toggleMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    console.log("toggle mode clicked")
    setIsDarkMode((prev) => !prev);
  };

  // changing the theme
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
// this comment refers to a diff method that we were using to learn but that method was not scalable so we are followig this.
// this var holds the reference to the context Provider property( that will be used to wrap the children/components to pass the values directly);

export default function useTheme() {
  // this function returns the data directly from the useContext that have themeContext as arguments;
  return useContext(ThemeContext); // why we do this -> it makes it easy and less work like: importing the method/file in the component i want to use the data of themeContext
  // now i can directly call the useTheme that have the data.
}

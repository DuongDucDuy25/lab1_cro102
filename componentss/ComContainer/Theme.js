// Theme.js
import { createContext, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = theme === 'light' ? styles.light : styles.dark;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  light: {
    backgroundColor: '#fff',
    color: '#000',
  },
  dark: {
    backgroundColor: '#333',
    color: '#fff',
  },
});

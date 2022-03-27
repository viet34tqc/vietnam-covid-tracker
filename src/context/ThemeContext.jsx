import { createContext, useContext } from 'react';
import useDarkMode from '../hooks/useDarkmode';

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
	const [isDarkMode, toggleDarkMode] = useDarkMode();
	const value = {
		isDarkMode,
		toggleDarkMode,
	};
	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
export default ThemeContextProvider;
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useSomething must be used within a SomethingProvider');
	}
	return context;
};

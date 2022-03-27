import { useEffect, useState } from 'react';

const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(
		// If theme from localstorage is dark
		// If not, check if the system theme is dark
		() =>
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
	);
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};
	useEffect(() => {
		const html = document.documentElement;
		html.classList.remove(isDarkMode ? 'light' : 'dark');
		html.classList.add(isDarkMode ? 'dark' : 'light');

		// If using data-theme
		// html.dataset.theme = isDarkMode ? 'dark' : 'light'
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
	}, [isDarkMode]);
	return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;

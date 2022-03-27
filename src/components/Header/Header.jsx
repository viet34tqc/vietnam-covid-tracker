import React from 'react';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Nav from '../Nav/Nav';
const Header = () => {
	const { toggleDarkMode, isDarkMode } = useTheme();
	return (
		<div className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
			<strong>
				<Link to="/" className="dark:text-white">
					Vietnam Corona Tracker
				</Link>
			</strong>
			<Nav />
			<button onClick={toggleDarkMode}>
				{isDarkMode ? <BsMoonFill size="20px" /> : <BsSun size="20px" />}
			</button>
		</div>
	);
};

export default Header;

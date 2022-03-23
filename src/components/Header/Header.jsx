import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Header = () => {
	return (
		<div className="flex justify-between items-center p-4 shadow-md">
			<strong>
				<Link to="/">Vietnam Corona Tracker</Link>
			</strong>
			<Nav />
			<button>Toggle Theme</button>
		</div>
	);
};

export default Header;

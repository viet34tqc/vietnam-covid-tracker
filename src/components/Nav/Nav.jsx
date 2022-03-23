import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	const linkClass = 'text-gray-500 hover:text-gray-700';
	const activeLinkClass = 'font-bold text-gray-800 hover:text-gray-700';
	return (
		<nav className="gap-4 hidden md:flex">
			<NavLink
				className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
				to="/"
			>
				Số liệu Covid-19
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
				to="/vaccine"
			>
				Số liệu Vaccine
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
				to="/news"
			>
				Tin tức
			</NavLink>
		</nav>
	);
};

export default Nav;

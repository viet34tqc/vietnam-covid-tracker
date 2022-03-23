import React from 'react';
import { FaChartBar, FaChartLine, FaNewspaper } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	const linkClass =
		'text-gray-500 hover:text-gray-700 flex flex-col items-center';
	const activeLinkClass =
		'font-bold text-gray-800 hover:text-gray-700 flex flex-col items-center';
	return (
		<nav className="gap-4 flex fixed md:hidden bottom-0 right-0 left-0 justify-between p-4 border-t-gray-300 border-t-1 border-t bg-white shadow-sm">
			<NavLink
				className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
				to="/"
			>
				<FaChartBar />
				Số liệu Covid-19
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
				to="/vaccine"
			>
				<FaChartLine />
				Số liệu Vaccine
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
				to="/news"
			>
				<FaNewspaper />
				Tin tức
			</NavLink>
		</nav>
	);
};

export default Nav;

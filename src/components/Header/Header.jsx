import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<Link to="/">Số liệu Covid-19</Link>
			<Link to="/vaccine">Số liệu Vaccine</Link>
			<Link to="/news">Tin tức</Link>
		</nav>
	);
};

export default Header;

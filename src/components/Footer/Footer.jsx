import React from 'react';
import MobileNav from '../MobileNav/MobileNav';

const Footer = () => {
	return (
		<div className="bg-gray-100 dark:bg-gray-800">
			<footer className="py-4 text-center container">
				Copyright &copy; {new Date().getFullYear()} by Viet Nguyen
			</footer>
			<MobileNav />
		</div>
	);
};

export default Footer;

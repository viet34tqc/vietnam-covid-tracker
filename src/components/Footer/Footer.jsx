import React from 'react';
import MobileNav from '../MobileNav/MobileNav';

const Footer = () => {
	return (
		<>
			<footer>Copyright &copy; {new Date().getFullYear()}</footer>
			<MobileNav />
		</>
	);
};

export default Footer;

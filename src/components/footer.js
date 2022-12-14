import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../locale/FI.js'
import '../css/Footer.css';


export const Footer = () => {
	return (
		<div>
			<div className="container px-2 px-lg-5 mt-5">
			</div>
			<footer className="py-5 bg-dark footer">
				<div className="container"><p className="m-0 text-center text-white">Copyright &copy; {language.shopName} 2022</p></div>
			</footer>
			
		</div>
		
	);
}

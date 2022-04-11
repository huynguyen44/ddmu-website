import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
		linkto: 'https://www.facebook.com/%C4%90o%C3%A0n-TNTT-%C4%90aminh-%C3%9Ay-San-Antonio-TX-105275268569856'
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
		linkto: 'https://www.instagram.com/tnttdmu/'
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
	},
];

export const footerData = [
	{
		title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
	},
	{
		title: 'Product',
		links: ['Login', 'Personal', 'Business', 'Team'],
	},
	{
		title: 'Press',
		links: ['Logos', 'Events', 'Stories', 'Office'],
	},
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];

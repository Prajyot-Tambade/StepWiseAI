import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container } from '../';
import Menu from '../../assets/menu.png';
import Cross from '../../assets/cross.png';
const Header = () => {
	const navItems = [
		{ name: 'Feature', path: '#features', active: true },
		{ name: 'How it works', path: '#howitworks', active: true },
		{ name: 'Pricing', path: '#pricing', active: true },
	];

	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='fixed top-0 left-0 w-full bg-[#191919]'>
			<Container>
				<nav className='flex justify-between flex-wrap py-4'>
					{/* Link to the homepage */}
					<Link to='/'>
						<h2 className='font-medium text-2xl'>StepWiseAI</h2>
					</Link>

					{/* Hamburger menu */}
					<button
						className='md:hidden text-3xl'
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? (
							<img src={Cross} alt="" />
						) : (
							<img src={Menu} alt="" />
						)}
					</button>

					{/* Navigation links */}
					<ul
						className={`basis-full bg-[#191919] duration-300 ease-in-out opacity-0 ${
							isOpen? 'block opacity-100':'hidden'
						} md:flex md:opacity-100 md:basis-auto`}
					>
						{/* {navItems.map((item, index) => (
							<li key={index} className='md:ml-6 py-4'>
								<NavLink to={item.path}>{item.name}</NavLink>
							</li>
						))} */}
						<li className='md:ml-6 md:flex items-center'>
							<Button
								className='w-full rounded-full hover:bg-gray-600'
								bgColor='bg-transparent'
								border='border-3 border-gray-600'
								type='link'
								to='#'
							>
								Login
							</Button>
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	);
};

export default Header;

import React from 'react';
import { Link } from 'react-router';

interface BottomNavigationProps {
	active: 'home' | 'explore' | 'favorites' | 'chat' | 'profile';
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ active }) => {
	return (
		<div className="border-t border-gray-200">
			<div className="flex justify-around py-2">
				<Link
					to="/"
					className={`flex flex-col items-center p-2 ${
						active === 'home' ? 'text-blue-500' : 'text-gray-500'
					}`}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2">
						<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
						<polyline points="9 22 9 12 15 12 15 22" />
					</svg>
					<span className="text-xs mt-1">Home</span>
				</Link>
				<Link
					to="/explore"
					className={`flex flex-col items-center p-2 ${
						active === 'explore' ? 'text-blue-500' : 'text-gray-500'
					}`}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2">
						<circle cx="12" cy="12" r="10" />
						<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
					</svg>
					<span className="text-xs mt-1">Explore</span>
				</Link>
				<Link
					to="/favorites"
					className={`flex flex-col items-center p-2 ${
						active === 'favorites' ? 'text-blue-500' : 'text-gray-500'
					}`}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2">
						<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
					</svg>
					<span className="text-xs mt-1">Favorite</span>
				</Link>
				<Link
					to="/chat"
					className={`flex flex-col items-center p-2 ${
						active === 'chat' ? 'text-blue-500' : 'text-gray-500'
					}`}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2">
						<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
					</svg>
					<span className="text-xs mt-1">Chat</span>
				</Link>
				<Link
					to="/profile"
					className={`flex flex-col items-center p-2 ${
						active === 'profile' ? 'text-blue-500' : 'text-gray-500'
					}`}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2">
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
						<circle cx="12" cy="7" r="4" />
					</svg>
					<span className="text-xs mt-1">Profile</span>
				</Link>
			</div>
		</div>
	);
};

export default BottomNavigation;

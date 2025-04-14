import React from 'react';
import { Link } from 'react-router';
// import { useAuth } from '../context/AuthContext';

const HomePage: React.FC = () => {
	// const { currentUser } = useAuth();

	return (
		<div className="flex flex-col min-h-screen bg-white">
			<div className="flex-1 flex flex-col items-center p-8">
				<div className="w-full max-w-md rounded-3xl overflow-hidden shadow-lg">
					<div className="relative pb-4">
						{/* Status bar */}
						<div className="flex justify-between items-center p-4">
							<div className="text-xs">9:41</div>
							<div className="flex items-center">
								<div className="mr-1">
									<svg
										viewBox="0 0 17 12"
										width="17"
										height="12"
										className="fill-current">
										<path
											d="M1.5 0h14a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 0 10.5v-9A1.5 1.5 0 0 1 1.5 0z"
											opacity=".35"
										/>
										<path d="M16 2v8H1V2h15z" />
									</svg>
								</div>
								<div className="mr-1">
									<svg
										viewBox="0 0 17 12"
										width="17"
										height="12"
										className="fill-current">
										<path
											d="M8.5 0h-1C5.977 0 4.5 1.477 4.5 3.5v5C4.5 10.523 5.977 12 7.5 12h1c1.523 0 3-1.477 3-3.5v-5C11.5 1.477 10.023 0 8.5 0z"
											opacity=".35"
										/>
										<path d="M7.5 2.5h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z" />
									</svg>
								</div>
								<div>
									<svg
										viewBox="0 0 24 24"
										width="24"
										height="24"
										className="fill-current">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M22 14h-2V7a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v7H2a1 1 0 0 0-1 1v3a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1zm-11 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
										/>
									</svg>
								</div>
							</div>
						</div>

						{/* Hotel image */}
						<div className="px-8">
							<div className="relative rounded-full overflow-hidden aspect-square mb-4">
								<img
									src="/api/placeholder/400/400"
									alt="Tropical resort with pool and palm trees"
									className="w-full h-full object-cover"
								/>
								<div className="absolute bottom-4 right-4 bg-blue-500 rounded-full p-4">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										className="text-white">
										<path
											d="M5 12h14M12 5l7 7-7 7"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className="absolute bottom-4 left-4 bg-white rounded-full p-2">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path
											d="M8.5 15a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM16 16l-3-3"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</div>
						</div>

						{/* Heading */}
						<div className="px-8">
							<h1 className="text-2xl font-bold">
								Redefining Your{' '}
								<span className="text-blue-500">Hotel Reservation</span>{' '}
								Experience
							</h1>
							<p className="text-gray-500 mt-4 mb-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt
							</p>
						</div>

						{/* CTA Button */}
						<div className="px-8 mb-4">
							<Link
								to="/search"
								className="block w-full bg-blue-500 text-white text-center py-4 rounded-full font-medium">
								Let's Get Started
							</Link>
						</div>

						{/* Sign In Link */}
						<div className="px-8 text-center">
							<p className="text-gray-600">
								Already have an account?{' '}
								<Link to="/login" className="text-blue-500">
									Sign In
								</Link>
							</p>
						</div>
					</div>

					{/* Bottom navigation bar indicator */}
					<div className="flex justify-center py-2">
						<div className="w-12 h-1 bg-black rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;

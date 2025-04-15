import React from 'react';
import { Link } from 'react-router';
import images from '../constants/images';
// import { useAuth } from '../context/AuthContext';

const HomePage: React.FC = () => {
	// const { currentUser } = useAuth();

	return (
		<div className="flex flex-col min-h-screen bg-white">
			<div className="flex-1 flex flex-col items-center p-8">
				<div className="w-full max-w-md rounded-3xl overflow-hidden shadow-lg">
					<div className="relative pb-4">
						{/* Hotel image */}
						<div className="px-8">
							<div className="relative rounded-full overflow-hidden aspect-square mb-4">
								<img
									src={images.hotel13}
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

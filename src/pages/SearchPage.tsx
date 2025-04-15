import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { getHotels } from '../services/hotelService';
import { Hotel } from '../..';
import BottomNavigation from '../components/BottomNavigation';

const SearchPage: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [hotels, setHotels] = useState<Hotel[]>([]);
	const [recommendedHotels, setRecommendedHotels] = useState<Hotel[]>([]);
	const [nearbyHotels, setNearbyHotels] = useState<Hotel[]>([]);
	const [loading, setLoading] = useState(true);
	const [location] = useState('New York, USA');

	useEffect(() => {
		const fetchHotels = async () => {
			try {
				const allHotels = await getHotels();
				setHotels(allHotels);

				setRecommendedHotels(allHotels.slice(0, 2));

				setNearbyHotels(allHotels.slice(2, 4));

				setLoading(false);
			} catch (error) {
				console.error('Error fetching hotels:', error);
				setLoading(false);
			}
		};

		fetchHotels();
	}, []);

	const HotelCard: React.FC<{ hotel: Hotel; size?: 'small' | 'regular' }> = ({
		hotel,
		size = 'regular',
	}) => {
		return (
			<div className={`${size === 'small' ? 'w-full' : 'w-1/2 md:w-48'} p-1`}>
				<div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm">
					<div className="relative">
						<img
							src={hotel.imageUrl}
							alt={hotel.name}
							className="w-full h-24 object-cover"
						/>
						<button
							className="absolute top-2 right-2 text-gray-600 bg-white rounded-full p-1"
							title="button"
							type="button">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								className="stroke-current">
								<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
							</svg>
						</button>
					</div>
					<div className="p-2">
						{hotel.discount && (
							<span className="text-xs text-blue-500">
								{hotel.discount}% Off
							</span>
						)}
						<div className="flex justify-between items-center">
							<span className="font-bold text-sm">{hotel.name}</span>
							<div className="flex items-center">
								<svg
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="gold"
									stroke="currentColor"
									strokeWidth="1"
									className="mr-1">
									<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
								</svg>
								<span className="text-xs">{hotel.rating}</span>
							</div>
						</div>
						<div className="flex items-center text-xs text-gray-500 mt-1">
							<svg
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								className="mr-1">
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
								<circle cx="12" cy="10" r="3" />
							</svg>
							{hotel.location}
						</div>
						<div className="mt-2 text-sm">
							<span className="font-bold">${hotel.price}</span>
							<span className="text-xs text-gray-500">/night</span>
						</div>
					</div>
				</div>
			</div>
		);
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	}

	return (
		<div className="flex flex-col min-h-screen bg-white">
			<div className="flex-1">
				<div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
					{/* Status Bar */}
					<div className="flex justify-between items-center p-4">
						<div className="text-xs">9:41</div>
						<div className="flex space-x-1">
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<path d="M20 6L9 17l-5-5" />
							</svg>
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
								<line x1="2" y1="20" x2="2" y2="20" />
							</svg>
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<path d="M23 6v16h-6v-6h-6v6H5V6h4V2h6v4h8z" />
							</svg>
						</div>
					</div>

					{/* Location Selector */}
					<div className="px-4">
						<div className="mb-2 text-xs text-gray-500">Location</div>
						<div className="flex items-center mb-4">
							<div className="mr-2">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="blue"
									stroke="blue"
									strokeWidth="1">
									<circle cx="12" cy="12" r="10" />
								</svg>
							</div>
							<div className="flex-1">
								<span className="font-medium">{location}</span>
							</div>
							<div>
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2">
									<path d="M6 9l6 6 6-6" />
								</svg>
							</div>
						</div>
					</div>

					{/* Search Bar */}
					<div className="px-4 flex items-center mb-4">
						<div className="flex-1 relative">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2">
									<circle cx="11" cy="11" r="8" />
									<line x1="21" y1="21" x2="16.65" y2="16.65" />
								</svg>
							</div>
							<input
								type="text"
								placeholder="Search"
								className="bg-gray-100 w-full py-2 pl-10 pr-4 rounded-lg focus:outline-none"
							/>
						</div>
						<div className="ml-2">
							<button
								className="bg-blue-500 p-2 rounded-lg"
								title="button"
								type="button">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="white"
									strokeWidth="2">
									<line x1="4" y1="21" x2="4" y2="14" />
									<line x1="4" y1="10" x2="4" y2="3" />
									<line x1="12" y1="21" x2="12" y2="12" />
									<line x1="12" y1="8" x2="12" y2="3" />
									<line x1="20" y1="21" x2="20" y2="16" />
									<line x1="20" y1="12" x2="20" y2="3" />
									<line x1="1" y1="14" x2="7" y2="14" />
									<line x1="9" y1="8" x2="15" y2="8" />
									<line x1="17" y1="16" x2="23" y2="16" />
								</svg>
							</button>
						</div>
					</div>

					{/* Recommended Hotels Section */}
					<div className="px-4 mb-4">
						<div className="flex justify-between items-center mb-2">
							<h2 className="font-bold">Recommended Hotel</h2>
							<Link to="/search" className="text-blue-500 text-sm">
								See all
							</Link>
						</div>
						<div className="flex -mx-1">
							{recommendedHotels.map((hotel) => (
								<Link
									to={`/hotel/${hotel.id}`}
									key={hotel.id}
									className="block w-1/2">
									<HotelCard hotel={hotel} />
								</Link>
							))}
						</div>
					</div>

					{/* Nearby Hotels Section */}
					<div className="px-4 mb-4">
						<div className="flex justify-between items-center mb-2">
							<h2 className="font-bold">Nearby Hotel</h2>
							<Link to="/search" className="text-blue-500 text-sm">
								See all
							</Link>
						</div>
						<div className="flex -mx-1">
							{nearbyHotels.map((hotel) => (
								<Link
									to={`/hotel/${hotel.id}`}
									key={hotel.id}
									className="block w-1/2">
									<HotelCard hotel={hotel} size="small" />
								</Link>
							))}
						</div>
					</div>

					{/* Bottom Navigation */}
					<BottomNavigation active="home" />
				</div>
			</div>
		</div>
	);
};

export default SearchPage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { getHotels } from '../services/hotelService';
import { Hotel } from '../..';
import BottomNavigation from '../components/BottomNavigation';
import HotelCard from '../components/HotelCard';

const SearchPage: React.FC = () => {
	const [, setHotels] = useState<Hotel[]>([]);
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

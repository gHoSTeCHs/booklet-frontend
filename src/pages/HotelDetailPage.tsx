import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { getHotelById } from '../services/hotelService';
import { Hotel } from '../..';

const HotelDetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [hotel, setHotel] = useState<Hotel | null>(null);
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState<'about' | 'gallery' | 'review'>(
		'about'
	);

	useEffect(() => {
		const fetchHotel = async () => {
			if (!id) return;

			try {
				const hotelData = await getHotelById(id);
				if (hotelData) {
					setHotel(hotelData);
				}
			} catch (error) {
				console.error('Error fetching hotel:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchHotel();
	}, [id]);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	}

	if (!hotel) {
		return (
			<div className="flex justify-center items-center h-screen">
				Hotel not found
			</div>
		);
	}

	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
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

					{/* Hotel Image */}
					<div className="relative">
						<img
							src="/api/placeholder/400/250"
							alt={hotel.name}
							className="w-full h-64 object-cover"
						/>

						{/* Back Button */}
						<Link
							to="/search"
							className="absolute top-4 left-4 bg-white rounded-full p-2">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<path d="M19 12H5M12 19l-7-7 7-7" />
							</svg>
						</Link>

						{/* Share Button */}
						<button
							className="absolute top-4 right-12 bg-white rounded-full p-2"
							title="buttom">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<circle cx="18" cy="5" r="3" />
								<circle cx="6" cy="12" r="3" />
								<circle cx="18" cy="19" r="3" />
								<line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
								<line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
							</svg>
						</button>

						{/* Favorite Button */}
						<button
							className="absolute top-4 right-4 bg-white rounded-full p-2"
							title="buttom">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
							</svg>
						</button>

						{/* Thumbnails */}
						<div className="absolute bottom-4 left-4 flex space-x-2">
							{[1, 2, 3, 4].map((_, index) => (
								<div
									key={index}
									className={`w-12 h-8 bg-gray-200 rounded-md overflow-hidden border-2 ${
										index === 0 ? 'border-white' : 'border-transparent'
									}`}>
									<img
										src="/api/placeholder/48/32"
										alt={`Thumbnail ${index + 1}`}
										className="w-full h-full object-cover"
									/>
								</div>
							))}
							<div className="w-12 h-8 bg-gray-800 rounded-md flex items-center justify-center text-white text-xs">
								+10
							</div>
						</div>
					</div>

					{/* Hotel Info */}
					<div className="p-4">
						{hotel.discount && (
							<div className="mb-2 text-blue-500 font-medium">
								{hotel.discount}% Off
							</div>
						)}

						<div className="flex justify-between items-center mb-1">
							<h1 className="text-xl font-bold">{hotel.name}</h1>
							<div className="flex items-center">
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="gold"
									stroke="currentColor"
									strokeWidth="1"
									className="mr-1">
									<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
								</svg>
								<span className="text-sm font-medium">{hotel.rating}</span>
								{hotel.reviewCount && (
									<span className="text-sm text-gray-500 ml-1">
										({hotel.reviewCount} reviews)
									</span>
								)}
							</div>
						</div>

						<div className="text-sm text-gray-600 mb-4">
							{hotel.address || hotel.location}
						</div>

						{/* Tabs */}
						<div className="border-b border-gray-200 mb-4">
							<div className="flex">
								<button
									className={`pb-2 px-4 text-sm font-medium ${
										activeTab === 'about'
											? 'text-blue-500 border-b-2 border-blue-500'
											: 'text-gray-500'
									}`}
									onClick={() => setActiveTab('about')}>
									About
								</button>
								<button
									className={`pb-2 px-4 text-sm font-medium ${
										activeTab === 'gallery'
											? 'text-blue-500 border-b-2 border-blue-500'
											: 'text-gray-500'
									}`}
									onClick={() => setActiveTab('gallery')}>
									Gallery
								</button>
								<button
									className={`pb-2 px-4 text-sm font-medium ${
										activeTab === 'review'
											? 'text-blue-500 border-b-2 border-blue-500'
											: 'text-gray-500'
									}`}
									onClick={() => setActiveTab('review')}>
									Review
								</button>
							</div>
						</div>

						{/* Description */}
						{activeTab === 'about' && (
							<div>
								<div className="mb-4">
									<h2 className="font-medium mb-2">Description</h2>
									<p className="text-sm text-gray-600">
										{hotel.description}
										<button className="text-blue-500 ml-1">Read more</button>
									</p>
								</div>

								<div className="mb-4">
									<h2 className="font-medium mb-2">Contact Details</h2>
									<div className="flex items-center bg-gray-100 rounded-lg p-3">
										<div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">
											J
										</div>
										<div>
											<div className="font-medium">John Doe</div>
										</div>
										<div className="ml-auto flex space-x-2">
											<button
												className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white"
												title="buttom">
												<svg
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2">
													<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
												</svg>
											</button>
											<button
												className="border border-blue-500 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
												title="buttom">
												<svg
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2">
													<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
												</svg>
											</button>
										</div>
									</div>
								</div>

								{/* Amenities */}
								<div className="flex space-x-4 mb-4">
									{hotel.amenities?.beds && (
										<div className="flex flex-col items-center">
											<div className="flex items-center justify-center mb-1">
												<svg
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2">
													<path d="M2 4v16M22 4v16M6 12h12M2 12h4M18 12h4M12 12v8" />
												</svg>
											</div>
											<div className="text-sm">{hotel.amenities.beds} Beds</div>
										</div>
									)}

									{hotel.amenities?.baths && (
										<div className="flex flex-col items-center">
											<div className="flex items-center justify-center mb-1">
												<svg
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2">
													<path d="M4 12h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
													<path d="M6 12V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7" />
													<path d="M4 19v1M20 19v1" />
												</svg>
											</div>
											<div className="text-sm">
												{hotel.amenities.baths} Bath
											</div>
										</div>
									)}

									{hotel.amenities?.sqft && (
										<div className="flex flex-col items-center">
											<div className="flex items-center justify-center mb-1">
												<svg
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2">
													<rect
														x="3"
														y="3"
														width="18"
														height="18"
														rx="2"
														ry="2"
													/>
													<line x1="3" y1="9" x2="21" y2="9" />
													<line x1="9" y1="21" x2="9" y2="9" />
												</svg>
											</div>
											<div className="text-sm">{hotel.amenities.sqft} sqft</div>
										</div>
									)}
								</div>
							</div>
						)}

						{activeTab === 'gallery' && (
							<div className="grid grid-cols-3 gap-2">
								{[1, 2, 3, 4, 5, 6].map((_, index) => (
									<div
										key={index}
										className="aspect-square bg-gray-200 rounded-md overflow-hidden">
										<img
											src="/api/placeholder/120/120"
											alt={`Gallery ${index + 1}`}
											className="w-full h-full object-cover"
										/>
									</div>
								))}
							</div>
						)}

						{activeTab === 'review' && (
							<div>
								<div className="flex items-center mb-4">
									<div className="bg-yellow-100 rounded-lg p-2 mr-2">
										<span className="text-yellow-500 font-bold text-lg">
											{hotel.rating}
										</span>
									</div>
									<div>
										<div className="font-medium">Excellent</div>
										<div className="text-sm text-gray-500">
											{hotel.reviewCount || 0} reviews
										</div>
									</div>
								</div>

								<div className="border-t border-gray-200 pt-4">
									<div className="mb-4">
										<div className="flex items-center mb-2">
											<div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
											<div>
												<div className="font-medium">Jane Smith</div>
												<div className="text-xs text-gray-500">2 days ago</div>
											</div>
											<div className="ml-auto flex items-center">
												<svg
													width="12"
													height="12"
													viewBox="0 0 24 24"
													fill="gold"
													stroke="currentColor"
													strokeWidth="1">
													<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
												</svg>
												<svg
													width="12"
													height="12"
													viewBox="0 0 24 24"
													fill="gold"
													stroke="currentColor"
													strokeWidth="1">
													<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
												</svg>
												<svg
													width="12"
													height="12"
													viewBox="0 0 24 24"
													fill="gold"
													stroke="currentColor"
													strokeWidth="1">
													<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
												</svg>
												<svg
													width="12"
													height="12"
													viewBox="0 0 24 24"
													fill="gold"
													stroke="currentColor"
													strokeWidth="1">
													<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
												</svg>
												<svg
													width="12"
													height="12"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="1">
													<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
												</svg>
											</div>
										</div>
										<p className="text-sm text-gray-600">
											Really enjoyed my stay! The room was clean and the service
											was excellent.
										</p>
									</div>

									<div className="mb-4">
										<div className="flex items-center mb-2">
											<div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
											<div>
												<div className="font-medium">Mark Johnson</div>
												<div className="text-xs text-gray-500">Last week</div>
											</div>
											<div className="ml-auto flex items-center">
												<svg
													width="12"
													height="12"
													viewBox="0 0 24 24"
													fill="gold"
													stroke="currentColor"
													strokeWidth="1">
													<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
												</svg>
												<svg
													width="12"
													height="12"
													viewBox="0 0 24 24"
													fill="gold"
													stroke="currentColor"
													strokeWidth="1">
													<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
												</svg>
												<svg
													width="12"
													height="12"
													viewBox="0 0 24 24"
													fill="gold"
													stroke="currentColor"
													strokeWidth="1">
													<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
												</svg>
												<svg
													width="12"
													height="12"
													viewBox="0 0 24 24"
													fill="gold"
													stroke="currentColor"
													strokeWidth="1">
													<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
												</svg>
												<svg
													width="12"
													height="12"
													viewBox="0 0 24 24"
													fill="gold"
													stroke="currentColor"
													strokeWidth="1">
													<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
												</svg>
											</div>
										</div>
										<p className="text-sm text-gray-600">
											Perfect location and amazing amenities. Would definitely
											stay here again!
										</p>
									</div>
								</div>
							</div>
						)}
					</div>

					{/* Price and Booking */}
					<div className="border-t border-gray-200 p-4 flex items-center justify-between">
						<div>
							<div className="text-lg font-bold">${hotel.price}</div>
							<div className="text-xs text-gray-500">/night</div>
						</div>
						<button className="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg">
							Book Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelDetailPage;

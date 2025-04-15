import { Hotel } from '../..';

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
						<span className="text-xs text-blue-500">{hotel.discount}% Off</span>
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

export default HotelCard;

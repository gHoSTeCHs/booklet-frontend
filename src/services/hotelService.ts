import { Hotel } from '../..';
import { hotels } from '../constants/data';

export const getHotels = (): Promise<Hotel[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(hotels);
		}, 500);
	});
};

export const getHotelById = (id: string): Promise<Hotel | undefined> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const hotel = hotels.find((h) => h.id === id);
			resolve(hotel);
		}, 500);
	});
};

export const searchHotels = (
	query: string,
	location?: string
): Promise<Hotel[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			let filteredHotels = [...hotels];

			if (query) {
				filteredHotels = filteredHotels.filter((hotel) =>
					hotel.name.toLowerCase().includes(query.toLowerCase())
				);
			}

			if (location) {
				filteredHotels = filteredHotels.filter((hotel) =>
					hotel.location.toLowerCase().includes(location.toLowerCase())
				);
			}

			resolve(filteredHotels);
		}, 500);
	});
};

export interface Hotel {
	id: string;
	name: string;
	location: string;
	price: number;
	discount?: number;
	rating: number;
	reviewCount?: number;
	imageUrl: string;
	address?: string;
	description?: string;
	amenities?: {
		beds?: number;
		baths?: number;
		sqft?: number;
	};
	gallery?: string[];
}

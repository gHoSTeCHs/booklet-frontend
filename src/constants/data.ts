import { Hotel } from '../..';
import images from './images';

export const hotels: Hotel[] = [
	{
		id: '1',
		name: 'OasisOverture',
		location: 'New York, USA',
		price: 650,
		discount: 10,
		rating: 4.5,
		imageUrl: images.hotel1,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		amenities: {
			beds: 2,
			baths: 1,
			sqft: 1200,
		},
		gallery: [images.hotel1, images.hotel2, images.hotel3],
	},
	{
		id: '2',
		name: 'HiddenHaven',
		location: 'New York, USA',
		price: 550,
		discount: 10,
		rating: 4.5,
		imageUrl: images.hotel4,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		amenities: {
			beds: 2,
			baths: 1,
			sqft: 1100,
		},
		gallery: [images.hotel4, images.hotel5, images.hotel6],
	},
	{
		id: '3',
		name: 'HarborHaven Hideaway',
		location: 'New York, USA',
		address: '1012 Ocean avenue, New York, USA',
		price: 650,
		discount: 20,
		rating: 4.5,
		reviewCount: 365,
		imageUrl: images.hotel7,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		amenities: {
			beds: 3,
			baths: 1,
			sqft: 1848,
		},
		gallery: [images.hotel7, images.hotel8, images.hotel9, images.hotel10],
	},
	{
		id: '4',
		name: 'GoldenValley',
		location: 'New York, USA',
		price: 150,
		rating: 4.9,
		imageUrl: images.hotel11,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		amenities: {
			beds: 1,
			baths: 1,
			sqft: 800,
		},
		gallery: [images.hotel11, images.hotel12, images.hotel13],
	},
];

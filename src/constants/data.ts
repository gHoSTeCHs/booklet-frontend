import { Hotel } from '../..';

export const hotels: Hotel[] = [
	{
		id: '1',
		name: 'OasisOverture',
		location: 'New York, USA',
		price: 650,
		discount: 10,
		rating: 4.5,
		imageUrl: '/hotel1.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		amenities: {
			beds: 2,
			baths: 1,
			sqft: 1200,
		},
		gallery: ['/hotel1-1.jpg', '/hotel1-2.jpg', '/hotel1-3.jpg'],
	},
	{
		id: '2',
		name: 'HiddenHaven',
		location: 'New York, USA',
		price: 550,
		discount: 10,
		rating: 4.5,
		imageUrl: '/hotel2.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		amenities: {
			beds: 2,
			baths: 1,
			sqft: 1100,
		},
		gallery: ['/hotel2-1.jpg', '/hotel2-2.jpg', '/hotel2-3.jpg'],
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
		imageUrl: '/hotel3.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		amenities: {
			beds: 3,
			baths: 1,
			sqft: 1848,
		},
		gallery: [
			'/hotel3-1.jpg',
			'/hotel3-2.jpg',
			'/hotel3-3.jpg',
			'/hotel3-4.jpg',
			'/hotel3-5.jpg',
		],
	},
	{
		id: '4',
		name: 'GoldenValley',
		location: 'New York, USA',
		price: 150,
		rating: 4.9,
		imageUrl: '/hotel4.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		amenities: {
			beds: 1,
			baths: 1,
			sqft: 800,
		},
		gallery: ['/hotel4-1.jpg', '/hotel4-2.jpg'],
	},
];

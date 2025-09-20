import { Bundle, Quality, Requirement, type Room } from './types.js';

export function load() {
	const communityCenter: Room[] = [
		{
			name: 'Crafts Room',
			bundles: [
				new Bundle('Spring Foraging Bundle', 4, [
					new Requirement('Wild Horseradish'),
					new Requirement('Daffodil'),
					new Requirement('Leek'),
					new Requirement('Dandelion')
				]),
				new Bundle('Summer Foraging Bundle', 3, [
					new Requirement('Grapes'),
					new Requirement('Sweet Pea'),
					new Requirement('Spice Berry')
				])
			]
		},
		{
			name: 'Pantry',
			bundles: [
				new Bundle('Spring Crops Bundle', 4, [
					new Requirement('Parsnip'),
					new Requirement('Green Bean'),
					new Requirement('Cauliflower'),
					new Requirement('Potato')
				]),
				new Bundle('Quality Crops Bundle', 3, [
					new Requirement('Parsnip', Quality.Gold, 5),
					new Requirement('Melon', Quality.Gold, 5),
					new Requirement('Corn', Quality.Gold, 5),
					new Requirement('Pumpkin', Quality.Gold, 5)
				])
			]
		}
	];
	return { communityCenter };
}

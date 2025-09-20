import { Bundle, Category, Crop, Forage, Quality, Requirement, type Room, Season } from './types.js';

export function load() {
	const communityCenter: Room[] = [
		{
			name: 'Crafts Room',
			bundles: [
				new Bundle('Spring Foraging Bundle', 4, [
					new Requirement(new Forage('1', 'Wild Horseradish', 150, Season.Spring)),
					new Requirement(new Forage('2', 'Daffodil', 120, Season.Spring)),
					new Requirement(new Forage('3', 'Leek', 10, Season.Spring)),
					new Requirement(new Forage('4', 'Dandelion', 80, Season.Spring))
				]),
				new Bundle('Summer Foraging Bundle', 3, [
					new Requirement(new Forage('5', 'Grapes', 0, Season.Summer)),
					new Requirement(new Forage('6', 'Sweet Pea', 0, Season.Summer)),
					new Requirement(new Forage('7', 'Spice Berry', 0, Season.Summer))
				])
			]
		},
		{
			name: 'Pantry',
			bundles: [
				new Bundle('Spring Crops Bundle', 4, [
					new Requirement(new Crop('8', 'Parsnip', 0, Category.Vegetable, [Season.Spring])),
					new Requirement(new Crop('9', 'Green Bean', 0, Category.Vegetable, [Season.Spring])),
					new Requirement(new Crop('10', 'Potato', 0, Category.Vegetable, [Season.Spring])),
					new Requirement(new Crop('11', 'Cauliflower', 0, Category.Vegetable, [Season.Spring]))
				]),
				new Bundle('Quality Crops Bundle', 3, [
					new Requirement(new Crop('8', 'Parsnip', 0, Category.Vegetable, [Season.Spring]), Quality.Gold, 5),
					new Requirement(new Crop('12', 'Melon', 0, Category.Fruit, [Season.Summer]), Quality.Gold, 5),
					new Requirement(new Crop('13', 'Corn', 0, Category.Vegetable, [Season.Summer, Season.Fall]), Quality.Gold, 5),
					new Requirement(new Crop('14', 'Pumpkin', 0, Category.Vegetable, [Season.Summer]), Quality.Gold, 5)
				])
			]
		}
	];
	return { communityCenter };
}

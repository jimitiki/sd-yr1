import {
	Quality,
	Season,
	Category,
	Item,
	Fish,
	Crop,
	Forage,
	Requirement,
	Bundle,
	type Room
} from '$lib/types';

export const items: Map<string, Item> = new Map(
	[
		new Forage('1', 'Wild Horseradish', 150, Season.Spring),
		new Forage('2', 'Daffodil', 120, Season.Spring),
		new Forage('3', 'Leek', 10, Season.Spring),
		new Forage('4', 'Dandelion', 80, Season.Spring),
		new Forage('5', 'Grapes', 0, Season.Summer),
		new Forage('6', 'Sweet Pea', 0, Season.Summer),
		new Forage('7', 'Spice Berry', 0, Season.Summer),
		new Crop('8', 'Parsnip', 0, Category.Vegetable, [Season.Spring]),
		new Crop('9', 'Green Bean', 0, Category.Vegetable, [Season.Spring]),
		new Crop('10', 'Potato', 0, Category.Vegetable, [Season.Spring]),
		new Crop('11', 'Cauliflower', 0, Category.Vegetable, [Season.Spring]),
		new Crop('12', 'Melon', 0, Category.Fruit, [Season.Summer]),
		new Crop('13', 'Corn', 0, Category.Vegetable, [Season.Summer, Season.Fall]),
		new Crop('14', 'Pumpkin', 0, Category.Vegetable, [Season.Summer]),
		new Crop('15', 'Coffee', 0, null, [Season.Spring, Season.Summer]),
		new Crop('16', 'Blue Jazz', 0, Category.Forage, [Season.Spring]),
		new Fish('17', 'Largemouth Bass', 0),
		new Fish('18', 'Carp', 0, [Season.Spring, Season.Summer, Season.Fall]),
		new Fish('19', 'Bullhead', 0),
		new Fish('20', 'Sturgeon', 0, [Season.Summer, Season.Winter])
	].map((item) => [item.id, item])
);

export const rooms: Room[] = [
	{
		name: 'Crafts Room',
		bundles: [
			new Bundle('Spring Foraging Bundle', 4, [
				new Requirement(items.get('1')!),
				new Requirement(items.get('2')!),
				new Requirement(items.get('3')!),
				new Requirement(items.get('4')!)
			]),
			new Bundle('Summer Foraging Bundle', 3, [
				new Requirement(items.get('5')!),
				new Requirement(items.get('6')!),
				new Requirement(items.get('7')!)
			])
		]
	},
	{
		name: 'Pantry',
		bundles: [
			new Bundle('Spring Crops Bundle', 4, [
				new Requirement(items.get('8')!),
				new Requirement(items.get('9')!),
				new Requirement(items.get('10')!),
				new Requirement(items.get('11')!)
			]),
			new Bundle('Quality Crops Bundle', 3, [
				new Requirement(items.get('8')!, Quality.Gold, 5),
				new Requirement(items.get('12')!, Quality.Gold, 5),
				new Requirement(items.get('13')!, Quality.Gold, 5),
				new Requirement(items.get('14')!, Quality.Gold, 5)
			])
		]
	},
	{
		name: 'Fish Tank',
		bundles: [
			new Bundle('Mountain Fish Bundle', 4, [
				new Requirement(items.get('17')!),
				new Requirement(items.get('18')!),
				new Requirement(items.get('19')!),
				new Requirement(items.get('20')!)
			])
		]
	}
];

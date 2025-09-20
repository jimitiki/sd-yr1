/**
 * The various quality levels (`Iridium`, `Gold`, `Silver`, and `Standard`) an item might have.
 */
export enum Quality {
	Iridium,
	Gold,
	Silver,
	Standard
}

/**
 * The four in-game seasons (`Spring`, `Summer`, `Fall`, and `Winter`).
 */
export enum Season {
	Spring,
	Summer,
	Fall,
	Winter
}

/**
 * The item categories for the "Grange Display". Some items may not have one of these categories.
 * The categories are: `Vegetable`, `Fruit`, `Mineral`, `Animal`, `Artisan`, `Forage`, `Cooking`,
 * and `Fish`.
 *
 * Note that the `Forage` category includes flowers and tree sap.
 */
export enum Category {
	Vegetable,
	Fruit,
	Mineral,
	Animal,
	Artisan,
	Forage,
	Cooking,
	Fish
}

/**
 * Representation of an in-game item.
 */
export class Item {
	readonly id: string;
	readonly name: string;
	readonly price: number;
	readonly category: Category | null; // Some items, such as coffee bean and truffle do not have a grange display "category"

	/**
	 * @param id Unique identifier for the item. Corresponds to the in-game ID.
	 * @param name Item name.
	 * @param price Base sell price of the item.
	 * @param category Grange display {@link Category}.
	 */
	constructor(id: string, name: string, price: number, category: Category | null) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.category = category;
	}
}

/**
 * Item found by fishing with a rod.
 */
export class Fish extends Item {
	readonly seasons: Set<Season>;

	/**
	 * @param id Unique identifier. Corresponds to the in-game ID.
	 * @param name Fish name.
	 * @param price Base sell price of the item.
	 * @param seasons Seasons when the fish may be caught. Default is all seasons.
	 */
	constructor(
		id: string,
		name: string,
		price: number,
		seasons: Season[] = [Season.Spring, Season.Summer, Season.Fall, Season.Winter]
	) {
		super(id, name, price, Category.Fish);
		this.seasons = new Set(seasons);
	}
}

/**
 * Item found by growing it on the farm.
 */
export class Crop extends Item {
	readonly seasons: Set<Season>;

	/**
	 * @param id Unique identifier. Corresponds to the in-game ID.
	 * @param name Crop name.
	 * @param price Base sell price of the item.
	 * @param category Grange display {@link Category}.
	 * @param seasons Seasons when the seeds may be grown. Default is all seasons.
	 */
	constructor(
		id: string,
		name: string,
		price: number,
		category: Category.Fruit | Category.Vegetable | Category.Forage | null, // Flowers are in the "Forage" category. Coffee beans do not have a category.
		seasons: Season[] = [Season.Spring, Season.Summer, Season.Fall, Season.Winter]
	) {
		super(id, name, price, category);
		this.seasons = new Set(seasons);
	}
}

/**
 * Item found by foraging from the ground.
 */
export class Forage extends Item {
	readonly season: Season | null;

	constructor(id: string, name: string, price: number, season: Season | null) {
		super(id, name, price, Category.Forage);
		this.season = season;
	}
}

/**
 * A Community Center bundle requirement.
 */
export class Requirement {
	readonly item: Item;
	readonly quality: Quality;
	readonly quantity: number;

	/**
	 * @param item Required {@link Item}.
	 * @param quality Minimum {@link Quality}. Default is `Quality.Standard`, meaning that any item can be donated.
	 * @param quantity Required amount. Default is 1.
	 */
	constructor(item: Item, quality = Quality.Standard, quantity = 1) {
		this.item = item;
		this.quality = quality;
		this.quantity = quantity;
	}
}

/**
 * A Community Center bundle.
 */
export class Bundle {
	readonly name: string;
	readonly slot_count: number;
	readonly requirements: Requirement[];

	/**
	 * @param name Name of the bundle in game.
	 * @param slot_count How many of the requirements must be fulfilled.
	 * @param requirements All possible requirements.
	 */
	constructor(name: string, slot_count: number, requirements: Requirement[]) {
		if (slot_count > requirements.length) {
			throw RangeError('slot_count may not be higher than the number of allowed items');
		} else if (slot_count <= 0) {
			throw RangeError('slot_count must be more than zero');
		}
		this.name = name;
		this.slot_count = slot_count;
		this.requirements = requirements;
	}
}

/**
 * A room in the Community Center. Just used to organize the bundles.
 */
export type Room = {
	readonly name: string;
	readonly bundles: Bundle[];
};

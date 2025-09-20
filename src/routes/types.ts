
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
 * A Community Center bundle requirement.
 */
export class Requirement {
	item: string;
	quality: Quality;
	quantity: number;

    /**
     * @param item Required item.
     * @param quality Minimum {@link Quality}. Default is `Quality.Standard`, meaning that any item can be donated.
     * @param quantity Required amount. Default is 1.
     */
	constructor(item: string, quality = Quality.Standard, quantity = 1) {
		this.item = item;
		this.quality = quality;
		this.quantity = quantity;
	}
}

/**
 * A Community Center bundle.
 */
export class Bundle {
	name: string;
	slot_count: number;
	requirements: Requirement[];

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
	name: string;
	bundles: Bundle[];
};

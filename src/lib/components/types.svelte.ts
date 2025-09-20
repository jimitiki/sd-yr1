import { Bundle, Item, Quality, Requirement } from '$lib/types';

export class ReqState {
	readonly item: Item;
	readonly quality: Quality;
	readonly count: number;
	readonly parent: BundleState;
	completed = $state(false);

	constructor(parent: BundleState, item: Item, quality: Quality, count: number) {
		this.parent = parent;
		this.item = item;
		this.quality = quality;
		this.count = count;
	}
}

export class BundleState {
	readonly name: string;
	readonly slotCount: number;
	readonly reqs: ReqState[];

	constructor(name: string, slotCount: number, reqs: Requirement[]) {
		this.name = name;
		this.slotCount = slotCount;
		this.reqs = reqs.map((req) => {
			return new ReqState(this, req.item, req.quality, req.count);
		});
	}

	isComplete() {
		return this.reqs.filter((req) => req.completed).length >= this.slotCount;
	}

	static fromBundle(bundle: Bundle) {
		return new BundleState(bundle.name, bundle.slotCount, bundle.requirements);
	}
}

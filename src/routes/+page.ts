import { Requirement } from './types.js';
import { items, rooms } from './data.js';

export function load() {
	const communityCenter = rooms.map((room) => {
		return {
			name: room.name,
			bundles: room.bundles.map((bundle) => {
				return {
					name: bundle.name,
					slot_count: bundle.slot_count,
					requirements: bundle.requirements.map((requirement) => {
						return { requirement, donated: false };
					}),
					completed: function () {
						return this.requirements.filter((req) => req.donated).length >= this.slot_count;
					},
				};
			})
		};
	});
	return { items, communityCenter };
}

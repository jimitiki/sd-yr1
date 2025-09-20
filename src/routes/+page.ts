import { Quality, Requirement } from './types';
import { items, rooms } from './data';

export function load() {
	const communityCenter = rooms.map((room) => {
		return {
			name: room.name,
			bundles: room.bundles.map((bundle) => {
				return {
					name: bundle.name,
					slot_count: bundle.slot_count,
					requirements: bundle.requirements.map((requirement) => {
						let qualDesc: string;
						switch (requirement.quality) {
							case Quality.Iridium:
								qualDesc = ' (iridium star)';
								break;
							case Quality.Gold:
								qualDesc = ' (gold star)';
								break;
							case Quality.Silver:
								qualDesc = ' (silver star)';
								break;
							case Quality.Standard:
							default:
								qualDesc = '';
						}
						return {
							requirement,
							donated: false,
							description: `${requirement.item.name}${qualDesc} x${requirement.quantity}`
						};
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

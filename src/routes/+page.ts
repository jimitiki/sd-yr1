import { Quality, Requirement, Season } from '$lib/types';
import { items, rooms } from '$lib/data';

export type ReqState = {
	requirement: Requirement;
	donated: boolean;
	description: string;
	available: () => boolean;
};

export type bundleState = {
	name: string;
	slotCount: number;
	requirements: ReqState[];
	completed: () => boolean;
};

export function load() {
	const communityCenter = rooms.map((room) => {
		return {
			name: room.name,
			bundles: room.bundles.map((bundle) => {
				const bundleState: bundleState = {
					name: bundle.name,
					slotCount: bundle.slotCount,
					requirements: [],
					completed: function () {
						return this.requirements.filter((req) => req.donated).length >= this.slotCount;
					}
				};
				bundleState.requirements = bundle.requirements.map((requirement) => {
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
						description: `${requirement.item.name}${qualDesc} x${requirement.count}`,
						available: function () {
							return !bundleState.completed();
						}
					};
				});
				return bundleState;
			})
		};
	});
	const seasonalItems = new Map(
		[Season.Spring, Season.Summer, Season.Fall, Season.Winter].map((season) => {
			return [season, Array.from(items.values()).filter((item) => item.inSeason(season))];
		})
	);
	return { items, seasonalItems, communityCenter };
}

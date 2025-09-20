import { Season } from '$lib/types';
import { BundleState } from '$lib/components/types.svelte.js';
import { items, rooms } from '$lib/data';

export function load() {
	const communityCenter = rooms.map((room) => {
		return {
			name: room.name,
			bundles: room.bundles.map((bundle) => {
				return BundleState.fromBundle(bundle);
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

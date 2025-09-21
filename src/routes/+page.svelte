<script lang="ts">
	import { Season } from '$lib/types';
	import { ReqState } from '$lib/components/types.svelte.js';
	import Requirement from '$lib/components/requirement.svelte';
	import Room from '$lib/components/room.svelte';
	let { data } = $props();

	let reqsByItem: Map<string, Array<ReqState>> = new Map(
		Array.from(data.items.keys()).map((id) => [id, []])
	);
	data.communityCenter.forEach((room) => {
		room.bundles.forEach((bundle) => {
			bundle.reqs.forEach((req) => {
				const items = reqsByItem.get(req.item.id);
				if (items) {
					items.push(req);
				}
			});
		});
	});
</script>

<h1>Community Center</h1>
<div id="checklist">
	{#each data.communityCenter as { name, bundles }}
		<Room {name} {bundles}></Room>
	{/each}
</div>

<h1>Calendar</h1>
<div id="calendar">
	{#each [Season.Spring, Season.Summer, Season.Fall, Season.Winter] as season}
		<div>
			<h2>{season}</h2>
			{#each data.seasonalItems.get(season) || [] as item}
				<div>
					<h3>{item.name}</h3>
					{#each reqsByItem.get(item.id) || [] as req}
						<Requirement {req}></Requirement>
					{/each}
				</div>
			{/each}
		</div>
	{/each}
</div>

<script lang="ts">
	import { Season } from '$lib/types';
	import { type ReqState } from './+page';
	let { data } = $props();
	let communityCenter = $state(data.communityCenter);

	let reqsByItem: Map<string, Array<ReqState>> = new Map(
		Array.from(data.items.keys()).map((id) => [id, []])
	);
	communityCenter.forEach((room) => {
		room.bundles.forEach((bundle) => {
			bundle.requirements.forEach((req) => {
				const items = reqsByItem.get(req.requirement.item.id);
				if (items) {
					items.push(req);
				}
			});
		});
	});
</script>

<h1>Community Center</h1>
<div id="checklist">
	{#each communityCenter as { name, bundles }}
		<div class="room">
			<h2>{name}</h2>
			{#each bundles as bundle}
				<div class="bundle">
					<h3>{bundle.name}</h3>
					{#each bundle.requirements as req}
						<div class="requirement">
							<input
								type="checkbox"
								bind:checked={req.donated}
								disabled={!req.donated && !req.available()}
							/>
							{req.description}
						</div>
					{/each}
				</div>
			{/each}
		</div>
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
						<div class="requirement">
							<input
								type="checkbox"
								bind:checked={req.donated}
								disabled={!req.donated && !req.available()}
							/>
							{req.description}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/each}
</div>

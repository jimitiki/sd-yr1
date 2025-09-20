<script>
	import { Requirement } from './types.js';
	let { data } = $props();
	/**
	 * @type {{requirement: Requirement, completed: boolean}[]}
	 */
	let checklist = $state([]);
	data.communityCenter.forEach((room) => {
		room.bundles.forEach((bundle) => {
			bundle.requirements.forEach((requirement) => {
				checklist.push({ requirement, completed: false });
			});
		});
	});
</script>

<h1>Checklist 1</h1>
<div id="checklist">
	{#each checklist as { requirement }, index}
		<div id="entry">
			<input type="checkbox" bind:checked={checklist[index].completed} />{requirement.quantity}
			{requirement.item.name}
		</div>
	{/each}
</div>

<h1>Checklist 2</h1>
<div id="checklist">
	{#each checklist as { requirement }, index}
		<div id="entry">
			<input type="checkbox" bind:checked={checklist[index].completed} />{requirement.quantity}
			{requirement.item.name}
		</div>
	{/each}
</div>

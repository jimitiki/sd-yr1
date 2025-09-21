<script lang="ts">
	import { BundleState } from './types.svelte';
	import Requirement from './requirement.svelte';
	let { bundle }: { bundle: BundleState } = $props();
	let completed = $derived(bundle.isComplete());
	let numComplete = $derived(bundle.reqs.filter((req) => req.completed).length);
</script>

<div class="bundle">
	<h3 class="name{completed ? '-strike' : ''}">{bundle.name} ({numComplete}/{bundle.slotCount})</h3>
	{#each bundle.reqs as req}
		<Requirement {req}></Requirement>
	{/each}
</div>

<style>
	.name-strike {
		text-decoration-line: line-through;
		color: darkgray;
	}
</style>

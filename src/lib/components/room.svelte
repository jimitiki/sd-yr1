<script lang="ts">
	import { BundleState } from './types.svelte';
	import Bundle from './bundle.svelte';
	let { name, bundles }: { name: string; bundles: BundleState[] } = $props();
	let numComplete = $derived(bundles.filter((bundle) => bundle.isComplete()).length);
</script>

<div class="room">
	<h2>{name} {numComplete}/{bundles.length}</h2>
	{#each bundles as bundle}
		<Bundle {bundle}></Bundle>
	{/each}
</div>

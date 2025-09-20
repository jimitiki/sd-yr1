<script lang="ts">
	import { Quality } from '../types';
	import { ReqState } from './types.svelte';
	let { req }: { req: ReqState } = $props();
	const uid = $props.id();
	let disabled = $derived(!req.completed && req.parent.isComplete());

	const labelColor = (function (req) {
		switch (req.quality) {
			case Quality.Iridium:
				return 'purple';
			case Quality.Gold:
				return 'gold';
			case Quality.Silver:
				return 'silver';
			case Quality.Standard:
				return 'black';
		}
	})(req);
</script>

<div>
	<input type="checkbox" id="chk-{uid}" bind:checked={req.completed} {disabled} />
	<label for="chk-{uid}" style="color:{labelColor}">{req.item.name} x{req.count}</label>
</div>

<script>
	let { data } = $props();
	let communityCenter = $state(data.communityCenter);
</script>

<h1>Checklist 1</h1>
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
								disabled={!req.donated && bundle.completed()}
							/>
                            {req.description}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/each}
</div>

<h1>Checklist 2</h1>
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
								disabled={!req.donated && bundle.completed()}
							/>
                            {req.description}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/each}
</div>

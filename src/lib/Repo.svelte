<script lang="ts">
	import { onMount } from "svelte";

	export let name: string;
	export let username: string;

	let languages: string[] = [];

	onMount(async () => {
		const response = await fetch(`/api/languages/${username}/${name}`);
		languages = await response.json();
	});
</script>

<div class="repo">
	<div class="name">{name}</div>
	<div class="languages-list">
		{#each languages as language}
			<div class="language">{language}</div>
		{/each}
	</div>
</div>

<style>
	.repo {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 1rem 0;
	}

	.name {
		font-size: 1.4rem;
	}

	.languages-list {
		margin: 0.5rem 0;
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		gap: 0.5rem;
	}
</style>

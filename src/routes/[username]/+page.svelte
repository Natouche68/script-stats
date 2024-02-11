<script lang="ts">
	import type { PageData } from "./$types";
	import Repo from "$lib/Repo.svelte";
	import HackerBackground from "$lib/HackerBackground.svelte";
	import { languagesStore, numberOfRepos } from "$lib/languagesStore";

	export let data: PageData;
</script>

<div class="page">
	<HackerBackground />
	<div class="app-card">
		<div class="username">@{data.username}</div>
		{#each $languagesStore as language}
			{language.name}: {Math.round(language.percent / $numberOfRepos)}%
			<br />
		{/each}
		{#await data.repos then repos}
			{#each repos as repo}
				<Repo name={repo} username={data.username} />
			{/each}
		{/await}
	</div>
</div>

<style>
	.page {
		display: flex;
		justify-content: center;
	}

	.app-card {
		background: var(--bg-color);
		margin: 4rem 0;
		padding: 2rem;
		border-radius: 2rem;
		width: 70%;
		z-index: 2;
		box-shadow: 0 0 1rem var(--dark-color);
	}

	.username {
		font-size: 3rem;
		font-weight: 700;
		letter-spacing: 0.1rem;
	}
</style>

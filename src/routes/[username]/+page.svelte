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
		<div class="languages-bar">
			{#each $languagesStore as language}
				<div
					class="language-section"
					style="width: {language.percent / $numberOfRepos}%; 
						background: {language.color};"
				>
					{#if language.percent / $numberOfRepos > 4}
						{language.name}
					{/if}
				</div>
			{/each}
		</div>
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

	.languages-bar {
		margin: 1rem 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-radius: 1rem;
		overflow: hidden;
	}

	.language-section {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 1.8rem;
		font-size: 0.8rem;
		color: var(--bg-color);
		transition: width 0.4s ease;
	}
</style>

<script lang="ts">
	import { languagesStore, numberOfRepos } from "$lib/languagesStore";
	import { onMount } from "svelte";
	import type { Language } from "$lib/types";

	export let name: string;
	export let username: string;

	let languages: Language[] = [];

	onMount(async () => {
		const response = await fetch(`/api/languages/${username}/${name}`);
		languages = await response.json();

		numberOfRepos.set($numberOfRepos + 1);
		languages.forEach((language) => {
			const languageIndex = $languagesStore.findIndex(
				(l) => l.name === language.name
			);
			if (languageIndex !== -1) {
				$languagesStore[languageIndex].percent += language.percent;
			} else {
				$languagesStore.push(language);
			}
		});
		$languagesStore = $languagesStore;
	});
</script>

<div class="repo">
	<div class="name">{name}</div>
	<div class="languages-list">
		{#each languages as language}
			<div class="language" style="--color: {language.color}">
				{language.name}
				<div class="percent">
					{language.percent}%
				</div>
			</div>
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
		font-weight: 500;
	}

	.languages-list {
		margin: 0.5rem 0;
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		gap: 0.8rem;
	}

	.language {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
	}

	.language::before {
		content: " ";
		display: block;
		width: 0.8rem;
		height: 0.8rem;
		background-color: var(--color);
		border-radius: 50%;
	}

	.percent {
		font-size: 0.8rem;
		color: var(--dim-color);
	}
</style>

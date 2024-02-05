<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

{#await data.repos then repos}
	<ol>
		{#each repos as repo}
			<li>{repo}</li>
		{/each}
	</ol>
{/await}

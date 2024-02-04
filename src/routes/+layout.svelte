<svelte:head>
	<title>Script Stats</title>
</svelte:head>

<slot />

<style>
	@font-face {
		font-family: "Unbounded";
		src: url("Unbounded.ttf") format("truetype");
	}

	:root {
		--bg-color: #1e1e1f;
		--text-color: #d3e9f5;
		--accent-color: #63b0cd;
	}

	:global(body) {
		font-family: "Unbounded", sans-serif;
		font-size: 16px;
		background-color: var(--bg-color);
		color: var(--text-color);
	}
</style>

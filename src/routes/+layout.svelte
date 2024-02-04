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
		--dark-color: #1e1e1f;
		--bg-color: #2e2e30;
		--text-color: #d3e9f5;
		--dim-color: #a5c9dd;
		--accent-color: #63b0cd;
	}

	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
		font-family: "Unbounded", sans-serif;
		font-size: 16px;
		background-color: var(--dark-color);
		color: var(--text-color);
	}

	:global(input, button) {
		font-family: "Unbounded", sans-serif;
		color: var(--text-color);
	}
</style>

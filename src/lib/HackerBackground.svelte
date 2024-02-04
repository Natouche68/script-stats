<script lang="ts">
	import { onMount } from "svelte";

	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");

	let letters: string = "";

	onMount(() => {
		const interval = setInterval(() => {
			generateLetters();
		}, 2000);
		generateLetters();

		return () => clearInterval(interval);
	});

	function generateLetters() {
		letters = "";

		for (let i = 0; i < 6000; i++) {
			letters += chars[Math.floor(Math.random() * chars.length)];
		}
	}
</script>

<div class="background">{letters}</div>

<style>
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		overflow: none;
		font-size: 1rem;
		letter-spacing: 0.2rem;
		text-align: center;
		word-wrap: break-word;
		color: var(--dim-color);
	}
</style>

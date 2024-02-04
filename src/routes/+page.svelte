<div class="page">
	<form method="post">
		<h1>Script Stats</h1>
		<h2>See your prefered programming languages,<br /> all in one place</h2>
		<div class="text-bar">
			@
			<input
				type="text"
				name="username"
				placeholder="Your GitHub username"
				required
			/>
		</div>
		<button type="submit">See the results →</button>
	</form>
</div>

<style>
	.page {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	form {
		background: var(--bg-color);
		padding: 2rem;
		border-radius: 2rem;
		width: 50%;
	}

	h1 {
		margin: 0;
		font-size: 3rem;
		font-weight: 650;
		letter-spacing: 0.1rem;
	}

	h2 {
		font-size: 1.4rem;
		font-weight: 300;
	}

	.text-bar {
		display: flex;
		flex-direction: row;
		justify-self: left;
		align-items: center;
		gap: 0.8rem;
		margin: 1rem 0;
		padding: 1rem 1.5rem;
		width: calc(100% - 1.5rem * 2);
		font-size: 1.4rem;
		background: var(--dark-color);
		border-radius: 2rem;
		transition: all 0.4s ease;
	}

	input {
		margin: 0;
		padding: 0;
		width: 100%;
		font-size: 1.4rem;
		background: transparent;
		border: none;
		transition: all 0.4s ease;
		outline: none;
	}

	.text-bar:has(input:focus),
	input:focus {
		color: var(--accent-color);
	}

	button {
		padding: 0.5rem 1rem;
		width: 100%;
		font-size: 1.4rem;
		font-weight: 450;
		background: var(--accent-color);
		color: var(--bg-color);
		border: none;
		border-radius: 1.5rem;
		outline: none;
		transition: all 0.4s ease;
		cursor: pointer;
	}

	button:hover {
		letter-spacing: 0.1rem;
	}
</style>

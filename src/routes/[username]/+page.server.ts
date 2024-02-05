import type { PageServerLoad } from "./$types";
import * as cheerio from "cheerio";

export const load: PageServerLoad = async ({ params }) => {
	return {
		repos: getRepos(params.username),
	};
};

async function getRepos(username: string): Promise<string[]> {
	const repos = await getReposByPage(1, username);

	return repos;
}

async function getReposByPage(
	page: number,
	username: string
): Promise<string[]> {
	const response = await fetch(
		`https://github.com/${username}?page=${page}&tab=repositories`
	);
	const html = await response.text();

	const $ = cheerio.load(html);

	const repos = $("#user-repositories-list").find("li").toArray();

	const reposNames: string[] = [];
	repos.forEach((repo) => {
		const repoName = $(repo).find("h3").find("a").text();
		reposNames.push(repoName);
	});

	if ($("#user-repositories-list").find("a.next_page").length > 0) {
		return [...reposNames, ...(await getReposByPage(page + 1, username))];
	} else {
		return reposNames;
	}
}

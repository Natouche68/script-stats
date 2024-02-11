import type { PageServerLoad } from "./$types";
import * as cheerio from "cheerio";

export const load: PageServerLoad = async ({ params }) => {
	const repos = getReposByPage(1, params.username);

	return {
		username: params.username,
		repos: repos,
	};
};

async function getReposByPage(
	page: number,
	username: string
): Promise<string[]> {
	const response = await fetch(
		`https://github.com/${username}?page=${page}&tab=repositories`
	);
	const html = await response.text();

	const $ = cheerio.load(html);

	const reposList = $("#user-repositories-list").find("li").toArray();

	const repos: string[] = [];
	reposList.forEach(async (repo) => {
		const repoName = $(repo).find("h3").find("a").text().trim();

		repos.push(repoName);
	});

	if ($("#user-repositories-list").find("a.next_page").length > 0) {
		return [...repos, ...(await getReposByPage(page + 1, username))];
	} else {
		return repos;
	}
}

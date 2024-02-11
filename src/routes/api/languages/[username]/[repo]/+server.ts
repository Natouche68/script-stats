import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import * as cheerio from "cheerio";

export const GET: RequestHandler = async ({ params }) => {
	const response = await fetch(
		`https://github.com/${params.username}/${params.repo}`
	);

	const html = await response.text();

	const $ = cheerio.load(html);

	const languagesList = $(".Layout-sidebar ul").find("li").toArray();

	const languages: string[] = [];
	languagesList.forEach((language) => {
		const languageName = $(language).find("a span.text-bold").text().trim();

		if (!languageName) {
			return;
		}
		languages.push(languageName);
	});

	return json(languages);
};

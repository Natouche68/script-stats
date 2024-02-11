import type { RequestHandler } from "./$types";
import type { Language } from "$lib/types";
import { json } from "@sveltejs/kit";
import * as cheerio from "cheerio";

export const GET: RequestHandler = async ({ params }) => {
	const response = await fetch(
		`https://github.com/${params.username}/${params.repo}`
	);

	const html = await response.text();

	const $ = cheerio.load(html);

	const languagesList = $(".Layout-sidebar ul").find("li").toArray();

	const languages: Language[] = [];
	languagesList.forEach((language) => {
		const languageName = $(language).find("a span.text-bold").text().trim();
		const color = $(language).find("a svg").css("color") || "#fff";
		const percent = $(language)
			.find("a span:last-child")
			.text()
			.trim()
			.replace("%", "");

		if (!languageName) {
			return;
		}

		languages.push({
			name: languageName,
			color: color,
			percent: Number(percent),
		});
	});

	return json(languages);
};

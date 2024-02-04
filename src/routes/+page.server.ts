import type { Actions } from "./$types";
import { redirect, error } from "@sveltejs/kit";

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get("username");

		if (!name) {
			error(400, "Username is required");
		}

		redirect(303, `/${name}`);
	},
} satisfies Actions;

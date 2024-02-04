import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	return {
		username: params.username,
	};
};

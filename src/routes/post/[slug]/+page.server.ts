import { addLike } from '$lib/server/sanity.js';
import { fail } from '@sveltejs/kit';

export const actions = {
	addLike: async ({ fetch, request }) => {
		try {
			const formData = await request.formData();
			const entries = Object.fromEntries(formData.entries()) as {
				id: string;
			};
			const resp = await addLike(entries.id, fetch);
			return { success: resp };
		} catch (e) {
			if (e instanceof Error) {
				return fail(400, {
					error: e.message
				});
			}
		}
	}
};

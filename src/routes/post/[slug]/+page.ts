import { getPost } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const post = await getPost(params.slug);
	if (post) {
		return {
			post
		};
	}
	throw error(404, 'Not found');
};

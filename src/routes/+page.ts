import { getPosts } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const posts = await getPosts();
	if (posts) {
		return {
			posts
		};
	}
	throw error(404, 'Not found');
};

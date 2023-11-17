import { getPosts } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export const load = async ({ setHeaders }) => {
	const posts = await getPosts();
	// set age and cache headers for 24 hours
	setHeaders({
		'cache-control': 'max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
		age: '86400',
		'Cloudflare-CDN-Cache-Control': 'max-age=86400',
		'CDN-Cache-Control': 'max-age=86400'
	});
	if (posts) {
		return {
			posts
		};
	}
	throw error(404, 'Not found');
};

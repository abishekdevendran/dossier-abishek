import { getPost } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export const load = async ({ params, setHeaders, fetch }) => {
	const post = await getPost(params.slug, fetch);
	setHeaders({
		'cache-control': 'max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
		age: '86400',
		'Cloudflare-CDN-Cache-Control': 'max-age=86400',
		'CDN-Cache-Control': 'max-age=86400'
	});
	if (post) {
		return {
			post
		};
	}
	throw error(404, 'Not found');
};

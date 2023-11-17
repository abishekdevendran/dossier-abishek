import type { ImageAsset, Slug } from '@sanity/types';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

const baseUrl = `https://${PUBLIC_SANITY_PROJECT_ID}.apicdn.sanity.io/${
	// current date in YYYY-MM-DD format
	'v' + new Date().toISOString().split('T')[0]
}/data/query/${PUBLIC_SANITY_DATASET}`;


export async function getPosts(
	fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>
): Promise<Post[]> {
	const resp = await fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
			// params: {
			// 	language: 'es'
			// }
		})
	});
	const data = await resp.json();
	return data.result;
}

export async function getPost(
	slug: string,
	fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>
): Promise<Post> {
	const resp = await fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `*[_type == "post" && slug.current == $slug][0]`,
			params: {
				slug
			}
		})
	});
	const data = await resp.json();
	return data.result;
}

export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: ImageAsset;
	body: unknown[];
}

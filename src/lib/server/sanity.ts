import { SANITY_TOKEN } from '$env/static/private';
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

const baseUrl = `https://${PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/${
	// current date in YYYY-MM-DD format
	'v' + new Date().toISOString().split('T')[0]
}/data/mutate/${PUBLIC_SANITY_DATASET}`;

export async function addLike(
	id: string,
	fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>
): Promise<number> {
	const mutations = [
		{
			patch: {
				id,
				setIfMissing: {
					likes: 0
				},
				inc: {
					likes: 1
				}
			}
		}
	];
	const resp = await fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${SANITY_TOKEN}`
		},
		body: JSON.stringify({ mutations })
	});
	const data = await resp.json();
	if (!resp.ok) throw new Error(data.error.description);
	return data.results;
}

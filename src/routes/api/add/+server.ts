// Content negotiationpermalink
// +server
// .js
//  files can be placed in the same directory as +page files, allowing the same route 
// to be either a page or an API endpoint.To determine which, SvelteKit applies the following rules:

// PUT/PATCH/DELETE/OPTIONS requests are always handled by +server.js since they do not apply to pages
// GET/POST requests are treated as page requests if the accept header prioritises text/html 
// (in other words, it's a browser page request), else they are handled by +server.js


import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { a, b } = await request.json();
	return json(a + b);
}

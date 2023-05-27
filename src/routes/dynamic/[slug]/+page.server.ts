// THIS COE FOR RUNNING ON SERVER ONLY, e.g TO ACCESS SENSITIVE DATA //
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	if (params.slug === 'hello') {
		return {
			post: {
				title: `Hello world! ${params.slug}`,
				content: `Welcome to our blog. Lorem ipsum dolor sit amet... ${params.slug}`,
				number: Math.random()
			}
		};
  }
  
  if (params.slug === 'world') {
		return {
			post: {
				title: `My world! ${params.slug}`,
				content: `Welcome my world... ${params.slug}`,
				number: Math.random()
			}
		};
	}

	throw error(404, 'Not found');
}


// THIS LINE WHEN U WANT TO RUN ON CLIENT SIDE BUT CHANGE THE FILE INTO +page.ts //
// import { error } from '@sveltejs/kit';

// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {
// 	if (params.slug === 'hello') {
// 		return {
// 			title: 'Hello world!',
// 			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
// 			number: Math.random()
// 		};
// 	}

// 	throw error(404, 'Not found');
// }

// https://kit.svelte.dev/docs/advanced-routing#advanced-layouts if you want differ layout in same stting for example

/** @type {import('./$types').LayoutLoad} */
export function load() {
	return {
		sections: [
			{ slug: 'account', title: 'Account' },
		]
	};
}

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	return {
    posts: [{
      slug: "hello",
      title: "Hello!"
    }, {
      slug: "world",
      title: "World!"
    }]
	};
}

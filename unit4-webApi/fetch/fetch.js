async function ourFetch(url) {
	const res = await fetch(url);
	console.log(res)
	const data = await res.json();
	console.log(data)
	return data;
}

ourFetch("https://pokeapi.co/api/v2/pokemon/ditto")

const findPokemon = async (event) => {
	event.preventDefault();
	const data = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
	const json = await data.json()
}
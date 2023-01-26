const findPokemon = async (event) => {
	try {
		event.preventDefault();
		const {value} = event.target.pokemonName
		const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
		const json = await data.json();
		renderData(json);
	} catch(e) {
		alert("Ese pokemon no existe");
	}
}

const card = document.getElementById("card");
const avatar = document.getElementById("avatar");

const renderData = (pokemon) => { 
	avatar.setAttribute("src", `${pokemon.sprites.front_default}`)
	avatar.setAttribute("alt", `${pokemon.name}`)
	avatar.setAttribute("width", "200")
	avatar.setAttribute("height", "200")
}
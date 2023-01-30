const card = document.getElementById("card");
const avatar = document.getElementById("avatar");
const typesContainer = document.getElementById("typesContainer");
const typesList = document.getElementById("typesList");

const findPokemon = async (event) => {
	try {
		event.preventDefault();
		const {value} = event.target.pokemonName
		const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
		const json = await data.json();
		renderData(json);
	} catch(e) {
		console.error(e)
		alert("Ese pokemon no existe");
	}
}

const renderData = (pokemon) => { 
	avatar.setAttribute("src", `${pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}`)
	avatar.setAttribute("alt", `${pokemon.name}`)
	avatar.setAttribute("width", "150")
	avatar.setAttribute("height", "150")
	renderTypes(pokemon.types)
}

const renderTypes = (pokemonTypes) => {
	typesList.innerHTML = ''
	for (types of pokemonTypes) {
		const li = document.createElement("li")
		li.textContent = types.type.name
		typesList.append(li)
	}
}
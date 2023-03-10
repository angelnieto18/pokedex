const card = document.getElementById("card");
const avatar = document.getElementById("avatar");
const typesContainer = document.getElementById("typesContainer");
const typesList = document.getElementById("typesList");
const statsList = document.getElementById("statsList");

const findPokemon = async (event) => {
	try {
		event.preventDefault();
		const {value} = event.target.pokemonName
		const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`);
		const json = await data.json();
		renderData(json);
	} catch(e) {
		console.error(e)
		alert("Ese pokemon no existe");
	}
}

const renderData = (pokemon) => {
	renderAvatar(pokemon.sprites)
	renderTypes(pokemon.types)
	renderStats(pokemon.stats)
	card.style.backgroundColor = '#fff'
}

const renderAvatar = (pokemonSprites) => {
	avatar.setAttribute("src", `${pokemonSprites.versions["generation-v"]["black-white"].front_default}`)
	avatar.setAttribute("alt", `${pokemonSprites.name}`)
}

const renderTypes = (pokemonTypes) => {
	typesList.innerHTML = ''
	for (types of pokemonTypes) {
		const li = document.createElement("li")
		li.textContent = types.type.name
		typesList.append(li)
	}
}

const renderStats = (pokemonStats) => {
	statsList.innerHTML = ''
	for (stats of pokemonStats) {
		const li = document.createElement("li")
		li.textContent = `${stats.stat.name}: ${stats.base_stat}`
		statsList.append(li)
	}
}

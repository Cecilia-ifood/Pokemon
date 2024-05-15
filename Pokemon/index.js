var url = "https://pokeapi.co/api/v2/pokemon/";
var id = 1

fetch(url + id)
.then(res => res.json())
.then(data => {
    pokemon__img.innerHTML = `
        <img class="pokemon__img" src="${data.sprites.front_default}" alt="${data.name}" onclick="infoPokemon()">
    `;
})

function infoPokemon() {
    fetch(url + id)
    .then(res => res.json())
    .then(data => {
        const habilidades = data.abilities.map(ability => ability.ability.name).join(", ");
        pokemon__img.innerHTML = `
        <img class="pokemon__img" src="${data.sprites.front_default}" alt="${data.name}" onclick="infoPokemon()">
    `;
        pokemon__info.innerHTML = `
            <h2 class="pokemon__name">${data.name}</h2>
            <p class="pokemon__weight">Weight: ${data.weight}</p>
            <p class="pokemon__height">Height: ${data.height}</p>
            <p class="pokemon__ability">Ability: ${habilidades} </p>
        `;
    })
}

function buscarPokemon() {
    id = document.getElementById("pokemon").value;
    fetch(url + id)
    .then(res => res.json())
    .then(data => {
        pokemon__img.innerHTML = `
        <img class="pokemon__img" src="${data.sprites.front_default}" alt="${data.name}" onclick="infoPokemon()">
    `;
    })
}

function proximo(){
    id++;
    fetch(url + id)
    .then(res => res.json())
    .then(data => {
        pokemon__img.innerHTML = `
        <img class="pokemon__img" src="${data.sprites.front_default}" alt="${data.name}" onclick="infoPokemon()">
    `;
        pokemon__info.innerHTML=""
    })
}

function anterior(){
    id--;
    fetch(url + id)
    .then(res => res.json())
    .then(data => {
        pokemon__img.innerHTML = `
        <img class="pokemon__img" src="${data.sprites.front_default}" alt="${data.name}" onclick="infoPokemon()">
    `;
        pokemon__info.innerHTML=""
    })
}
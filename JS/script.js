const pokemonName = document.querySelector('.pokemon_name');

const pokemonNumber = document.querySelector('.pokemon_number');

const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');


const fetchPokemon = async (pokemon) => {
const APIResponse = await fetch((`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`))

// console.log(APIResponse);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}


const renderPokemon = async (pokemon) => {
    
    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);
    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        
        input.value = '';
    } else {
        pokemonName.innerHTML = 'Not found :c';
        pokemonNumber.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {

    event.preventDefault();

    // console.log(input.value)
    renderPokemon(input.value);
    
});

buttonPrev.addEventListener('click', () => {
    alert('prev clicked')
    // console.log(input.value)
});

buttonNext.addEventListener('click', () => {
    alert('next clicked')
    // console.log(input.value)
});

renderPokemon('25');
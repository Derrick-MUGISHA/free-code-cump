// script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    const typeColors = {
        normal: '#A8A878',
        fire: '#F08030',
        water: '#6890F0',
        electric: '#F8D030',
        grass: '#78C850',
        ice: '#98D8D8',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0C068',
        flying: '#A890F0',
        psychic: '#F85888',
        bug: '#A8B820',
        rock: '#B8A038',
        ghost: '#705898',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#EE99AC'
    };

    async function fetchPokemon(query) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
            if (!response.ok) throw new Error('Pokemon not found');
            return await response.json();
        } catch (error) {
            alert('Pokémon not found');
            return null;
        }
    }

    function updatePokemonInfo(data) {
        if (!data) return;

        // Update name and ID
        document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
        document.getElementById('pokemon-id').textContent = `#${data.id}`;

        // Update sprite
        const spriteContainer = document.querySelector('.sprite-container');
        spriteContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name}">`;

        // Update types
        const typesElement = document.getElementById('types');
        typesElement.innerHTML = '';
        data.types.forEach(type => {
            const typeSpan = document.createElement('span');
            typeSpan.textContent = type.type.name.toUpperCase();
            typeSpan.style.backgroundColor = typeColors[type.type.name];
            typesElement.appendChild(typeSpan);
        });

        // Update measurements
        document.getElementById('weight').textContent = data.weight;
        document.getElementById('height').textContent = data.height;

        // Update stats
        const statsMap = {
            'hp': 'hp',
            'attack': 'attack',
            'defense': 'defense',
            'special-attack': 'special-attack',
            'special-defense': 'special-defense',
            'speed': 'speed'
        };

        data.stats.forEach(stat => {
            const statId = statsMap[stat.stat.name];
            if (statId) {
                document.getElementById(statId).textContent = stat.base_stat;
            }
        });
    }

    searchButton.addEventListener('click', async () => {
        const query = searchInput.value.trim();
        if (!query) return;

        const data = await fetchPokemon(query);
        updatePokemonInfo(data);
    });

    // Add enter key support
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});
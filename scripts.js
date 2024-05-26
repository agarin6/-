document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'https://rickandmortyapi.com/api/character';
    let characters = [];
    let page = 1;
    const charactersContainer = document.getElementById('characters-container');
    const loadMoreButton = document.getElementById('load-more');
    const searchInput = document.getElementById('search-input');
    const genderSelect = document.getElementById('gender-select');

    searchInput.focus();

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            searchCharacters();
        }
    });

    searchInput.addEventListener('input', (e) => {
        if (e.target.value === '') {
            fetchCharacters();
        }
    });

    loadMoreButton.addEventListener('click', () => {
        page++;
        fetchCharacters();
    });

    genderSelect.addEventListener('change', () => {
        fetchCharacters();
    });

    const fetchCharacters = async () => {
        const searchQuery = searchInput.value;
        const genderFilter = genderSelect.value;
        const url = new URL(API_URL);
        url.searchParams.append('page', page);
        if (searchQuery) url.searchParams.append('name', searchQuery);
        if (genderFilter !== 'all') url.searchParams.append('gender', genderFilter);

        const response = await fetch(url);
        const data = await response.json();
        characters = data.results;
        renderCharacters();
    };

    const renderCharacters = () => {
        if (page === 1) charactersContainer.innerHTML = '';
        characters.forEach(character => {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.innerHTML = `
                <img src="${character.image}" alt="${character.name}" class="character-avatar">
                <div>${character.name}</div>
            `;
            charactersContainer.appendChild(card);
        });
    };

    const searchCharacters = () => {
        page = 1;
        fetchCharacters();
    };

    fetchCharacters();
});

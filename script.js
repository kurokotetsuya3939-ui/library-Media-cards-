// =========================================================================
// 1. ТВОЯ НАСТОЯЩАЯ БАЗА ДАННЫХ (ВСЕ ТВОИ КАРТОЧКИ)
// =========================================================================
const libraryData = [
    //GAMES
    {
        category: "games",
        title: "Resident Evil 9",
        origin: "Japan (Capcom)",
        descr: "The upcoming survival horror masterpiece from Capcom, continuing the terrifying legacy with new characters and dread.",
        img: "leon.jpg",
        rating: "9.8",
        btn1Text: "Play",
        btn2Text: "Leaks"
    },
    {
        category: "games",
        title: "Minecraft",
        origin: "Sweden (Mojang)",
        descr: "An iconic sandbox game where you build, mine, and explore an infinite blocky 3D world with endless freedom.",
        img: "mince.jpg",
        rating: "9.6",
        btn1Text: "Play",
        btn2Text: "Mods"
    },
    {
        category: "games",
        title: "Solo Leveling: Arise",
        origin: "South Korea (Netmarble)",
        descr: "The official action RPG based on the legendary webtoon. Step into Sung Jinwoo's shoes and level up to defeat the monarchs.",
        img: "solo_leveling.jpg",
        rating: "9.4",
        btn1Text: "Play",
        btn2Text: "Guides"
    },

    //MUSIC
    {
        category: "music",
        title: "Boy In Luv",
        origin: "South Korea (BTS)",
        descr: "An energetic hip-hop track with a powerful rock edge that captured the hearts of millions worldwide.",
        img: "boy in luv.jpg",
        rating: "9.7",
        btn1Text: "Listen",
        btn2Text: "Lyrics"
    },
    {
        category: "music",
        title: "No Batidão",
        origin: "Brazil",
        descr: "A massive, energetic Brazilian funk/pop hit with contagious beats and heavy bass made for dancing.",
        img: "nobatidao.jpg",
        rating: "9.3",
        btn1Text: "Listen",
        btn2Text: "Lyrics"
    },
    {
        category: "music",
        title: "On Rainy Days",
        origin: "South Korea (BEAST)",
        descr: "A legendary and deeply emotional ballad that perfectly captures the mood of a quiet, rainy evening.",
        img: "beast.jpg",
        rating: "9.9",
        btn1Text: "Listen",
        btn2Text: "Lyrics"
    },

    //MOVIES
    {
        category: "movies",
        title: "Spider-Man: Across the Spider-Verse",
        origin: "USA (Sony Pictures)",
        descr: "An animation masterpiece following Miles Morales as he catapults across the Multiverse and encounters a team of Spider-People.",
        img: "spider.jpg",
        rating: "9.8",
        btn1Text: "Trailer",
        btn2Text: "Cast"
    },

    //FOOD
    {
        category: "food",
        title: "Tonkotsu Ramen",
        origin: "Japan (Fukuoka)",
        descr: "A legendary Japanese noodle soup made with a rich, savory pork bone broth simmered for nearly 20 hours.",
        img: "ramen.jpg",
        rating: "9.8",
        btn1Text: "Recipe",
        btn2Text: "More Info"
    },

    //SPORT
    {
        category: "sport",
        title: "Football",
        origin: "England",
        descr: "The most popular team sport on the planet. Score a ball into the opponents net using only feet or head.",
        img: "football.jpg",
        rating: "9.3",
        btn1Text: "Rules",
        btn2Text: "Leagues"
    },

    //ANIME
    {
        category: "anime",
        title: "Naruto Shippuden",
        origin: "Japan (by Masashi Kishimoto)",
        descr: "An iconic anime series following a young ninja who dreams of becoming the leader of his village.",
        img: "naruto.jpg",
        rating: "9.5",
        btn1Text: "Episodes",
        btn2Text: "Characters"
    },

    //LANGUAGE
    {
        category: "language",
        title: "Japanese (日本語)",
        origin: "Japan",
        descr: "An East Asian language featuring Hiragana, Katakana, and Kanji, spoken by over 128 million people.",
        img: "japan.jpg",
        rating: "9.0",
        btn1Text: "Alphabet",
        btn2Text: "Phrases"
    },

    //COUNTRY
    {
        category: "country",
        title: "Japan",
        origin: "Asia",
        descr: "An island country known for its incredible blend of ancient traditions, imperial palaces, and ultra-modern tech.",
        img: "japan.jpg",
        rating: "9.6",
        btn1Text: "Places",
        btn2Text: "Culture"
    },

    //RELIGION
    {
        category: "religion",
        title: "Islam",
        origin: "7th century CE in the Arabian Peninsula",
        descr: "Islam is the worlds second-largest religion, with over 1.9 billion followers called Muslims. Rooted in 7th-century Arabia, it is an Abrahamic monotheistic faith based on the teachings of Prophet Muhammad and the holy book, the Quran. The word Islam translates to submission to the will of Allah (the Arabic word for God).",
        img: "islam.jpg",
        rating: "10",
        btn1Text: "History",
        btn2Text: "Philosophy"
    },

    //BOOKS
    {
        category: "books",
        title: "Harry Potter",
        origin: "from Manchester to London",
        descr: "The Harry Potter Mini Books are highly collectible, pocket-sized companions to the Wizarding World. Published primarily by Insight Editions, these palm-sized volumes feature behind-the-scenes photography, concept art, and lore",
        img: "harry.jpg",
        rating: "9.4",
        btn1Text: "Read",
        btn2Text: "Author"
    },

    //SCIENCE / SPACE
    {
        category: "space",
        title: "Mars",
        origin: "Solar System",
        descr: "The fourth planet from the Sun, known as the 'Red Planet' due to iron oxide on its surface.",
        img: "mars.jpg",
        rating: "8.9",
        btn1Text: "Missions",
        btn2Text: "Facts"
    },

    //TECH
    {
        category: "tech",
        title: "AI",
        origin: "Global",
        descr: "Artificial Intelligence (AI) is computer software programmed to simulate human cognitive functions like learning, reasoning, and problem-solving. It analyzes massive amounts of data, recognizes patterns, and performs tasks autonomously—from answering questions and translating languages to creating art and writing code.",
        img: "ai.jpg",
        rating: "9.5",
        btn1Text: "Use",
        btn2Text: "More Info"
    }
];

let likedCards = JSON.parse(localStorage.getItem('likedCardsArray')) || [];

// 2. УНИВЕРСАЛЬНЫЙ КОНВЕЙЕР ДЛЯ ОТРИСОВКИ КАРТОЧЕК

function displayAllCards() {
    libraryData.forEach(function(item) {
        const container = document.getElementById(`${item.category}-container`);
        if (!container) return;

        // Создаем уникальный ID для data-id из названия (например, "resident-evil-9")
        const generatedId = item.title.toLowerCase().replace(/[:\s]+/g, '-');
        
        // Проверяем статус лайка из localStorage на старте
        const isLiked = likedCards.includes(generatedId);
        const currentHeart = isLiked ? '❤️' : '🤍';
        const currentClass = isLiked ? 'active-card' : '';

        const cardHTML = `
            <div class="cards ${currentClass}" data-id="${generatedId}">
                <h3 class="item-title">${item.title}</h3>
                <img src="${item.img}" alt="${item.title}">
                <p><b>Origin:</b> ${item.origin}</p>
                <p class="minidescr">${item.descr}</p>
                <div class="card-status">
                    <span class="rating">⭐ ${item.rating || 'N/A'}</span>
                    <span class="heart-icon">${currentHeart}</span>
                </div>
                <div class="btn-container">
                    <button class="btn">${item.btn1Text}</button>
                    <button class="btn">${item.btn2Text}</button>
                </div>
            </div>
        `;

        container.innerHTML += cardHTML;
    });
}

// СНАЧАЛА ГЕНЕРИРУЕМ КАРТОЧКИ С ПРАВИЛЬНЫМИ data-id И СЕРДЦАМИ
displayAllCards();


// =========================================================================
// 3. ЛОГИКА ИЗБРАННОГО И СЧЕТЧИКА (Перенесена вниз, чтобы видеть карточки)
// =========================================================================
const hearts = document.querySelectorAll('.heart-icon');
const favCountElement = document.querySelector('#fav-count');

if (favCountElement) {
    favCountElement.textContent = likedCards.length;
}

if (hearts.length > 0) {
    hearts.forEach(heart => {
        heart.addEventListener('click', () => {
            const card = heart.closest('.cards');
            if (!card) return;

            const cardId = card.getAttribute('data-id');

            // Белое сердце -> Становится красным, карточка загорается
            if (heart.textContent.trim() === '🤍') {
                heart.textContent = '❤️';
                card.classList.add('active-card');
                heart.style.transform = 'scale(1.3)';
                heart.style.transition = 'transform 0.2s';

                if (!likedCards.includes(cardId)) {
                    likedCards.push(cardId);
                }
            } else {
                // Красное сердце -> Становится белым, карточка тухнет
                heart.textContent = '🤍';
                card.classList.remove('active-card');
                heart.style.transform = 'scale(1)';

                likedCards = likedCards.filter(id => id !== cardId);
            }

            localStorage.setItem('likedCardsArray', JSON.stringify(likedCards));

            if (favCountElement) {
                favCountElement.textContent = likedCards.length;

                favCountElement.style.transform = 'scale(1.2) translateY(-2px)';
                setTimeout(() => {
                    favCountElement.style.transform = 'scale(1) translateY(0)';
                }, 150);
            }
        });
    });
}


// =========================================================================
// 4. ПОИСКОВОЕ МЕНЮ И ТЕМА (Твой код)
// =========================================================================
const searchBtn = document.querySelector('#search-btn');
const searchDropdown = document.querySelector('#search-dropdown');

if (searchBtn && searchDropdown) {
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchDropdown.classList.toggle('dropdown-hidden');
    });
}

const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        
        if (document.body.classList.contains('light-theme')) {
            themeToggleBtn.innerText = "Темная тема 🌙";
        } else {
            themeToggleBtn.innerText = "Светлая тема ☀️";
        }
    });
}
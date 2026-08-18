/* =========================================================
   STREAMBOX - COMPLETE SCRIPT
   ========================================================= */


/* =========================================================
   MOVIE DATA
   ========================================================= */

const movies = [

    {
        id: "barbie",
        title: "Barbie",
        year: "2023",
        rating: "PG-13",
        duration: "1h 54m",
        type: "Movie",
        poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        description:
            "Barbie and Ken are having the time of their lives in the colorful world of Barbie Land."
    },

    {
        id: "batman",
        title: "The Batman",
        year: "2022",
        rating: "PG-13",
        duration: "2h 56m",
        type: "Movie",
        poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        description:
            "Batman ventures into Gotham City's criminal underworld when a sadistic killer leaves behind a trail of cryptic clues."
    },

    {
        id: "wonka",
        title: "Wonka",
        year: "2023",
        rating: "PG",
        duration: "1h 56m",
        type: "Movie",
        poster: "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
        description:
            "A young chocolatier dreams of opening his own shop and discovers a world filled with imagination, friendship and adventure."
    },

    {
        id: "inception",
        title: "Inception",
        year: "2010",
        rating: "PG-13",
        duration: "2h 28m",
        type: "Movie",
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        description:
            "A skilled extractor who steals secrets through shared dreams is given a chance to erase his past."
    },

    {
        id: "interstellar",
        title: "Interstellar",
        year: "2014",
        rating: "PG-13",
        duration: "2h 49m",
        type: "Movie",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description:
            "Explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },

    {
        id: "dune",
        title: "Dune: Part Two",
        year: "2024",
        rating: "PG-13",
        duration: "2h 46m",
        type: "Movie",
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        description:
            "Paul Atreides joins Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
    },

    {
        id: "oppenheimer",
        title: "Oppenheimer",
        year: "2023",
        rating: "R",
        duration: "3h 00m",
        type: "Movie",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        description:
            "The story of American scientist J. Robert Oppenheimer and his role in developing the atomic bomb."
    },

    {
        id: "spiderverse",
        title: "Spider-Man: Across the Spider-Verse",
        year: "2023",
        rating: "PG",
        duration: "2h 20m",
        type: "Movie",
        poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        description:
            "Miles Morales travels across the Multiverse and encounters a team charged with protecting its existence."
    },

    {
        id: "strangerthings",
        title: "Stranger Things",
        year: "2016",
        rating: "TV-14",
        duration: "4 Seasons",
        type: "Series",
        poster: "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
        description:
            "A group of friends uncover a mystery involving secret experiments, supernatural forces and a strange girl."
    },

    {
        id: "mandalorian",
        title: "The Mandalorian",
        year: "2019",
        rating: "TV-14",
        duration: "3 Seasons",
        type: "Series",
        poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
        description:
            "A lone bounty hunter travels through the outer reaches of the galaxy and becomes the protector of a mysterious child."
    }

];


/* =========================================================
   HOME PAGE ROWS
   ========================================================= */

const trendingMovies = [
    movies[3], // Inception
    movies[4], // Interstellar
    movies[7], // Spider-Man
    movies[5], // Dune
    movies[6], // Oppenheimer
    movies[1]  // Batman
];


const popularMovies = [
    movies[0], // Barbie
    movies[1], // Batman
    movies[2], // Wonka
    movies[3], // Inception
    movies[4], // Interstellar
    movies[5]  // Dune
];


const tvShows = [
    movies[8], // Stranger Things
    movies[9]  // The Mandalorian
];


/* =========================================================
   MY LIST
   ========================================================= */

let myList = [];

try {

    myList =
        JSON.parse(
            localStorage.getItem("streamboxList")
        ) || [];

} catch (error) {

    myList = [];

}


/* =========================================================
   SAVE MY LIST
   ========================================================= */

function saveMyList() {

    localStorage.setItem(
        "streamboxList",
        JSON.stringify(myList)
    );

}


/* =========================================================
   IMAGE FALLBACK
   ========================================================= */

function imageError(image) {

    if (image.dataset.failed === "true") {
        return;
    }

    image.dataset.failed = "true";

    image.src =
        "https://placehold.co/500x750/15161b/ffffff?text=Poster+Unavailable";

}


/* =========================================================
   CREATE MOVIE CARD
   ========================================================= */

function createMovieCard(movie) {

    const isSaved =
        myList.includes(movie.id);

    return `

        <article
            class="movie-card"
            data-id="${movie.id}"
            data-title="${movie.title.toLowerCase()}"
        >

            <div class="poster">

                <img
                    src="${movie.poster}"
                    alt="${movie.title} poster"
                    loading="lazy"
                    onerror="imageError(this)"
                >

                <div class="card-overlay"></div>

                <div class="card-buttons">

                    <button
                        class="circle-button play-movie"
                        data-id="${movie.id}"
                        aria-label="Play ${movie.title}"
                    >
                        ▶
                    </button>

                    <button
                        class="circle-button add-movie"
                        data-id="${movie.id}"
                        aria-label="Add ${movie.title} to My List"
                    >
                        ${isSaved ? "✓" : "+"}
                    </button>

                </div>

            </div>

            <h3>${movie.title}</h3>

            <div class="movie-details">

                <span>${movie.year}</span>

                <span>${movie.rating}</span>

                <span>${movie.duration}</span>

            </div>

        </article>

    `;
}


/* =========================================================
   RENDER MOVIE ROW
   ========================================================= */

function renderRow(elementId, movieList) {

    const container =
        document.getElementById(elementId);

    if (!container) {
        return;
    }

    container.innerHTML =
        movieList
            .map(movie => createMovieCard(movie))
            .join("");

}


/* =========================================================
   RENDER MY LIST
   ========================================================= */

function renderMyList() {

    const container =
        document.getElementById("myListRow");

    const emptyMessage =
        document.getElementById("emptyList");

    if (!container) {
        return;
    }

    const savedMovies =
        movies.filter(movie =>
            myList.includes(movie.id)
        );


    container.innerHTML =
        savedMovies
            .map(movie => createMovieCard(movie))
            .join("");


    if (emptyMessage) {

        if (savedMovies.length === 0) {

            emptyMessage.style.display =
                "block";

        } else {

            emptyMessage.style.display =
                "none";

        }

    }

}


/* =========================================================
   RENDER EVERYTHING
   ========================================================= */

function renderEverything() {

    renderRow(
        "trendingRow",
        trendingMovies
    );

    renderRow(
        "popularRow",
        popularMovies
    );

    renderRow(
        "showsRow",
        tvShows
    );

    renderMyList();

}


/* =========================================================
   TOGGLE MY LIST
   ========================================================= */

function toggleMyList(movieId) {

    const exists =
        myList.includes(movieId);


    if (exists) {

        myList =
            myList.filter(
                id => id !== movieId
            );

    } else {

        myList.push(movieId);

    }


    saveMyList();

    renderEverything();

}


/* =========================================================
   GET MOVIE BY ID
   ========================================================= */

function getMovie(movieId) {

    return movies.find(
        movie => movie.id === movieId
    );

}


/* =========================================================
   MODAL
   ========================================================= */

function openMovieModal(movie) {

    const modal =
        document.getElementById(
            "movieModal"
        );

    if (!modal) {
        return;
    }


    const poster =
        document.getElementById(
            "modalPoster"
        );

    const title =
        document.getElementById(
            "modalTitle"
        );

    const meta =
        document.getElementById(
            "modalMeta"
        );

    const description =
        document.getElementById(
            "modalDescription"
        );


    if (poster) {

        poster.src =
            movie.poster;

        poster.alt =
            movie.title;

        poster.dataset.failed =
            "false";

        poster.onerror =
            function () {

                imageError(this);

            };

    }


    if (title) {

        title.textContent =
            movie.title;

    }


    if (meta) {

        meta.innerHTML = `

            <span>${movie.year}</span>

            <span>${movie.rating}</span>

            <span>${movie.duration}</span>

            <span>${movie.type}</span>

        `;

    }


    if (description) {

        description.textContent =
            movie.description;

    }


    modal.classList.add("show");

    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeMovieModal() {

    const modal =
        document.getElementById(
            "movieModal"
        );

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   MODAL EVENTS
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const closeButton =
            event.target.closest(
                "#closeModal"
            );


        if (closeButton) {

            closeMovieModal();

        }


        const modal =
            document.getElementById(
                "movieModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeMovieModal();

        }

    }
);


/* =========================================================
   CARD BUTTON EVENTS
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {


        /* -------------------------
           PLAY BUTTON
        ------------------------- */

        const playButton =
            event.target.closest(
                ".play-movie"
            );


        if (playButton) {

            const movie =
                getMovie(
                    playButton.dataset.id
                );


            if (movie) {

                openMovieModal(movie);

            }

            return;

        }


        /* -------------------------
           ADD BUTTON
        ------------------------- */

        const addButton =
            event.target.closest(
                ".add-movie"
            );


        if (addButton) {

            toggleMyList(
                addButton.dataset.id
            );

            return;

        }

    }
);


/* =========================================================
   HERO PLAY BUTTON
   ========================================================= */

const heroPlay =
    document.getElementById(
        "heroPlay"
    );


if (heroPlay) {

    heroPlay.addEventListener(
        "click",
        function () {

            const featuredMovie = {

                id: "featured",

                title:
                    "The Last Horizon",

                year:
                    "2026",

                rating:
                    "16+",

                duration:
                    "2h 18m",

                type:
                    "Movie",

                poster:
                    "https://placehold.co/500x750/15161b/ffffff?text=The+Last+Horizon",

                description:
                    "Humanity's final expedition travels beyond the known universe to discover a mysterious planet that could change everything."

            };


            openMovieModal(
                featuredMovie
            );

        }
    );

}


/* =========================================================
   HERO MORE INFO BUTTON
   ========================================================= */

const heroInfo =
    document.getElementById(
        "heroInfo"
    );


if (heroInfo) {

    heroInfo.addEventListener(
        "click",
        function () {

            const moviesSection =
                document.getElementById(
                    "movies"
                );


            if (moviesSection) {

                moviesSection.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "start"

                });

            }

        }
    );

}


/* =========================================================
   SEARCH
   ========================================================= */

const searchButton =
    document.getElementById(
        "searchButton"
    );

const searchBox =
    document.getElementById(
        "searchBox"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );


if (searchButton && searchBox) {

    searchButton.addEventListener(
        "click",
        function () {

            searchBox.classList.toggle(
                "show"
            );


            if (
                searchBox.classList.contains(
                    "show"
                )
            ) {

                if (searchInput) {

                    searchInput.focus();

                }

            }

        }
    );

}


/* =========================================================
   SEARCH FUNCTION
   ========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const query =
                this.value
                    .toLowerCase()
                    .trim();


            const cards =
                document.querySelectorAll(
                    ".movie-card"
                );


            cards.forEach(
                function (card) {

                    const title =
                        card.dataset.title ||
                        "";


                    if (
                        query === "" ||
                        title.includes(query)
                    ) {

                        card.style.display =
                            "";

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeMovieModal();

        }

    }
);


/* =========================================================
   CAROUSEL
   ========================================================= */

function scrollRow(
    rowId,
    direction
) {

    const row =
        document.getElementById(
            rowId
        );


    if (!row) {
        return;
    }


    row.scrollBy({

        left:
            direction * 650,

        behavior:
            "smooth"

    });

}


/* =========================================================
   CAROUSEL BUTTONS
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "[data-scroll]"
            );


        if (!button) {
            return;
        }


        const rowId =
            button.dataset.scroll;


        const direction =
            button.dataset.direction === "left"
                ? -1
                : 1;


        scrollRow(
            rowId,
            direction
        );

    }
);


/* =========================================================
   NAVIGATION
   ========================================================= */

const navLinks =
    document.querySelectorAll(
        "nav a"
    );


navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );

            }
        );

    }
);


/* =========================================================
   NAVIGATION SCROLL
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const link =
            event.target.closest(
                "[data-section]"
            );


        if (!link) {
            return;
        }


        const sectionId =
            link.dataset.section;


        const section =
            document.getElementById(
                sectionId
            );


        if (section) {

            event.preventDefault();


            section.scrollIntoView({

                behavior:
                    "smooth",

                block:
                    "start"

            });

        }

    }
);


/* =========================================================
   NOTIFICATION BUTTON
   ========================================================= */

const notificationButton =
    document.getElementById(
        "notificationButton"
    );


if (notificationButton) {

    notificationButton.addEventListener(
        "click",
        function () {

            alert(
                "You're all caught up! 🍿"
            );

        }
    );

}


/* =========================================================
   PROFILE BUTTON
   ========================================================= */

const profileButton =
    document.getElementById(
        "profileButton"
    );


if (profileButton) {

    profileButton.addEventListener(
        "click",
        function () {

            alert(
                "Welcome to StreamBox!"
            );

        }
    );

}


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderEverything();

    }
);


/* =========================================================
   ALSO RUN IMMEDIATELY
   ========================================================= */

renderEverything();


/* =========================================================
   END OF STREAMBOX SCRIPT
   ========================================================= */
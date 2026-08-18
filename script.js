// ===============================
// MOVIE ROW SCROLL
// ===============================

function scrollMovies(rowId, direction) {

    const row = document.getElementById(rowId);

    const scrollAmount = 600;

    row.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}


// ===============================
// PLAY BUTTON
// ===============================

const playButton = document.getElementById("playBtn");

playButton.addEventListener("click", function () {

    alert(
        "Demo Mode 🎬\n\n" +
        "The Play button works, " +
        "but this project does not contain real video streaming."
    );

});


// ===============================
// MORE INFO BUTTON
// ===============================

const infoButton = document.getElementById("infoBtn");

infoButton.addEventListener("click", function () {

    alert(
        "THE LAST HORIZON\n\n" +
        "2026 • 16+ • 2h 18m • HD\n\n" +
        "A fearless crew crosses the edge " +
        "of known space to find a world " +
        "that could change humanity forever."
    );

});


// ===============================
// SEARCH BUTTON
// ===============================

const searchButton =
    document.getElementById("searchBtn");

searchButton.addEventListener(
    "click",
    function () {

        const movie =
            prompt("Search for a movie:");

        if (movie) {

            alert(
                "You searched for: " +
                movie
            );

        }

    }
);


// ===============================
// MOVIE CARD CLICK
// ===============================

const movieCards =
    document.querySelectorAll(".movie-card");

movieCards.forEach(function(card) {

    card.addEventListener(
        "click",
        function() {

            const title =
                card.querySelector("h3").innerText;

            alert(
                "You selected:\n\n" +
                title.replace("\n", " ")
            );

        }
    );

});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

window.addEventListener(
    "scroll",
    function() {

        const navbar =
            document.querySelector(".navbar");

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(0,0,0,0.95)";

        } else {

            navbar.style.background =
                "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)";

        }

    }
);
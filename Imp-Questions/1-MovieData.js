const favoriteMovie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes"]
};

function printMovieInfo(movie) {
    const stars = movie.stars.join(", ");
    console.log(`"${movie.title} lasts for ${movie.duration} minutes. Stars: ${stars}."`);
}
printMovieInfo(favoriteMovie);

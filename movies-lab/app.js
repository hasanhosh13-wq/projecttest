
import fs from "node:fs";

const movies = JSON.parse(
  fs.readFileSync(
    new URL("./movies.json", import.meta.url),
    "utf8"
  )
);

console.log("All movies:", movies);

const titles = movies.map(movie => movie.title);
console.log("Titles:", titles);

const bestMovies = movies.filter(movie => movie.rating >= 8);
console.log("Best movies:", bestMovies);

const found = movies.find(movie => movie.id === 2);
console.log("Found:", found);

const average = movies.reduce(
  (sum, movie) => sum + movie.rating, 0
) / movies.length;

console.log("Average:", average);

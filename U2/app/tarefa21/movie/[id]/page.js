import React from 'react';
export const revalidate = 86400

export default async function Home({ params }) {
    const {id} = await params
    const movie = await fetch(`https://www.omdbapi.com/?apikey=7a7e2055&i=${id}`).then(res => res.json())
    return (
        <div>
            <h1>{movie.Title} ({movie.Year})</h1>
            <p>Director: {movie.Director}</p>
            <p>Plot: {movie.Plot}</p>

        </div>
    );
};


export async function generateStaticParams() {
    const allMovies = await fetch('https://www.omdbapi.com/?apikey=7a7e2055&s=lady').then((res) => res.json())
    return allMovies.Search.map((movie) => ({
      id: movie.imdbID,
    }))
 }
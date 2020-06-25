import React from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill } from "react-icons/bs";

import './index.sass'
import useGetMovies from '../../hooks/services/useGetMovies';

export default function Index() {
    const movies = useGetMovies();

    return (
        <main>
            <article>
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <h3>{movie.Title}</h3>
                            <h4>{movie.Genre}</h4>
                            <Link to={`/movies/${movie.id}`}>
                                <BsEyeFill size={25}/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </article>
        </main>
    );
}

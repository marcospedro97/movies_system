import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs'
import './Show.sass'
import useMovie from '../../hooks/services/useMovie'

export default function Show() {
    const { id } = useParams();
    const [movie, handleDestroy] = useMovie();
    
    return(
        <article>
                <strong>{movie.Title}</strong>
                <hr />
                <ul className="hierarchy2">
                    <li>Genero: {movie.Genre}</li>
                    <li>Idioma: {movie.Language}</li>
                    <li>Legendas: {movie.Subtitle}</li>
                    <li>Diretor: {movie.Director}</li>
                    <li>Link: <a href={movie.IMDB}>IMDB</a></li>
                    <li>Rank: {movie.Rank}</li>
                </ul>
                <p className="synopsis">{movie.Synopsis}</p>
                <p className="year">{movie.Year}</p>
                <section>
                    < BsFillTrashFill onClick={() => handleDestroy(id)} size={25}/>
                    <Link to={`/movies/${movie.id}/edit`} className="edit">
                        < BsPencilSquare size={25}/>
                    </Link>
                </section>
        </article>
    );
}